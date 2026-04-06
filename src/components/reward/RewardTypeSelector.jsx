import { useDispatch, useSelector } from "react-redux";
import { setRewardType, setStep } from "../../redux/slices/rewardSlice";

export default function RewardTypeSelector() {
  const dispatch = useDispatch();
  const { rewardType } = useSelector((state) => state.reward);

  const types = [
    { id: "sales", label: "Based on sales", desc: "Reward based on sales performance" },
    { id: "posts", label: "Based on posts", desc: "Reward based on content activity" },
    { id: "onboarding", label: "Onboarding", desc: "Reward for onboarding actions" },
  ];

  return (
    <div className="space-y-3">
      {types.map((type) => (
        <div
          key={type.id}
          onClick={() => {
            dispatch(setRewardType(type.id));
            dispatch(setStep(2)); // 🔥 IMPORTANT
          }}
          className={`border rounded-xl p-4 cursor-pointer transition ${
            rewardType === type.id
              ? "border-purple-600 bg-purple-50"
              : "border-gray-200 hover:bg-gray-50"
          }`}
        >
          <h3 className="font-medium text-gray-800">
            {type.label}
          </h3>
          <p className="text-sm text-gray-500">
            {type.desc}
          </p>
        </div>
      ))}
    </div>
  );
}