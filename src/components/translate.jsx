import React, { useState, useEffect } from "react";

import { useTranslate } from "../translate/useTranslate";

import { useStore } from "../store/useStore";

export default ({ text: prevText, language }) => {
  const [text, setText] = useState("");
  const { show } = useStore()[0];

  const [isLoading, sendData] = useTranslate();

  useEffect(() => {
    if (prevText && language) {
      const getResult = async () => {
        const result = await sendData(prevText, language);
        if (result) {
          setText(result);
        }
      };
      getResult();
    }
  }, [prevText, language, sendData]);

  return (
    <div className={show ? "result" : "result-close"}>
      {isLoading ? "Loading..." : text}
    </div>
  );
};
