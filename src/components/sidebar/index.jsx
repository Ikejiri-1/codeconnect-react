import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Info from "./assets/info.svg";
import Account from "./assets/account_circle.svg";
import Logout from "./assets/logout.svg";

export default function SideBar() {
  return (
    <>
      <aside>
        <img src={Logo} alt="Logo da CodeConnect" />
        <nav>
          <ul>
            <li>
              <a href="#">Publicar</a>
            </li>
            <li>
              <a href="#">
                <img src={Feed} alt="" />
                <span>Feed</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Account} alt="" />
                <span>Perfil</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Info} alt="" />
                <span>Sobre nós</span>
              </a>
            </li>
            <li>
              <a href="#">
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
