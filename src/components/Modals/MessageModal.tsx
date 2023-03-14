/**
 * MessageModal Component:
 * A reusable modal component for displaying messages to the user.
 *
 * @param {boolean} displayMessageModal - Determines whether the modal is displayed or not.
 * @param {string} status - The status of the message (success or error).
 * @param {string} [heading] - The heading to display in the modal.
 * @param {string} [message] - The message to display in the modal.
 *
 * @returns {JSX.Element} - Returns the message modal component.
 */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideUp } from "../../animations/animations";

interface MessageModalProps {
  displayMessageModal: boolean;
  status: string;
  heading?: string;
  message?: string;
}

function MessageModal(props: MessageModalProps): JSX.Element {
  return (
    <AnimatePresence>
      {props.displayMessageModal && (
        <motion.section
          variants={slideUp}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`fixed right-5 top-5 w-80 h-fit xs:w-96 xs:h-fit shadow-md rounded-md bg-white border border-t-gray-100 border-x-gray-100 px-3 py-3 flex items-center space-x-3 z-[20000] ${
            props.status === "success"
              ? "border-b-2 border-green-600"
              : "border-b-2 border-[#fc1d1d]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center ">
            {props.status === "success" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="green"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fc1d1d"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <div className="">
            <h1 className={` font-medium text-left `}>
              {props.heading || "Error"}
            </h1>
            <p className="">{props.message || "An error occourred"}</p>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default MessageModal;
