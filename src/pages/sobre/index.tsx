import Head from "next/head";
import styles from "./styles.module.scss";
import { FiMail, FiPhoneCall } from "react-icons/fi";

export default function sobre() {
  return (
    <>
      <Head>
        <title>Sobre | Flying Websites</title>
      </Head>
      <div className={styles.bannerSection}>
        <h2 className="display-4 fw-bold">SOBRE-NÓS</h2>
      </div>
      <main className="container" data-aos="fade-up">
        <section className="p-5">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <h1 className="text-primary fw-bold text-uppercase">
                A Flying WebSites
              </h1>
              <span className="text-muted">
                Temos uma equipe de web designers especializados em desenvolver
                sites que geram mais clientes e vendas!
              </span>
              <div className="mt-4">
                <img
                  width={400}
                  src="/images/banner-sobre-flying-websites.jpg"
                  alt="Imagem sobre a empresa"
                  className="shadow rounded img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7 ps-5 col-sm-12 mt-5 mt-md-0">
              <h2>Nós acreditamos em inovação</h2>
              <p className="lh-lg">
                Aqui na Flying Websites nossa equipe trabalham lado a lado,
                conseguimos aplicar estratégias criativas e modernas na criação
                do seu site, de forma ágil, focando em trazer resultados e na
                experiência do usuário final. Sabemos que você entende do seu
                negócio, mas nós conseguimos encontrar soluções para os seus
                problemas.
              </p>
              <button className="btn btn-dark rounded-pill btn-lg">
                <FiMail size={20} color="#fff;" className="me-2" />
                FALE CONOSCO
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
