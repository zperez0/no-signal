import React from "react";
import PropTypes from "prop-types";

const ReusableForm = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md my-10">
          <form onSubmit={props.formSubmissionHandler}>
            <div className="form-group mb-6">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                name="body"
                placeholder="body"
                className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                id="exampleFormControlTextarea13"
                rows="3"
              />
            </div>
            <button
              type="submit"
              className="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
            >
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
