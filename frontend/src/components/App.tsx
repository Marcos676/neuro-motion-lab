import "../styles/App.css";
import BiomedicDashboard from "./BiomedicDashboard";
import InputsDashboard from "./InputsDashboard";
import ProstheticHandView from "./ProstheticHandView";

function App() {

  return (
    <div className="App flex items-center justify-center h-screen bg-gray-100">
      <BiomedicDashboard/>
      <ProstheticHandView/>
      <InputsDashboard/>
    </div>
  );
}

export default App;
