import React from "react";
import Note from "./Note";
import PropTypes from "prop-types";

function NoteList(props) {
  

  return (
    <>
      <div className="p-6 text-center">
      {props.noteList.map((note) => (
        <Note
        whenNoteClicked = { props.onNoteSelection }
        title={note.title} 
        body={note.body}
        id={note.id}
        key={note.id} />
      ))}
      </div>
    </>
  );
}

NoteList.propTypes = {
  noteList: PropTypes.array,
  onNoteSelection: PropTypes.func
}

export default NoteList;