import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
