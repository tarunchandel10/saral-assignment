import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
  setRewardEvent,
  setRewardWith,
  openTierModal,
} from "../redux/slices/rewardSlice";

import { useState, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import Modal from "../components/ui/Modal";
import RewardCard from "../components/reward/RewardCard";
import TierModal from "../components/reward/TierModal";

// ✅ New Components
import RewardEventField from "../components/reward/RewardEventField";
import RewardWithField from "../components/reward/RewardWithField";
import TimeBoundSection from "../components/reward/TimeBoundSection";
import CreateRewardButton from "../components/reward/CreateRewardButton";
import GamificationHero from "../components/reward/GamificationHero";

export default function CampaignPage() {
  const dispatch = useDispatch();

  const { isModalOpen, rewardEvent, rewardWith, tier } = useSelector(
    (state) => state.reward
  );

  const [savedReward, setSavedReward] = useState(null);

  const [salesValue, setSalesValue] = useState("");
  const [bonusValue, setBonusValue] = useState("");
  const [postCount, setPostCount] = useState("");
  const [duration, setDuration] = useState("");
  const [isTimeBound, setIsTimeBound] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  // ✅ Validation Logic
  const isBasicValid = rewardEvent && rewardWith;
  const isDateValid = !isTimeBound || selectedDate;
  const isFormValid = isBasicValid && isDateValid;

  // 🔥 Tier edit listener
  useEffect(() => {
    const handler = () => {
      dispatch(openTierModal());
    };

    window.addEventListener("edit-tier", handler);
    return () => window.removeEventListener("edit-tier", handler);
  }, []);

  return (
    <MainLayout>
      
      {/* ✅ HERO SECTION */}
      <GamificationHero onOpen={() => dispatch(openModal())} />

      {/* ✅ MODAL */}
      <Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal())}>
        
        <h2 className="text-[20px] font-semibold mb-6">
          Create your reward system
        </h2>

        {/* ✅ Reward Event */}
        <RewardEventField
          rewardEvent={rewardEvent}
          salesValue={salesValue}
          setSalesValue={setSalesValue}
          postCount={postCount}
          setPostCount={setPostCount}
          duration={duration}
          setDuration={setDuration}
          dispatch={dispatch}
          setRewardEvent={setRewardEvent}
        />

        {/* ✅ Reward With */}
        <RewardWithField
          rewardWith={rewardWith}
          bonusValue={bonusValue}
          setBonusValue={setBonusValue}
          rewardEvent={rewardEvent}
          tier={tier}
          dispatch={dispatch}
          setRewardWith={setRewardWith}
          openTierModal={openTierModal}
        />

        {/* ✅ Time Bound */}
        <TimeBoundSection
          isTimeBound={isTimeBound}
          setIsTimeBound={setIsTimeBound}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
        />

        {/* ✅ Bottom Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          
          <button
            onClick={() => dispatch(closeModal())}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <CreateRewardButton
            isFormValid={isFormValid}
            isBasicValid={isBasicValid}
            isTimeBound={isTimeBound}
            selectedDate={selectedDate}
            onClick={() => {
              if (!isFormValid) return;

              setSavedReward({
                event:
                  rewardEvent === "Cross $X in sales"
                    ? `Cross $${salesValue} in sales`
                    : rewardEvent === "Posts X times per Y period"
                    ? `Posts ${postCount} times every ${duration}`
                    : rewardEvent,

                reward:
                  rewardWith === "Flat $X bonus"
                    ? `Flat $${bonusValue} bonus`
                    : rewardWith === "Upgrade Commission Tier"
                    ? `Upgrade to ${tier}`
                    : rewardWith,

                date:
                  isTimeBound && selectedDate
                    ? new Date(selectedDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : null,
              });

              dispatch(closeModal());
            }}
          />

        </div>
      </Modal>

      {/* Tier Modal */}
      <TierModal />

      {/* Saved Card */}
      <div className="mt-6 flex justify-center">
        <RewardCard data={savedReward} />
      </div>

    </MainLayout>
  );
}