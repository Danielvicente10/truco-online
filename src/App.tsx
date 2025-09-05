import "./App.css";
import TeamCounter from "./components/TeamCounter";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-indigo-200 flex-col relative">
      <div className="w-full flex h-full">
        <TeamCounter initialName="Time 1" />
        <TeamCounter initialName="Time 2" />
      </div>
      <div className="absolute bottom-0">TRUCO</div>
    </div>
  );
}

export default App;
