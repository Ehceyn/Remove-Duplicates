import React, { useContext, useEffect, useState } from "react";
import { TextContext } from "../contexts/TextContext";
import MessageModal from "./Modals/MessageModal";

interface TextContextProps {
  text: string;
  setText: (value: string) => void;
}

const CreateArea = () => {
  // Define state for the input value and set its initial value to an empty string
  const [input, setInput] = useState<string>("");

  // Access the text and setText properties from the TextContext using the useContext hook
  const { text, setText } = useContext<TextContextProps>(TextContext);

  // MessageModal States Start
  const [displayMessageModal, setDisplayMessageModal] =
    useState<boolean>(false);
  const [messageModalHeading, setMessageModalHeading] = useState<string>("");
  const [messageModalMessage, setMessageModalMessage] = useState<string>("");
  const [messageModalStatus, setMessageModalStatus] = useState<string>("");
  // MessageModal States End

  /**
   * A function that handles changes to the input element.
   * It takes an event parameter that contains information about the event and updates the component's text state with the new value.
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event - The event object containing information about the input element that triggered the event.
   */
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(event.target.value);
  }

  /**
   * Submits the current input text to the component's state if it is not empty or only contains whitespace characters.
   * If the input is empty or contains only whitespace, logs an error message.
   *
   * This function updates the component's text state by calling `setText()` with the current value of `input`.
   * It then resets the `input` state to an empty string, clearing the input field.
   */
  function submitText() {
    if (input === null || input.match(/^ *$/) !== null) {
      // If the input is empty or contains only whitespace, call message modal
      setMessageModalHeading("Error");
      setMessageModalMessage("Input is empty");
      setMessageModalStatus("error");
      setDisplayMessageModal(true);
    } else {
      setText(input);
      setInput("");
    }
  }

  // close messageModal
  useEffect(() => {
    if (displayMessageModal) {
      setTimeout(() => {
        setDisplayMessageModal(false);
      }, 2500);
    }
  }, [displayMessageModal]);

  return (
    <div className="border sm:w-[400px] w-full h-fit border-[#faf1f1] rounded-lg p-4 shadow-md">
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          submitText();
          event.preventDefault();
        }}
      >
        <textarea
          name="text"
          placeholder="Enter any text"
          onChange={handleChange}
          value={input}
          rows={3}
          autoFocus
          className="w-full min-h-[48px] bg-white px-4 rounded-lg focus:outline-none"
        ></textarea>

        <div className="mt-4">
          <div className="flex justify-end">
            <button
              onClick={() => {
                setInput("");
              }}
              type="button"
              className="px-4 py-2 font-bold text-pink-500 bg-white border border-pink-500 rounded-md mr-2 transition duration-200 ease-in hover:bg-[#fcf0f6]"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-pink-500 border border-pink-500 rounded-md transition duration-200 ease-in"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      {/* Message Modal */}
      <MessageModal
        displayMessageModal={displayMessageModal}
        heading={messageModalHeading}
        message={messageModalMessage}
        status={messageModalStatus}
      />
    </div>
  );
};

export default CreateArea;
