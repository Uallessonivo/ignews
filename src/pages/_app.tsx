import { Header } from "../components/Header";
import { AppProps } from "next/app";
import "../styles/global.scss";
import { Provider as NextAuthProvider, session } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
