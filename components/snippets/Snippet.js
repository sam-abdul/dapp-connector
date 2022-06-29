import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";
import styles from '../../styles/Home.module.css'
import style from '../../styles/But.module.css'
const Snippets = () => {
  return(
     <>
 <div className={styles.codeBlock}>
   
 <CopyBlock
        language="jsx"
        text={`//_app.js or index.js
        import '../styles/globals.css'
        import type { AppProps } from 'next/app'
        import { MoralisProvider } from 'react-moralis'
        
        const supportedChainIds = [1, 4]
        const connectors = {
            injected:{}
        }
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
     export default MyApp `}
        codeBlock
        theme={dracula}
        showLineNumbers={false}
      />
 </div>
 <Link href='/document'>
<div className={style.text}>Open full Documentation</div>
 </Link>

  </>);
};

export default Snippets;
