import React from "react";
import CreateArea from "../components/CreateArea";

const Index: React.FC = () => {
  return (
    <main className="w-screen flex flex-col items-center space-y-5 sm:space-y-10 min-h-[100vh] h-fit pt-20 px-4">
      <h1 className="text-3xl sm:text-5xl text-center font-bold text-pink-500">
        Duplicate Character Remover
      </h1>
      <CreateArea />
    </main>
  );
};

export default Index;
