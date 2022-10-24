import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/home.module.scss";
import Script from "next/script";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";
import { RichText } from "prismic-dom";

type Content = {
  title: string;
  titleContent: string;
  linkAction: string;
  webBanner: string;
};

interface ContentProps {
  content: Content;
}

export default function Home({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>Home - Flyingweb sites</title>
      </Head>
      <main>
        <section>
          <div className="container" data-aos="fade-up">
            <div className="row pt-4">
              <div className="col-lg-7 align-self-center">
                <h1 className="display-3">
                  Criação de Sites{" "}
                  <span className="text-primary fw-bold">
                    <strong>Profissionais</strong>
                  </span>
                </h1>
                <span>{content.titleContent}</span>
                <div className="mt-4 mb-4">
                  <a
                    href=""
                    type="button"
                    className="btn btn-dark rounded-pill effect-button-black btn-lg animate__animated animate__bounce animate__repeat-1"
                  >
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
                    PEÇA UM ORÇAMENTO
                  </a>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <img
                  className="img-fluid my-5"
                  src={content.webBanner}
                  alt="conteúdo flying websites"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-1 g-4  p-5">
              <div className="col" data-aos="fade-right">
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
                    <div className="card-text lh-lg">
                      Nossa empresa é focada na criação de sites. Uma Agência
                      web em Cuiabá. Pensou em desenvolvimento de sites, sites
                      responsivos, SEO, adwords, banco de dados? Temos tudo para
                      o seu site.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="flip-left">
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
                    <h5 className="card-title">Manutenção de Sites</h5>
                    <div className="card-text lh-lg">
                      A manutenção de sites é tão importante quanto a criação de
                      site em si, pois é ela que vai manter as informações
                      atualizadas, e fazer o cliente se tornar fiel.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-left">
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
                    <div className="card-text lh-lg">
                      Solução completa e profissional de Lojas Virtuais, com
                      varias opções de pagamento e frete com estoque, suporte
                      completo com atualizações e melhorias grátis!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h3
              className="text-center mt-5 text-primary display-5 fw-bold"
              data-aos="fade-right"
            >
              Criação de Sites Responsivos e SEO
            </h3>
            <p className="text-center">
              Somos especializados no{" "}
              <span className="text-muted">
                desenvolvimento de sites profissionais
              </span>{" "}
              e utilizamos as <br />
              mais modernas técnicas para web design existentes na internet.
            </p>
            <div className="row row-cols-1 p-5 row-cols-md-2">
              <div className="col align-self-center">
                <div className="card">
                  <div className="card-header">
                    <h5 className="fw-lighter mt-2 text-center fw-bold">
                      A FLYING WEBSITES
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="card-text lh-lg">
                      A Flying websites é uma agência web especializada em
                      criação de sites e sistemas web e plataformas de vendas
                      online em WordPress e outras plataformas. Nós projetamos,
                      Criamos sites profissionais, exclusivos e gerenciáveis.
                      Porém, não queremos ser apenas mais uma empresa de
                      desenvolvimento web. Nossa proposta, é que você tenha além
                      de um site bonito, um site que gere Resultado.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <img
                  className="mx-auto d-block img-fluid"
                  src="/images/responsivo.gif"
                  alt="criação de sites"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary p-4">
          <div className="container">
            <h3 className="text-center mt-5 text-white display-5 area-5">
              O QUE DIZEM OS NOSSOS CLIENTES
            </h3>
            <p className="text-center text-white">
              Nossa equipe não cria somente sites, também nos preocupamos com o
              sucesso de nossos clientes!
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h3
              className="text-center mt-5 text-dark display-5"
              data-aos="fade-down"
            >
              Perguntas{" "}
              <span className="text-primary fw-bold">
                <strong> Frequentes</strong>
              </span>
            </h3>
            <div className="p-5 row" data-aos="fade-up">
              <div className="col-12 col-md-8 m-auto">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Vou conseguir fazer alterações no meu próprio site?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>Após fazer o site</strong> , deixamos preparado
                        para você uma interface amigável. Você terá muita
                        facilidade para editar seu site e expandi-lo e além
                        disso, nós vamos te orientar e prestar um suporte grátis
                        nos 15 primeiros dias após a entrega do website.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        O que é preciso para ter um site na internet?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>Você precisará de um domínio</strong> (URL do
                        site), um servidor de hospedagem, e o site em si
                        desenvolvido. Te ajudaremos em todas as etapas e te
                        acompanharemos durante todo o processo de criação de
                        site.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Como fazer um orçamento para um site?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>Nossa dica para solicitar o orçamento</strong>{" "}
                        de site é definir o tipo de site que deseja e quais
                        funcionalidades ou integrações serão necessárias. Quanto
                        mais detalhes relevantes você fornece, mais assertivo
                        será o nosso orçamento para sua demanda.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingfor">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefor"
                        aria-expanded="false"
                        aria-controls="collapsefor"
                      >
                        Meu site vai aparecer no google e eu posso integrar com
                        redes sociais?
                      </button>
                    </h2>
                    <div
                      id="collapsefor"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfor"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>Sim. Após o site estar no ar </strong> ele já
                        estará pronto para ser indexado pelo Google. Esse
                        processo poderá demorar alguns dias. Além disso, seu
                        site possuirá ferramentas de integração com as redes
                        sociais, permitindo publicações simultâneas, além de
                        permitir que seus visitantes curtam e compartilhem seu
                        site em suas redes sociais.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at("document.type", "home"),
  ]);

  const { title, sub_title, link_action, web_banner } =
    response.results[0].data; // descontruindo objeto para pegar apenas o necessario

  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    linkAction: link_action.url,
    webBanner: web_banner.url,
  };

  return {
    props: {
      content,
    },
    revalidate: 60 * 2, // a cada 2 minutos
  };
};
