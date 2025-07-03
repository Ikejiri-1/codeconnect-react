import SearchBar from "./components/SearchBar";
import SideBar from "./components/sidebar";
import "./App.css";
import Filter from "./components/Filter";
import Ordenation from "./components/Ordenation";
function App() {
  return (
    <div className="container">
      <SideBar />;
      <div className="content">
        <SearchBar />;
        <Filter />
        <Ordenation />
      </div>
    </div>
  );
}

export default App;
