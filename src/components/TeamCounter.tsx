import { useState } from "react";

function TeamCounter({
  initialName = "Time",
  trucoValue,
}: {
  initialName?: string;
  trucoValue: number;
}) {
  const [count, setCount] = useState(0);
  const [teamName, setTeamName] = useState(initialName);

  function handleClickTruco() {
    setCount((c) => c + trucoValue);
  }

  return (
    <div className="w-1/2 bg-gray-400 h-full flex flex-col justify-center items-center gap-4 p-5 rounded-md">
      <input
        className="flex gap-5 items-center focus:outline-none text-3xl font-bebas text-center"
        onChange={(e) => setTeamName(e.target.value)}
        value={teamName}
      />
      <p className="text-3xl font-bebas">{count}</p>

      <button
        className="w-[calc(100%-20px)] bg-green-400 rounded-md"
        onClick={() => setCount((c) => c + 1)}
      >
        +1
      </button>
      <button
        className="w-[calc(100%-20px)] bg-red-400 rounded-md"
        onClick={() => setCount((c) => c - 1)}
      >
        -1
      </button>
      <button
        className="w-[calc(100%-20px)] bg-yellow-400 rounded-md"
        onClick={handleClickTruco}
      >
        TRUCO +{trucoValue}
      </button>
    </div>
  );
}

export default TeamCounter;
