import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";

const supportedChainIds = [1, 4];
const connectors = {
  injected: {},
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId="Pidxmn1278gkTm4i1swQOIskhkWhgKnHWyOq5h9d"
      serverUrl="https://qiqshshkk.usemoralis.com:1910/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
