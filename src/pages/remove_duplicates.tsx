import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import AlertModal from "../components/Modals/AlertModal";
import MessageModal from "../components/Modals/MessageModal";
import OutputBoard from "../components/OutputBoard";
import { TextContext } from "../contexts/TextContext";
import { useNavigate } from "react-router-dom";

interface TextContextProps {
  text: string;
  setText: (value: string) => void;
}

interface ColorMap {
  [key: string]: string;
}

const RemoveDuplicates: React.FC = () => {
  // Access the text and setText properties from the TextContext using the useContext hook
  const { text, setText } = useContext<TextContextProps>(TextContext);
  // MessageModal States Start
  const [displayMessageModal, setDisplayMessageModal] =
    useState<boolean>(false);
  const [messageModalHeading, setMessageModalHeading] = useState<string>("");
  const [messageModalMessage, setMessageModalMessage] = useState<string>("");
  const [messageModalStatus, setMessageModalStatus] = useState<string>("");
  // MessageModal States End
  // AlertModal States Start
  const [displayAlert, setDisplayAlert] = useState<boolean>(false);
  const [alertHeading, setAlertHeading] = useState<string>("");
  // AlertModal States End
  // Removed charcter state
  const [removedCharacter, setRemovedCharacter] = useState<string>("");

  // Define state for the backup text and set its initial value to the current text: this is necessary because we will be deleting characters from the backup text and we don't want to lose the original text
  const [backupText, setBackupText] = useState<string>(text);

  // Define state for the resultant text after removing duplicates and set its initial value to an empty string
  const [resultantText, setResultantText] = useState<string>("");

  // Define a color map to store the color of each unique character
  const [colorMap, setColorMap] = useState<ColorMap>({});

  // initialize useNavigator hook
  const navigate = useNavigate();

  // Check is the text is empty, if it is, redirect to the home page
  useEffect(() => {
    if (text === "") {
      navigate("/");
    }
  }, []);

  /**
   * Deletes duplicates of the selected character from the backup text and sets the result in the `resultantText` state.
   * Also updates the `backupText` state with the new text.
   * @param id The index of the selected character in the backup text.
   */
  const DeleteDuplicates = (id: number) => {
    // Get the backup text from the context
    const chars = [...backupText];

    // Filter out duplicates of the selected character
    const result = chars.filter(
      (char, index) =>
        index === id || char.charCodeAt(0) !== backupText.charCodeAt(id)
    );

    // Set the removed character state
    setRemovedCharacter(backupText[id]);

    // Check if the previous resultantText is equal to the current resultantText
    // If they are equal, it means that the character was already removed
    if (resultantText === result.join("")) {
      // Diplay message modal
      setMessageModalHeading("Character Is Unique");
      setMessageModalMessage("The character you selected has no duplicates.");
      setMessageModalStatus("error");
      setDisplayMessageModal(true);
      return;
    } else {
      // Set the resulting text in the `resultantText` state
      setResultantText(result.join(""));
    }

    // Update the `backupText` state with the new text
    setBackupText(result.join(""));

    // Update the color map to remove the color of the deleted character
    const deletedChar = backupText[id];
    setColorMap((prevColorMap) => {
      const { [deletedChar]: _, ...rest } = prevColorMap;
      return rest;
    });
  };

  console.log(colorMap);

  /**
   * Generates a unique hexadecimal color code for a given character based on its index in the backup text.
   * If the color has already been generated for the character, it returns the same color.
   * @param char The character to generate a color for.
   * @param index The index of the character in the backup text.
   * @returns A unique hexadecimal color code for the character.
   */
  const getNextColor = (char: string, index: number): string => {
    if (colorMap[char]) {
      // Return the color if it has already been generated for the character
      return colorMap[char];
    }

    // Generate a random hexadecimal color code
    const color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

    // Update the color map with the new color for the character
    setColorMap((prevColorMap) => {
      return {
        ...prevColorMap,
        [char]: color,
      };
    });

    return color;
  };

  // close messageModal
  useEffect(() => {
    if (displayMessageModal) {
      setTimeout(() => {
        setDisplayMessageModal(false);
        // Clear the removed character state
        setRemovedCharacter("");
      }, 2500);
    }
  }, [displayMessageModal]);

  // If a character duplicates has been removed, display a message modal
  useEffect(() => {
    // If the removed character state is empty, return
    if (removedCharacter === "") return;

    setMessageModalHeading("Character Removed");
    setMessageModalMessage(
      `Duplicates of the ${removedCharacter} character has been removed from the text.`
    );
    setMessageModalStatus("success");
    setDisplayMessageModal(true);

    // Check if all resultant characters are unique then display an alert modal
    if (
      resultantText
        .split("")
        .every((char, index) => index === resultantText.indexOf(char))
    ) {
      setAlertHeading("All Characters Are Unique");
      setDisplayAlert(true);
    }
  }, [resultantText]);

  // Listen for popState event and set the Textcontext to empty string
  useEffect(() => {
    window.addEventListener("popstate", () => setText(""));
    return () => {
      window.removeEventListener("popstate", () => setText(""));
    };
  }, []);

  return (
    <main className="relative w-full flex flex-col items-center min-h-[100vh] h-fit pb-20 ">
      <Header />
      <section className="mb-10">
        <OutputBoard resultantText={resultantText} />
      </section>

      <section className="w-full grid sm:grid-cols-8 grid-cols-4 gap-3 px-4 sm:px-[70px] md:px-56">
        {/* Loop through the backup text characters and output them in card */}
        {backupText.split("").map((char, index) => {
          return (
            <Card
              text={char}
              color={getNextColor(char, index)}
              id={index}
              onDelete={(id) => DeleteDuplicates(id)}
            />
          );
        })}
      </section>

      {/* Message Modal */}
      <MessageModal
        displayMessageModal={displayMessageModal}
        heading={messageModalHeading}
        message={messageModalMessage}
        status={messageModalStatus}
      />

      {/* Alert Modal */}
      <AlertModal
        display={displayAlert}
        heading={alertHeading}
        originalText={text}
        resultantText={resultantText}
        onClickButton={() => {
          setDisplayAlert(false);
        }}
        onCallAlertModal={() => {
          setDisplayAlert(false);
        }}
        ButtonText="OK, I got it"
      />
    </main>
  );
};

export default RemoveDuplicates;
