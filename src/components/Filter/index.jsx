import "./styles.css";

export default function Filter() {
  return (
    <>
      <section className="filter-container">
        <ul className="filter-list">
          <li>Programação</li>
          <li>React</li>
        </ul>
        <button className="clear-button">Limpar Tudo</button>
      </section>
    </>
  );
}
