import { initState } from "./useStore";

export const configStore = () => {
  initState(
    {
      showToggle: (globalState, _) => {
        return { show: !globalState.show };
      },
      apiError: (_, payload) => {
        return { message: payload.message };
      },
      errorCancel: () => {
        return { message: null };
      }
    },
    { show: true, message: null }
  );
};
