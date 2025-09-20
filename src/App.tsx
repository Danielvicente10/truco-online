import { useState } from "react";
import "./App.css";
import TeamCounter from "./components/TeamCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClover } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./components/NavBar";

function App() {
  const [trucoValue, setTrucoValue] = useState(3);
  const [background, setBackground] = useState<string | null>(null);

  function handleClickTruco() {
    setTrucoValue((prev) => {
      if (prev >= 12) return 3;
      return prev + 3;
    });
  }
  console.log(background);

  return (
    <>
      <NavBar onBackgroundChange={setBackground} />

      <div
        className="flex justify-center items-center flex-col relative h-full w-full overflow-hidden"
        style={{
          background:
            background === "bg-black"
              ? `#000`
              : `url(${background}) center/cover no-repeat`,
        }}
      >
        <div className="relative w-full flex h-full">
          <TeamCounter initialName="Time 1" trucoValue={trucoValue} />
          <TeamCounter initialName="Time 2" trucoValue={trucoValue} />
        </div>
        <div
          className="absolute bottom-24 text-[40px] bg-cyan-500 rounded-md w-72 flex justify-center items-center p-4 text-black font-bold cursor-pointer select-none"
          onClick={handleClickTruco}
        >
          <FontAwesomeIcon icon={faClover} />
          TRUCO ({trucoValue})
        </div>
      </div>
    </>
  );
}

export default App;
