import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  step: 1,
  rewardType: null,
};

const rewardSlice = createSlice({
  name: "reward",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setRewardType: (state, action) => {
      state.rewardType = action.payload;
    },
  },
});

export const { openModal, closeModal, setStep, setRewardType } =
  rewardSlice.actions;

export default rewardSlice.reducer;