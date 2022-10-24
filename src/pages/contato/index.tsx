import Head from "next/head";
import styles from "./styles.module.scss";
import { FiMail, FiPhoneCall } from "react-icons/fi";

export default function contato() {
  return (
    <>
      <Head>
        <title>Contato | Flying Websites</title>
      </Head>
      <div className={styles.bannerSection}>
        <h2 className="display-4 fw-bold">CONTATO</h2>
      </div>
      <main className="container" data-aos="fade-up">
        <section className="p-5">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <h1>Formulário de Contato</h1>
              <span>
                Entre em contato conosco, teremos o maior prazer em atende-lo da
                melhor maneira possivel e ajudá-lo a encontrar a solução ideal
                para sua empresa.
              </span>
              <div className="mt-4 border border-primary shadow rounded p-4">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Seu E-mail"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Assunto"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows={3}></textarea>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      ENVIAR
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-7 ps-5 col-sm-12 mt-5 mt-md-0">
              <h2>Informações de contato</h2>
              <p>
                {" "}
                <a
                  href="mailto:contato@flyingweb.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted"
                >
                  <FiMail size={20} color="#98b633;" className="me-2" />
                  contato@flyingweb.com.br
                </a>
              </p>
              <button className="btn btn-dark rounded-pill">
                <FiPhoneCall size={20} color="#fff;" className="me-2" />
                (65)9 99943-9012
              </button>
              <hr />
              <h2>Horário de atendimento</h2>
              <p>
                Segunda - Sexta 9h às 12h - 13h às 18h Sabado e Domingo estamos
                fechados
              </p>
              <p>Cuiabá - MT</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
