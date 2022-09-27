import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function NewNoteForm(props) {

  function handleNewNoteFormSubmission(event) {
    event.preventDefault()
    props.onNewNoteCreation({
      title: event.target.title.value,
      body: event.target.body.value,
    })
  }
  return (
    <>
    <ReusableForm 
      formSubmissionHandler={handleNewNoteFormSubmission}
      buttonText="Submit" />
    </>
  );
}

NewNoteForm.propTypes = {
  onNewNoteCreation: PropTypes.func
}

export default NewNoteForm;