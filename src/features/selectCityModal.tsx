import { createSlice } from "@reduxjs/toolkit";
interface ObjectTypes {
  isOpen: boolean;
}
const initialState: ObjectTypes = {
  isOpen: false,
};
const selectCityModal = createSlice({
  initialState,
  name: "cities",
  reducers: {
    setOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export default selectCityModal.reducer;
export const { setOpen } = selectCityModal.actions;
