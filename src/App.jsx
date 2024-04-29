import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="flex w-full">
      {/* Navigation bar */}
      <NavigationBar />

      {/* Dashboard component */}
      <Dashboard />
    </div>
  );
}

export default App;
