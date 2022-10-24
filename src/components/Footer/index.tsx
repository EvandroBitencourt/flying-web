import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className={styles.backgroundFooter}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 p-4">
            <div className="col-12 col-md-6">
              <Image src={logo} alt="logo do site" width={200} height={89} />
              <p className="text-white mt-2 lh-lg">
                A Flying websites é uma empresa de criação de sites e sistemas
                <br />
                web profissionais. Nós projetamos, desenvolvemos e gerenciamos{" "}
                <br />
                sites de alto impacto que geram resultado para nossos clientes.
              </p>
              <div className="">
                <Link href="https://www.facebook.com/flyingwebsites">
                  <img
                    className="text-white"
                    src="/images/facebook.png"
                    alt="Logo do Facebook"
                    width={28}
                  />
                </Link>

                <Link href="https://www.instagram.com/flyingwebsites/">
                  <img
                    className="text-white ms-2"
                    src="/images/instagram.png"
                    alt="Logo do Instagram"
                  />
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col mt-3 mt-md-0">
                  {" "}
                  <h5 className="text-white">Navegar</h5>
                  <ul className="text-white list-unstyled lh-lg">
                    <li>Criação de site</li>
                    <li>Manutenção de site</li>
                    <li>Loja virtual</li>
                    <li>Sistemas web</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  {" "}
                  <h5 className="text-white">Contato</h5>
                  <ul className="text-white list-unstyled lh-lg">
                    <li>
                      <img
                        className="text-white fs-3"
                        src="/images/envelope.png"
                        alt="imagem do contato"
                      />{" "}
                      contato@flyingweb.com.br
                    </li>
                    <li>
                      <img
                        className="text-white fs-3"
                        src="/images/whatsapp.png"
                        alt="logo do whatsapp"
                      />{" "}
                      (65)9 99943-9012
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 bg-primary">
          <div className="text-white text-center">
            <p className="p-2">
              {" "}
              <img
                className="text-white me-2"
                src="/images/copyright.png"
                alt="imagem do copy"
                width={16}
              />
              Todos os direitos reservados - Flying Websites
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
