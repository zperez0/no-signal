import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditNoteForm(props) {
  const { note } = props;

  function handleEditNoteFormSubmission(event) {
    event.preventDefault();
    props.onEditNote({
      title: event.target.title.value,
      body: event.target.body.value,
      // user_id: note.user_id,
      id: note.id
    })
  }
  return (
    <>
      <ReusableForm 
      formSubmissionHandler={handleEditNoteFormSubmission}
      buttonText="Update Note" />
    </>
  );
}

EditNoteForm.propTypes = {
  note: PropTypes.object,
  onEditNote: PropTypes.func,
}

export default EditNoteForm;
