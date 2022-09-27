import React from "react";
import PropTypes from "prop-types"

function NoteDetail(props) {
  const { note, onClickingDelete, onClickingEdit } = props;

  return (
    <>
      <h1>Note Detail</h1>
      <h2>{note.title}</h2>
      <h3>{note.body}</h3>
      <button onClick={ onClickingEdit }>Update Note</button>
      <button onClick={() => onClickingDelete(note.id) }>Delete Note</button>
    </>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default NoteDetail;