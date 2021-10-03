import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NavBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
