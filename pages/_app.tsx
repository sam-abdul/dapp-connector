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
      appId="QkQVKF2gkTm4i1swWhsfq4FbamWhgKnHWyOq5h9d"
      serverUrl="https://jrckdbttmgih.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
