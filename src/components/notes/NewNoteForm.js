import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

import { UserAuth } from "../../context/AuthContext";

function NewNoteForm(props) {
  
  const {user} = UserAuth();

  function handleNewNoteFormSubmission(event) {
    event.preventDefault()
    props.onNewNoteCreation({
      title: event.target.title.value,
      body: event.target.body.value,
      username: user.displayName,
      userId: user.uid,
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