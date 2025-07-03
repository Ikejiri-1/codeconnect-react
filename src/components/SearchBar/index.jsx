import "./styles.css";
import { useState } from "react";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type="search"
        placeholder="Digite o que você procura"
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
