import Head from "next/head";
import styles from "./styles.module.scss";
import { FiMail, FiPhoneCall } from "react-icons/fi";

export default function contato() {
  return (
    <>
      <Head>
        <title>Portfólio | Flying Websites</title>
      </Head>
      <div className={styles.bannerSection}>
        <h2 className="display-4 fw-bold">Projetos</h2>
      </div>
      <main className="container" data-aos="zoom-in">
        <section className="p-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-1 g-4 ">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  {" "}
                  <img
                    width={350}
                    className="mx-auto d-block efeito"
                    src="/images/power-portfolio.jpg"
                    alt="criação de sites"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold text-center">
                    Academia PowerFit
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <img
                    width={200}
                    className="mx-auto d-block"
                    src="/images/manutencao-de-site.png"
                    alt="criação de sites"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold text-center">
                    BellaBlue Store
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <img
                    width={280}
                    className="mx-auto d-block"
                    src="/images/loja-virtual.png"
                    alt="criação de sites"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Lojas Virtuais</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  {" "}
                  <img
                    width={200}
                    className="mx-auto d-block"
                    src="/images/criacao-de-sites.png"
                    alt="criação de sites"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">Criação de Sites</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  {" "}
                  <img
                    width={200}
                    className="mx-auto d-block"
                    src="/images/criacao-de-sites.png"
                    alt="criação de sites"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">Criação de Sites</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  {" "}
                  <img
                    width={200}
                    className="mx-auto d-block"
                    src="/images/criacao-de-sites.png"
                    alt="criação de sites"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">Criação de Sites</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  {" "}
                  <img
                    width={200}
                    className="mx-auto d-block"
                    src="/images/criacao-de-sites.png"
                    alt="criação de sites"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">Criação de Sites</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  {" "}
                  <img
                    width={200}
                    className="mx-auto d-block"
                    src="/images/criacao-de-sites.png"
                    alt="criação de sites"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">Criação de Sites</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  {" "}
                  <img
                    width={200}
                    className="mx-auto d-block"
                    src="/images/criacao-de-sites.png"
                    alt="criação de sites"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">Criação de Sites</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
