import SearchBar from "./components/SearchBar";
import SideBar from "./components/sidebar";
import "./App.css";
import Filter from "./components/Filter";
import Ordenation from "./components/Ordenation";
import Card from "./components/Card";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  const filteredData = data.filter(
    (item) =>
      item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.resumo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      <SideBar />
      <div className="content">
        <SearchBar onSearch={setSearchTerm} />
        <Filter />
        <Ordenation />
        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <ul className="cards-list">
            {filteredData.map((item, index) => (
              <li key={index}>
                <Card
                  id={item.id}
                  imageURL={item.imagem_capa}
                  title={item.titulo}
                  resume={item.resumo}
                  codeLines={item.linhas_de_codigo}
                  share={item.compartilhamentos}
                  comments={item.comentarios}
                  user={item.usuario}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
