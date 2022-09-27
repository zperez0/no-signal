import React from "react";
import PropTypes from "prop-types";

function Note(props) {
  return (
    <React.Fragment>
      <ul>
        <div onClick={() => props.whenNoteClicked(props.id)}>
          <h3>{props.title}</h3>
        </div>
      </ul>
    </React.Fragment>
  );
}

Note.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  whenNoteClicked: PropTypes.func,
};

export default Note;
