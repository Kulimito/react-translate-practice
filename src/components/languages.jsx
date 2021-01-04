import React, { useState } from "react";

import { useStore } from "../store/useStore";

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" }
];

export default ({ choiceLanguage }) => {
  const [show, setShow] = useState(false);
  const [buttonContent, SetButtonContent] = useState("X");
  const dispatch = useStore(false)[1];

  const setShowHandler = () => {
    setShow(!show);
    dispatch("showToggle", null);
  };

  const contentHandler = (value, label, event) => {
    setShowHandler();
    choiceLanguage(value);
    SetButtonContent(label);
    // console.log(value, label);
  };

  return (
    <div className="select-language">
      <button onClick={setShowHandler}>{buttonContent}</button>
      <ul className={show ? "open" : "closed"}>
        {LANGUAGES.map((l, i) => (
          <li key={i} onClick={contentHandler.bind(this, l.value, l.label)}>
            {l.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
