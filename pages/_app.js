import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import {ContextState} from "@/components/ContextState";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <ContextState>
      <Layout>
        <Head title={`Mohamed Alaa | ${pageProps.title}`} />
        <Component {...pageProps} />
      </Layout>
    </ContextState>
  );
}

export default MyApp;
