export default function RewardCard({ data }) {
  if (!data) return null;

  return (
    <div className="mt-6 bg-white p-5 rounded-xl shadow-md w-[400px]">
      
      <h3 className="text-lg font-semibold mb-3">
        🎉 Reward Created
      </h3>

      <p className="text-sm text-gray-600">
        <strong>Event:</strong> {data.event}
      </p>

      <p className="text-sm text-gray-600">
        <strong>Reward:</strong> {data.reward}
      </p>

      {data.date && (
        <p className="text-sm text-gray-600">
          <strong>End Date:</strong> {data.date}
        </p>
      )}
    </div>
  );
}