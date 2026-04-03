import { useDispatch } from "react-redux";
import { openModal } from "../redux/slices/rewardSlice";

export default function CampaignPage() {
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafb]">
      <div className="text-center">
        
        {/* Title */}
        <h1 className="text-[20px] font-semibold text-gray-800 mb-6">
          Gamification in Campaigns
        </h1>

        {/* Create Button */}
        <button
          onClick={() => dispatch(openModal())}
          className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-3 rounded-xl font-medium transition"
        >
          Create Reward
        </button>

      </div>
    </div>
  );
}