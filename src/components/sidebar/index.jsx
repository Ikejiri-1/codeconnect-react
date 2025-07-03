import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Info from "./assets/info.svg";
import Account from "./assets/account_circle.svg";
import Logout from "./assets/logout.svg";
import "./styles.css";

export default function SideBar() {
  return (
    <>
      <aside>
        <img src={Logo} alt="Logo da CodeConnect" />
        <nav className="menu">
          <ul className="menu-list">
            <li>
              <a href="#" className="item-button">
                Publicar
              </a>
            </li>
            <li>
              <a href="#" className="item-link">
                <img src={Feed} alt="" />
                <span>Feed</span>
              </a>
            </li>
            <li>
              <a href="#" className="item-link">
                <img src={Account} alt="" />
                <span>Perfil</span>
              </a>
            </li>
            <li>
              <a href="#" className="item-link">
                <img src={Info} alt="" />
                <span>Sobre nós</span>
              </a>
            </li>
            <li>
              <a href="#" className="item-link">
                <img src={Logout} alt="" />
                <span>Sair</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
