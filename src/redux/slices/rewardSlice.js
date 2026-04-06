import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  rewardEvent: null,
  rewardWith: null,

  // ✅ NEW STATES
  tier: null,
  isTierModalOpen: false,
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

    setRewardEvent: (state, action) => {
      state.rewardEvent = action.payload;
    },

    setRewardWith: (state, action) => {
      state.rewardWith = action.payload;
    },

    // ✅ NEW REDUCERS
    setTier: (state, action) => {
      state.tier = action.payload;
    },

    openTierModal: (state) => {
      state.isTierModalOpen = true;
    },

    closeTierModal: (state) => {
      state.isTierModalOpen = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  setRewardEvent,
  setRewardWith,

  // ✅ EXPORT NEW ACTIONS
  setTier,
  openTierModal,
  closeTierModal,
} = rewardSlice.actions;

export default rewardSlice.reducer;