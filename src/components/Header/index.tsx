import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className="container p-3 d-flex">
            <div className="d-none d-md-block">
              <a
                href="mailto:contato@flyingweb.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="text-white me-1"
                  src="/images/envelope-medio.png"
                  alt="imagem de contato"
                />
                contato@flyingweb.com.br
              </a>
            </div>
            <div className="ms-5 d-none d-md-block">
              <a
                href="https://api.whatsapp.com/send?phone=5565999439012&text=ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20Flying%20Web%20Sites"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="text-white me-1"
                  src="/images/whatsapp-medio.png"
                  alt="imagem do whatsapp"
                />
                (65)9 99943-9012
              </a>
            </div>
            <div className="ms-md-auto me-md-0 mx-auto">
              <a
                href="https://www.facebook.com/flyingwebsites"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="text-white"
                  src="/images/facebook.png"
                  alt="Logo do facebook"
                  width={28}
                />
              </a>

              <a
                href="https://www.instagram.com/flyingwebsites/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="text-white ms-2" src="/images/instagram.png" />
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container p-2">
            <a className="navbar-brand" href="#">
              <Image src={logo} alt="logo do site" width={200} height={89} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-md-4 fs-5">
                <li className="nav-item mx-lg-2">
                  <ActiveLink href="/" activeClassName={styles.active}>
                    <a className="nav-link">Home</a>
                  </ActiveLink>
                </li>

                <li className="nav-item mx-lg-2">
                  <ActiveLink href="/sobre" activeClassName={styles.active}>
                    <a className="nav-link">Sobre</a>
                  </ActiveLink>
                </li>
                <li className="nav-item dropdown mx-lg-2">
                  <ActiveLink href="/servicos" activeClassName={styles.active}>
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Serviços
                    </a>
                  </ActiveLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mx-lg-2">
                  <ActiveLink href="/portfolio" activeClassName={styles.active}>
                    <a className="nav-link" href="#">
                      Portfólio
                    </a>
                  </ActiveLink>
                </li>
                <li className="nav-item mx-lg-2">
                  <ActiveLink href="/clientes" activeClassName={styles.active}>
                    <a className="nav-link" href="#">
                      Clientes
                    </a>
                  </ActiveLink>
                </li>
                <li className="nav-item mx-lg-2">
                  <ActiveLink href="/posts" activeClassName={styles.active}>
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </ActiveLink>
                </li>
                <li className="nav-item mx-lg-2">
                  <ActiveLink href="/contato" activeClassName={styles.active}>
                    <a className="nav-link" href="#">
                      Contato
                    </a>
                  </ActiveLink>
                </li>
              </ul>
              <div>
                <button className="btn btn-primary rounded-pill effect-button-gray animate__animated animate__pulse animate__infinite	infinite infinite">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart3 me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  ORÇAMENTO
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
