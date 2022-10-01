import React from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import "./NoteItem.css";

function Note(props) {
  return (
    <React.Fragment>
      <div className="container">
      <Card className="note-item">
        <div className="note-item__title">
          <div onClick={() => props.whenNoteClicked(props.id)}>
            <h3>{props.title}</h3>
          </div>
        </div>

        <p>Date</p>
      </Card>
      </div>
    </React.Fragment>
  );
}

Note.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  // user_id: PropTypes.string,
  whenNoteClicked: PropTypes.func,
};

export default Note;

// -----NOTES-----
// WIP: work on fixing grid layout

// function Note(props) {
//   return (
//     <React.Fragment>
// <div className="mt-12 h-20 flex flex-wrap justify-center">
// <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
//   <div>
//     <div className="text-xl font-medium text-black"> <div onClick={() => props.whenNoteClicked(props.id)}>
//               <h3>{props.title}</h3>
//               </div>
//               </div>
//               <p className="text-slate-500">Date</p>
//   </div>
// </div>
// </div>

//     </React.Fragment>
//   );
// }
