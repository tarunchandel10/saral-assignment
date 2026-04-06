import { useDispatch, useSelector } from "react-redux";
import {
  setTier,
  closeTierModal,
} from "../../redux/slices/rewardSlice";

import Modal from "../ui/Modal";
import { useState } from "react";

export default function TierModal() {
  const dispatch = useDispatch();
  const { isTierModalOpen } = useSelector((state) => state.reward);

  const [selectedTier, setSelectedTier] = useState("");

  const tiers = [
    "Tier Name 1",
    "Tier Name 2",
    "Tier Name 3",
  ];

  return (
    <Modal isOpen={isTierModalOpen} onClose={() => dispatch(closeTierModal())}>
      
      <h2 className="text-lg font-semibold mb-4">
        Select a commission tier
      </h2>

      <div className="mb-4">
        <label className="text-sm">
          Upgrade to <span className="text-red-500">*</span>
        </label>

        <select
          value={selectedTier}
          onChange={(e) => setSelectedTier(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mt-2"
        >
          <option value="">Select a tier</option>
          {tiers.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => dispatch(closeTierModal())}
          className="flex-1 border rounded-lg py-2"
        >
          Go Back
        </button>

        <button
          onClick={() => {
            dispatch(setTier(selectedTier));
            dispatch(closeTierModal());
          }}
          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg py-2"
        >
          Save
        </button>
      </div>
    </Modal>
  );
}