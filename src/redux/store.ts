import { appSlice } from "@/redux/slices/appSlice";

export const store = {
  getState: () => ({
    [appSlice.name]: appSlice.initialState,
  }),
};

export type RootState = ReturnType<typeof store.getState>;
