import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../redux/slices/rewardSlice";
import Modal from "../components/ui/Modal";
import RewardTypeSelector from "../components/reward/RewardTypeSelector";

export default function CampaignPage() {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.reward);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
      <button
        onClick={() => dispatch(openModal())}
        className="bg-purple-600 text-white px-6 py-3 rounded-xl"
      >
        Create Reward
      </button>

      {/* ✅ Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => dispatch(closeModal())}
      >
        <h2 className="text-lg font-semibold mb-4">
          Create Reward
        </h2>

        <RewardTypeSelector />
      </Modal>

    </div>
  );
}