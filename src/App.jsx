import SearchBar from "./components/SearchBar";
import SideBar from "./components/sidebar";
import "./App.css";
import Filter from "./components/Filter";
import Ordenation from "./components/Ordenation";
import Card from "./components/Card";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="container">
      <SideBar />;
      <div className="content">
        <SearchBar />;
        <Filter />
        <Ordenation />
        <ul className="cards-list">
          {data
            ? data.map((item, index) => (
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
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
