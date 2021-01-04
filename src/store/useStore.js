import { useState, useEffect, useCallback } from "react";

let globalState = {};
let listners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = useCallback((type, payload) => {
    const globalStateChanges = actions[type](globalState, payload);
    globalState = { ...globalState, ...globalStateChanges };
    listners.forEach((l) => l(globalState));
  }, []);

  useEffect(() => {
    shouldListen && listners.push(setState);
    return () => listners.filter((l) => l !== setState);
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initState = (newActions, newStates) => {
  globalState = { ...globalState, ...newStates };
  actions = { ...actions, ...newActions };
};
