export const appSlice = {
  name: "app",
  initialState: {
    ready: true,
  },
};

export type AppSliceState = typeof appSlice.initialState;
