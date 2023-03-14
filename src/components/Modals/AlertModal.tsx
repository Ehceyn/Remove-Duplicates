/**
 * AlertModal is a reusable modal component that displays a success message with original and resultant text areas and a button to close the modal.
 *
 * @param {string} heading - The heading text for the modal.
 * @param {string} originalText - The original text to display in the original text area.
 * @param {string} resultantText - The resultant text to display in the resultant text area.
 * @param {string} ButtonText - The text for the button that closes the modal.
 * @param {function} onCallAlertModal - The function to call when the user clicks outside of the modal.
 * @param {function} onClickButton - The function to call when the user clicks the button to close the modal.
 * @param {boolean} display - A boolean value to determine whether to display the modal or not.
 * @returns {JSX.Element} - A modal component with success message, text areas, and a button.
 */

import React, { useState } from "react";
import { authLeft, scaleUp } from "../../animations/animations";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  heading: string;
  originalText: string;
  resultantText: string;
  ButtonText: string;
  onCallAlertModal: () => void;
  onClickButton: () => void;
  display: boolean;
}

function AlertModal(props: Props): JSX.Element {
  const [loader, setLoader] = useState(false);

  return (
    <AnimatePresence>
      {props.display && (
        <motion.section
          variants={authLeft}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`w-full h-screen px-4 bg-[#4b4949b2] shadow-sm fixed inset-0 z-[30000] flex items-center  justify-center ${
            props.display ? "flex" : "hidden"
          } `}
          onClick={props.onCallAlertModal}
        >
          <motion.div
            variants={scaleUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col justify-between w-full h-fit sm:w-[450px] border rounded-lg bg-white border-[#686868] p-5 sm:p-7 shadow-[0px_0px_20px_15px_#0e1e7a1f]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Heading start */}
            <article className="w-full flex justify-center  mb-4">
              <p className="font-bold  text-xl">{props.heading}</p>
            </article>
            {/* Heading end */}
            <div className=" w-full h-fit border-[#faf1f1] rounded-lg space-y-5">
              <div>
                <p className="mb-1">Original text</p>
                <textarea
                  className="w-full font-bold bg-white border border-[#e7e1e1] px-4 py-2 rounded-lg focus:outline-none "
                  readOnly
                  rows={3}
                  value={props.originalText}
                ></textarea>
              </div>
              <div>
                <p className="mb-1">Resultant text</p>
                <textarea
                  className="w-full font-bold bg-white border border-[#e7e1e1] px-4 py-2 rounded-lg focus:outline-none"
                  readOnly
                  rows={3}
                  value={props.resultantText}
                ></textarea>
              </div>
            </div>
            {/* Alert buttons start */}
            <article className="flex items-center justify-between w-full mt-7">
              <button
                type="button"
                className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-white rounded-md bg-pink-500 hover:brightness-90 tracking-widest`}
                onClick={props.onClickButton}
              >
                {`${props.ButtonText}`}
              </button>
            </article>
            {/* Alert buttons end */}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default AlertModal;
