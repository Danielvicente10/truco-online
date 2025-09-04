import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  function handleClickAdd() {
    setCount((count) => count + 1);
  }

  function handleClickSubtract() {
    setCount((count) => count - 1);
  }

  return (
    <>
      <div className="flex justify-center items-center h-full w-full bg-indigo-200">
        <div className="w-1/2 bg-gray-400 h-full flex flex-col justify-center items-center gap-4 p-5 rounded-md">
          <p>
            Time 1 <FontAwesomeIcon icon={faPencil} />
          </p>
          <p>{count}</p>
          <button
            className="w-[calc(100%-20px)]  bg-green-400 rounded-md"
            onClick={() => handleClickAdd()}
          >
            +1
          </button>
          <button
            className="w-[calc(100%-20px)]  bg-red-400 rounded-md"
            onClick={() => handleClickSubtract()}
          >
            -1
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
