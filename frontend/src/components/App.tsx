import "../styles/App.css";
import BiomedicDashboard from "./BiomedicDashboard";
import InputsDashboard from "./InputsDashboard";
import ProstheticHandView from "./ProstheticHandView";

function App() {
  // revisar luego. Para adaptarlo a la distribucion con grid que vi en el tutorial de grid superponiendo elementos. (casi final del video creo)
  return (
    <div className="App flex items-center justify-between h-screen w-screen bg-gray-100 relative">
      <div className="">
        <BiomedicDashboard />
      </div>
      <div className="">
        <ProstheticHandView />
      </div>
      <div className="">
        <InputsDashboard />
      </div>
    </div>
  );
}

export default App;
