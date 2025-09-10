import { useState } from "react";
import "./App.css";
import TeamCounter from "./components/TeamCounter";

function App() {
  const [trucoValue, setTrucoValue] = useState(3); // começa no 3

  function handleClickTruco() {
    setTrucoValue((prev) => {
      if (prev >= 12) return 3; // reinicia no 3
      return prev + 3;
    });
  }

  return (
    <div className="flex justify-center items-center h-full w-full bg-indigo-200 flex-col relative">
      <div className="w-full flex h-full">
        <TeamCounter initialName="Time 1" trucoValue={trucoValue} />
        <TeamCounter initialName="Time 2" trucoValue={trucoValue} />
      </div>
      <div
        className="absolute bottom-24 text-6xl bg-cyan-500 rounded-md w-72 flex justify-center items-center p-4 text-black font-bold cursor-pointer select-none"
        onClick={handleClickTruco}
      >
        TRUCO ({trucoValue})
      </div>
    </div>
  );
}

export default App;
