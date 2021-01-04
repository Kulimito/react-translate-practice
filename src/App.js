import React, { useState } from "react";
import "./styles.css";

import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";
import ErrorModal from "./components/errorModal/error";
import { useStore } from "./store/useStore";

export default function App() {
  const [text, setText] = useState(null);
  const [language, setLanguage] = useState(null);
  const [globalState, dispatch] = useStore();
  const { message: error } = globalState;

  const textHandler = (event) => {
    setText(event.target.value);
  };

  const languageHandler = (language) => {
    setLanguage(language);
  };

  const closeErrorHandler = () => {
    dispatch("errorCancel", null);
  };

  return (
    <div className="app">
      {error && <ErrorModal onClick={closeErrorHandler} error={error} />}
      <Field label="Enter Text" onBlur={textHandler} />
      <Languages choiceLanguage={languageHandler} />
      <Translate text={text} language={language} />
    </div>
  );
}
