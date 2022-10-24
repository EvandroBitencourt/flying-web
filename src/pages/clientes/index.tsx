import Head from "next/head";
import styles from "./styles.module.scss";

export default function clientes() {
  return (
    <>
      <Head>
        <title>Clientes | Flying Websites</title>
      </Head>
      <div className={styles.bannerSection}>
        <h2 className="display-4 fw-bold">CLIENTES</h2>
      </div>
      <main className="container" data-aos="fade-up">
        <section className="p-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Conheça nossos clientes</h1>
              <span className="text-center">
                Somos a Agência ideal para o seu negócio se você está em busca
                de mais clientes, mais faturamento, mais engajamento e maior
                reconhecimento de marca.
              </span>
              <div className={styles.imgSize}>
                <img
                  src="/images/Logopowerfit.png"
                  className="rounded img-thumbnail p-2"
                  alt="Academia power fit"
                />
                <img
                  src="/images/logo-llbrothers.png"
                  className="rounded img-thumbnail p-2"
                  alt="..."
                />
                <img
                  src="/images/logo-oficial-bella-blue.png"
                  className="rounded img-thumbnail p-2"
                  alt="..."
                />
                <img
                  src="/images/logo-pontocom.png"
                  className="rounded img-thumbnail p-2"
                  alt="..."
                />
                <img
                  src="/images/logo-portal-mulher-mt.png"
                  className="rounded img-thumbnail p-2"
                  alt="..."
                />
                <img
                  src="/images/LOGO-IDEAL.jpg.webp"
                  className="rounded img-thumbnail p-2"
                  alt="..."
                />
                <img
                  src="/images/logo-amarelo-1.png"
                  className="rounded img-thumbnail p-2"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
