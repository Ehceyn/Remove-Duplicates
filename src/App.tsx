import React from "react";
import Index from "./pages";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RemoveDuplicates from "./pages/remove_duplicates";
import TextContextProvider from "./contexts/TextContext";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <TextContextProvider>
        <AnimatePresence mode="wait">
          <Routes>
            {/* ROUTES GOES IN HERE */}
            <Route path="/" index element={<Index />} />
            <Route
              path="/remove_duplicates"
              index
              element={<RemoveDuplicates />}
            />
          </Routes>
        </AnimatePresence>
      </TextContextProvider>
    </Router>
  );
}

export default App;
