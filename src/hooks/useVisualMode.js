import React, { useState } from "react";

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (!replace) {
      setHistory((prev) => [...prev, newMode]);
    } else {
      setHistory((prev) => {
        const previous = [...prev];
        previous.pop();
        return [previous, newMode];
      });
    }
  };

  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setMode(newHistory.slice(-1)[0]);
      setHistory(newHistory);
    }
  };

  return { mode, transition, back };
};

export default useVisualMode;
