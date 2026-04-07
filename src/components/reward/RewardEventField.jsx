import InlineSelect from "../ui/InlineSelect";

export default function RewardEventField({
  rewardEvent,
  salesValue,
  setSalesValue,
  postCount,
  setPostCount,
  duration,
  setDuration,
  dispatch,
  setRewardEvent,
}) {
  return (
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
      : rewardEvent === "Posts X times per Y period" && postCount && duration
      ? `Posts ${postCount} times every ${duration}`
      : rewardEvent
  }
  onChange={(val) => dispatch(setRewardEvent(val))}

  renderExtra={(val) => {
    if (val === "Cross $X in sales" || rewardEvent === "Cross $X in sales") {
      return (
        <input
          value={salesValue}
          onChange={(e) =>
            setSalesValue(e.target.value.replace(/\D/g, ""))
          }
          placeholder="$ | e.g. 100"
          className="w-full border rounded-lg px-3 py-2 mt-2"
        />
      );
    }

    if (val === "Posts X times per Y period" || rewardEvent === "Posts X times per Y period") {
      return (
        <div className="flex gap-2 mt-2">
          <input
            value={postCount}
            onChange={(e) =>
              setPostCount(e.target.value.replace(/\D/g, ""))
            }
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
            <option value="1 year">1 year</option>
          </select>
        </div>
      );
    }

    return null;
  }}

  // ✅ 🔥 THIS WAS MISSING
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
  );
}