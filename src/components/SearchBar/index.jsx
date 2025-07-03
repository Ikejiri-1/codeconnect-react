import "./styles.css";
export default function SearchBar({ onSearch }) {
  return (
    <>
      <input
        type="search"
        placeholder="Digite o que você procura"
        className="search-bar"
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
}
