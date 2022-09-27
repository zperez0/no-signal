import React from "react";
import Note from "./Note";
import PropTypes from "prop-types";

function NoteList(props) {
  

  return (
    <>
      <h2>List</h2>
      {props.noteList.map((note) => (
        <Note
        whenNoteClicked = { props.onNoteSelection }
        title={note.title} 
        body={note.body}
        id={note.id}
        key={note.id} />
      ))}
    </>
  );
}

NoteList.propTypes = {
  noteList: PropTypes.array,
  onNoteSelection: PropTypes.func
}

export default NoteList;
