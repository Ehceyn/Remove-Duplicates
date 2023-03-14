import { createContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface TextContextProps {
  text: string;
  setText: (value: string) => void;
}

export const TextContext = createContext<TextContextProps>({
  text: "",
  setText: () => {},
});

const TextContextProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (text !== "") {
      navigate("/remove_duplicates");
    }
  }, [text]);

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};

export default TextContextProvider;
