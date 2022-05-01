import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfessionState {
  value: Boolean;
}

const initialState: ProfessionState = {
  value: false,
} as ProfessionState;

const professionSlice = createSlice({
  name: "profession",
  initialState,
  reducers: {
    setProfession(state, action: PayloadAction<Boolean>) {
      state.value = action.payload;
    },
  },
});

export const { setProfession } = professionSlice.actions;
export default professionSlice.reducer;
