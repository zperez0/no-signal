import React from "react";
import PropTypes from "prop-types";
import Card from "./../UI/Card";

function NoteDetail(props) {
  const { note, onClickingDelete, onClickingEdit } = props;

  return (
    <>
      <div className="detail">
        <Card>
          <h1>Note Detail</h1>
          <h2>{note.title}</h2>
          <h3>{note.body}</h3>
          <div className="btn-detail">
            <button onClick={onClickingEdit}>Edit</button>
            <button onClick={() => onClickingDelete(note.id)}>
              Delete
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default NoteDetail;
