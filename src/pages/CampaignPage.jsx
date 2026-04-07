import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
  setRewardEvent,
  setRewardWith,
} from "../redux/slices/rewardSlice";

import Modal from "../components/ui/Modal";
import InlineSelect from "../components/ui/InlineSelect";
import RewardCard from "../components/reward/RewardCard";
import { useState } from "react";
import TierModal from "../components/reward/TierModal";
import { openTierModal } from "../redux/slices/rewardSlice";
import { useEffect } from "react";
import DatePicker from "../components/ui/DatePicker";
import MainLayout from "../layouts/MainLayout";

export default function CampaignPage() {
  const dispatch = useDispatch();
  const { isModalOpen, rewardEvent, rewardWith, tier} = useSelector(
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

  useEffect(() => {
  const handler = () => {
    dispatch(openTierModal());
  };

  window.addEventListener("edit-tier", handler);
  return () => window.removeEventListener("edit-tier", handler);
}, []);
  return (
    <MainLayout>
 
      <div className="bg-white rounded-xl border p-10 relative overflow-hidden">

          {/* 🔥 Background grid effect */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#f3e8ff_1px,transparent_1px),linear-gradient(90deg,#f3e8ff_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Content */}
          <div className="relative z-10 text-center">
            
            <h1 className="text-3xl font-semibold text-purple-700">
              Gamify your Campaign
            </h1>

            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              Enable gamification to start crafting your custom reward system.
            </p>

            <button
              onClick={() => dispatch(openModal())}
              className="mt-6 bg-[#C530C5] text-white px-16 py-3 rounded-xl"
            >
              Enable Gamification
            </button>
          </div>

          {/* Cards */}
          <div className="relative z-10 mt-10 grid grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl text-xl">
                🎁
              </div>

              <h3 className="font-medium text-gray-800">
                Reward Your Ambassadors
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Boost campaign performance by setting up rewards for ambassadors
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl text-xl">
                👑
              </div>

              <h3 className="font-medium text-gray-800">
                Set Milestones
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Set up custom goals for sales, posts, or time-based achievements
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl text-xl">
                🎟️
              </div>

              <h3 className="font-medium text-gray-800">
                Customise Incentives
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Create custom incentives like flat fees, free products, or special commissions.
              </p>
            </div>

          </div>
        </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal())}>
        
        <h2 className="text-[20px] font-semibold mb-6">
          Create your reward system
        </h2>

        {/* ========================= */}
        {/* Reward Event */}
        {/* ========================= */}
        <div className="mb-4">
          <label className="text-sm font-medium">
            Reward event <span className="text-red-500">*</span>
          </label>

          <InlineSelect
            placeholder="Select an event"
            options={[
              { label: "Cross $X in sales", value: "Cross $X in sales" },
              { label: "Posts X times per Y period", value: "Posts X times per Y period" },
              { label: "Is Onboarded", value: "Is Onboarded" },
            ]}
            value={
              rewardEvent === "Cross $X in sales" && salesValue
                ? `Cross $${salesValue} in sales`
                : rewardEvent === "Posts X times per Y period" &&
                  postCount &&
                  duration
                ? `Posts ${postCount} times every ${duration}`
                : rewardEvent
            }
            onChange={(val) => dispatch(setRewardEvent(val))}

            renderExtra={(val) => {
              // 🔥 Cross $X (editable reopen supported)
              if (
                val === "Cross $X in sales" ||
                rewardEvent === "Cross $X in sales"
              ) {
                return (
                  <input
                    autoFocus
                    value={salesValue}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "");
                      setSalesValue(v);
                    }}
                    placeholder="$ | e.g. 100"
                    className="w-full border rounded-lg px-3 py-2 mt-2"
                  />
                );
              }

              // 🔥 Posts X times per Y (editable reopen supported)
              if (
                val === "Posts X times per Y period" ||
                rewardEvent === "Posts X times per Y period"
              ) {
                return (
                  <div className="flex gap-2 mt-2">
                    
                    <input
                      value={postCount}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "");
                        setPostCount(v);
                      }}
                      placeholder="Posts"
                      className="w-1/2 border rounded-lg px-3 py-2"
                    />

                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-1/2 border rounded-lg px-3 py-2"
                    >
                      <option value="">Select duration</option>
                      <option value="14 days">14 days</option>
                      <option value="1 month">1 month</option>
                      <option value="2 months">2 months</option>
                      <option value="3 months">3 months</option>
                      <option value="1 year">1 year</option>
                    </select>

                  </div>
                );
              }

              return null;
            }}

            footer={
              rewardEvent === "Cross $X in sales"
                ? salesValue
                  ? ({ close }) => (
                      <>
                        <button
                          onClick={() => {
                            setSalesValue("");
                            close();
                          }}
                          className="flex-1 px-4 py-2 border rounded-lg"
                        >
                          Cancel
                        </button>

                        <button
                          onClick={() => close()}
                          className="flex-1 px-4 py-2 text-white rounded-lg bg-[#F68DF6]"
                        >
                          Save
                        </button>
                      </>
                    )
                  : null

                : rewardEvent === "Posts X times per Y period"
                ? postCount && duration
                  ? ({ close }) => (
                      <>
                        <button
                          onClick={() => {
                            setPostCount("");
                            setDuration("");
                            close();
                          }}
                          className="flex-1 px-4 py-2 border rounded-lg"
                        >
                          Cancel
                        </button>

                        <button
                          onClick={() => close()}
                          className="flex-1 px-4 py-2 text-white rounded-lg bg-[#F68DF6]"
                        >
                          Save
                        </button>
                      </>
                    )
                  : null

                : rewardEvent
                ? ({ close }) => (
                    <>
                      <button
                        onClick={() => close()}
                        className="flex-1 px-4 py-2 border rounded-lg"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => close()}
                        className="flex-1 px-4 py-2 text-white rounded-lg bg-[#F68DF6]"
                      >
                        Save
                      </button>
                    </>
                  )
                : null
            }
          />
        </div>

        {/* ========================= */}
        {/* Reward With */}
        {/* ========================= */}
        <div className="mb-4">
          <label className="text-sm font-medium">
            Reward with <span className="text-red-500">*</span>
          </label>

          <InlineSelect
            placeholder="Select a reward"
            options={[
              { label: "Flat $X bonus", value: "Flat $X bonus" },
              {
                label: "Upgrade Commission Tier",
                value: "Upgrade Commission Tier",
                disabled:
                rewardEvent === "Is Onboarded" ||
                rewardEvent === "Posts X times per Y period"
              },
            ]}
            value={
              rewardWith === "Flat $X bonus" && bonusValue
                ? `Flat $${bonusValue} bonus`
                : rewardWith === "Upgrade Commission Tier" && tier
                ? `Upgrade to ${tier}`
                : rewardWith
            }
            onChange={(val) => {
              dispatch(setRewardWith(val));

              if (val === "Upgrade Commission Tier") {
                dispatch(openTierModal());
              }
            }}

            renderExtra={(val) => {
              if (
                val === "Flat $X bonus" ||
                rewardWith === "Flat $X bonus"
              ) {
                return (
                  <input
                    value={bonusValue}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "");
                      setBonusValue(v);
                    }}
                    placeholder="$ | e.g. 100"
                    className="w-full border rounded-lg px-3 py-2 mt-2"
                  />
                );
              }

              if (val === "Upgrade Commission Tier") {
                return null; // 🔥 IMPORTANT
              }

              return null;
            }}

            footer={
              rewardWith === "Flat $X bonus"
                ? bonusValue
                  ? ({ close }) => (
                      <>
                        <button
                          onClick={() => {
                            setBonusValue("");
                            close();
                          }}
                          className="flex-1 px-4 py-2 border rounded-lg"
                        >
                          Cancel
                        </button>

                        <button
                          onClick={() => close()}
                          className="flex-1 px-4 py-2 text-white rounded-lg bg-[#F68DF6]"
                        >
                          Save
                        </button>
                      </>
                    )
                  : null

                : rewardWith
                ? ({ close }) => (
                    <>
                      <button
                        onClick={() => close()}
                        className="flex-1 px-4 py-2 border rounded-lg"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => close()}
                        className="flex-1 px-4 py-2 text-white rounded-lg bg-[#F68DF6]"
                      >
                        Save
                      </button>
                    </>
                  )
                : null
            }
          />
        </div>

        {/* Toggle */}
        <div
        onClick={() => {
        setIsTimeBound(!isTimeBound);

        // 🔥 Close calendar when turning OFF
        if (isTimeBound) {
          setShowCalendar(false);
        }
      }}
        className="flex items-center justify-between cursor-pointer"
      >
        {/* LEFT TEXT */}
        <div>
          <p className="text-sm font-medium text-gray-800">
            Make the reward time bound
          </p>
          <p className="text-xs text-gray-500">
            Choose an end date to stop this reward automatically.
          </p>
        </div>

        {/* RIGHT TOGGLE */}
        <div
          className={`w-11 h-6 flex items-center rounded-full p-1 transition ${
            isTimeBound ? "bg-purple-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
              isTimeBound ? "translate-x-5" : ""
            }`}
          />
        </div>
      </div>
        {isTimeBound && (
          <div className="mt-3 relative">
            
            {/* Input */}
            <div
              onClick={() => setShowCalendar(!showCalendar)}
              className="border rounded-lg px-3 py-2 flex items-center gap-2 cursor-pointer"
            >
              📅
              <span className={selectedDate ? "text-gray-800" : "text-gray-400"}>
                {selectedDate
                  ? new Date(selectedDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Select End Date"}
              </span>
            </div>

            {/* 🔥 Custom Calendar */}
            {showCalendar && (
              <DatePicker
                value={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setShowCalendar(false);
                }}
              />
            )}
          </div>
        )}

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => dispatch(closeModal())}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={() => {
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
            className="px-5 py-2 bg-[#F68DF6] text-white rounded-lg"
          >
            Create Reward
          </button>
        </div>

      </Modal>
      <TierModal />
      <div className="mt-6 flex justify-center">
        <RewardCard data={savedReward} />
      </div>
    </MainLayout>
  );
}