import React, { useEffect, useState } from "react";
import NewNoteForm from "./NewNoteForm";
import NoteDetail from "./NoteDetail";
import NoteList from "./NoteList";
import EditNoteForm from "./EditNoteForm";
import { db } from "../../firebase.js";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function NoteControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainNotePadList, setMainNotePadList] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "notes"),
      (collectionSnapShot) => {
        const notes = collectionSnapShot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setMainNotePadList(notes);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedNote != null) {
      setFormVisibleOnPage(false);
      setSelectedNote(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleAddingNewNoteToList = async (newNoteData) => {
    const collectionRef = collection(db, "notes");
    await addDoc(collectionRef, newNoteData);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedNote = (id) => {
    const selection = mainNotePadList.filter((note) => note.id === id)[0];
    setSelectedNote(selection);
  };

  const handleDeletingNote = async (id) => {
    const noteToDeleteRef = doc(db, "notes", id);
    await deleteDoc(noteToDeleteRef);
    setSelectedNote(null);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditingNoteInList = async (noteToEdit) => {
    const noteRef = doc(db, "notes", noteToEdit.id);
    await updateDoc(noteRef, noteToEdit);
    setSelectedNote(null);
    setEditing(false);
  };

  let currentlyVisibleState = null;
  let buttonText = null;

  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>;
  } else if (editing) {
    currentlyVisibleState = (
      <EditNoteForm note={selectedNote} onEditNote={handleEditingNoteInList} />
    );
    buttonText = "Return Home";
  } else if (selectedNote != null) {
    currentlyVisibleState = (
      <NoteDetail
        note={selectedNote}
        onClickingDelete={handleDeletingNote}
        onClickingEdit={handleEditClick}
      />
    );
    buttonText = "Return Home";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = (
      <NewNoteForm onNewNoteCreation={handleAddingNewNoteToList} />
    );
    buttonText = "Return Home";
  } else {
    currentlyVisibleState = (
      <NoteList
        noteList={mainNotePadList}
        onNoteSelection={handleChangingSelectedNote}
      />
    );
    buttonText = "Add Note";
  }
  return (
    <>
      {currentlyVisibleState}
      {error ? null : <button onClick={handleClick}>{buttonText}</button>}
    </>
  );
}

export default NoteControl;
