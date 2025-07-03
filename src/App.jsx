import SearchBar from "./components/SearchBar";
import SideBar from "./components/sidebar";
import "./App.css";
import Filter from "./components/Filter";
function App() {
  return (
    <div className="container">
      <SideBar />;
      <div className="content">
        <SearchBar />;
        <Filter />
      </div>
    </div>
  );
}

export default App;
