import React from "react";
import PropTypes from "prop-types";

const NoteDetail = (props) => {
  const { note, onClickingDelete, onClickingEdit } = props;

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container">
          <div className="w-96 my-10">
            <div className="flex justify-center">
              <div className="mb-6 rounded-lg shadow-lg bg-white opacity-75 max-w-sm">
                <div className="p-14">
                  <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">
                    {note.title}
                  </h5>
                  <p className="text-gray-700 text-base mb-12">{note.body}</p>
                  <div className="btn-detail">
                    <button onClick={onClickingEdit}>Edit</button>
                    <button onClick={() => onClickingDelete(note.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NoteDetail.propTypes = {
  note: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default NoteDetail;
