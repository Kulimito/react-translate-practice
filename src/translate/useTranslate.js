import { useState, useCallback } from "react";

import { v2 } from "@google-cloud/translate";

import { useStore } from "../store/useStore";

const credentials = JSON.parse(process.env.REACT_APP_EXPENSIVE);

const Translate = v2.Translate;

const translate = new Translate({
  credentials,
  projectId: credentials.project_id
});

export const useTranslate = () => {
  const dispatch = useStore(false)[1];

  const [isLoading, setIsLoading] = useState(false);

  const sendData = useCallback(
    async (text, target) => {
      setIsLoading(true);
      let translation = null;
      try {
        [translation] = await translate.translate(text, target);
      } catch (err) {
        setIsLoading(false);
        return dispatch("apiError", { message: err.message });
      }
      setIsLoading(false);
      if (!translation) {
        throw new Error("Could not translate your text! Please, try again!");
      }
      return translation;
    },
    [dispatch]
  );

  return [isLoading, sendData];
};
