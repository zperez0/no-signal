import React from "react";
import PropTypes from "prop-types";
import "../UI/NoteItem.css";

const Note = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container">
          <div className="w-80">
            <div className="card m-2 cursor-pointer bg-white opacity-75 border border-white rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <div className="m-6">
                <div onClick={() => props.whenNoteClicked(props.id)}>
                  <h2 className="text-lg mb-2">{props.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Note.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  whenNoteClicked: PropTypes.func,
};

export default Note;
