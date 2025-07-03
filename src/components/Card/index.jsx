import "./styles.css";
import Code from "./assets/code.svg";
import Share from "./assets/share.svg";
import Chat from "./assets/chat.svg";
import Author from "./assets/author.svg";

export default function Card({
  id,
  imageURL,
  title,
  resume,
  codeLines,
  share,
  comments,
  user,
}) {
  return (
    <>
      <article className="card" id={id}>
        <div className="card-image">
          <img src={imageURL} alt="imagem do post" />
        </div>
        <div className="card-content">
          <div className="content-text">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{resume}</p>
          </div>
          <div className="card-footer">
            <div className="footer-content">
              <ul>
                <li>
                  <img src={Code} alt="códigos" />
                  {codeLines}
                </li>
                <li>
                  <img src={Share} alt="compartilhar" />
                  {share}
                </li>
                <li>
                  <img src={Chat} alt="bate-papo" />
                  {comments}
                </li>
              </ul>
            </div>
            <div className="card-author">
              <img src={user.imagem} alt="foto de perfil" />
              {user.nome}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
