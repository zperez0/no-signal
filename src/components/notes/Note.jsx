import React from "react";
import PropTypes from "prop-types";

function Note(props) {
  return (
    <React.Fragment>
      {/* <div className="grid grid-cols-4 p-6 grid-flow-row gap-4">
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div className="text-xl font-medium text-black">
            <div onClick={() => props.whenNoteClicked(props.id)}>
              <h3>{props.title}</h3>
            </div>
          </div>
          <p className="text-slate-500">Date</p>
        </div>
        </div> */}


<div className="grid grid-rows-3 grid-flow-col gap-4"></div> {/* when I leave this div the boxes seperate..wtf? */}
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div>
    <div className="text-xl font-medium text-black"><div onClick={() => props.whenNoteClicked(props.id)}>
              <h3>{props.title}</h3>
              </div>
    <p className="text-slate-500">Date</p>
  </div>
</div>
</div>

{/* <div className="grid grid-cols-1">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <div
              className="text-lg text-black font-semibold"
              onClick={() => props.whenNoteClicked(props.id)}
            >
              <h3>{props.title}</h3>
            </div>
            <p className="text-slate-500 font-medium">Date</p>
          </div>
        </div>
      </div>
      </div> */}
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


// -----NOTES-----
// WIP: work on fixing grid layout