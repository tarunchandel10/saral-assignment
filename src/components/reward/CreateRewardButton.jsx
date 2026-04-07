export default function CreateRewardButton({
  isFormValid,
  isBasicValid,
  isTimeBound,
  selectedDate,
  onClick,
}) {
  return (
    <div className="relative group">
      <button
        disabled={!isFormValid}
        onClick={onClick}
        className={`px-5 py-2 text-white rounded-lg ${
          isFormValid ? "bg-[#F68DF6]" : "bg-[#F68DF6]"
        }`}
      >
        Create Reward
      </button>

      {!isFormValid && (
        <div className="absolute w-max bottom-full mb-2 left-1/2 -translate-x-1/2 
          bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100">
          {!isBasicValid
            ? "Choose a reward trigger and a reward to continue"
            : isTimeBound && !selectedDate
            ? "Choose reward end date to continue"
            : ""}
        </div>
      )}
    </div>
  );
}