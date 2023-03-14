import React, { useContext } from "react";
import { TextContext } from "../contexts/TextContext";

interface OutputBoardProps {
  resultantText: string;
}
interface TextContextProps {
  text: string;
  setText: (value: string) => void;
}

const OutputBoard: React.FC<OutputBoardProps> = ({ resultantText }) => {
  // Call the TextContext here
  const { text, setText } = useContext<TextContextProps>(TextContext);
  return (
    <div className="flex w-screen sm:w-full justify-center px-4">
      <div className="border w-full sm:w-[400px] h-fit border-[#faf1f1] rounded-lg p-4 shadow-md space-y-5">
        <div>
          <p className="mb-1">Original text</p>
          <textarea
            className="w-full font-bold bg-white border border-[#e7e1e1] px-4 py-2 rounded-lg focus:outline-none "
            readOnly
            rows={3}
            value={text}
          ></textarea>
        </div>
        <div>
          <p className="mb-1">Resultant text</p>
          <textarea
            className="w-full font-bold bg-white border border-[#e7e1e1] px-4 py-2 rounded-lg focus:outline-none"
            readOnly
            rows={3}
            value={resultantText}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default OutputBoard;
