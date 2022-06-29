import Navbar from "../components/Navbar";
import WalletCon from "../components/wallet-con";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

import { CopyBlock, dracula } from "react-code-blocks";

const Document = () => {
  return (
    <>
      <Navbar />
      <div className={styles.documentation}>
        <p className={styles.paragraph}>
          Welcome to the dapp-connect documentation. In this article we will
          show you how you can integrate web3 authentication into your web app.
          You can take a look at the example made below. Click that button that
          says "connect wallet to check it out."
        </p>
        <WalletCon />
        <p className={styles.paragraph}>
          Let's get started. First, create your ReactJS or NextJS project
          folder.
        </p>
        <div className={styles.codeBlock}>
          <CopyBlock
            className={styles.codeBlock}
            language="jsx"
            text={`npx create-react-app
 //or
npx create-next-app@latest --ts`}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
        </div>
        <p className={styles.paragraph}>Let's install the dependencies.</p>
        <div className={styles.codeBlock}>
          <CopyBlock
            language="jsx"
            text={`npm install react-moralis 
npm install antd `}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
        </div>
        <p className={styles.paragraph}>
          Set up an account with Magic.Link and Moralis. Now go to your Moralis
          account and get your <b>appId</b> and <b>serverUrl</b> And add to the
          following code below in your <b>_app.js</b>(for Nextjs) or{" "}
          <b>index.js</b>(for Reactjs).
        </p>
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
        <p className={styles.paragraph}>
          Once you're done, create a <b>Components</b> folder and create a file
          in it call it <b>WalletConnect.js</b>this where we will add our
          athentication button just like the one above.
        </p>
        <div className={styles.codeBlock}>
          <CopyBlock
            language="jsx"
            text={`
        // Components/walletConnect.js
        import React from "react";
        import "antd/dist/antd.css";
        import { Modal } from "antd";
        import { useState } from "react";
        import { useMoralis } from "react-moralis";
        import Link from "next/link";
        
        const WalletConnect = () => {
          const [isModalVisible, setIsModalVisible] = useState(false);
        
          const showModal = () => {
            setIsModalVisible(true);
          };
        
          const handleOk = () => {
            setIsModalVisible(false);
          };
        
          const handleCancel = () => {
            setIsModalVisible(false);
          };
        
          const {authenticate, isAuthenticated, logout, user} = useMoralis();
          return (
            <div>
              <div>
                <button onClick={showModal}>Connect wallet</button>
              </div>
              <Modal
                title="Choose Wallet"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                {isAuthenticated ? (<>
                    <h3>
                      You are login with Metamask. Your wallet address is:{" "}
                      {user.get("ethAddress")}
                    </h3>
                    <button onClick={logout}>logout</button>
                  </>
                ) : (
                  <div>
                    <div>
                      <div>
                        <button onClick={() => {authenticate({ provider: "metamask" });}}>
                          {" "}
                          Metamask
                        </button>
                      </div>   
                      <div>
                        <button onClick={() => {authenticate({ provider: "walletconnect" });}}>
                          walletconnect
                        </button>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Link href="/MagicLink">
                          <button>MagicLink</button>
                        </Link>
                      </div>
                      <div>
                        <button onClick={() => {authenticate({ type: "sol" });}}>
                          Phantom
                        </button>
                      </div>
                    </div>
                    <div>
                      <div>
                        <button onClick={() => {authenticate({ provider: "walletconnect" });}}>
                          TrustWallet
                        </button>
                      </div>
                      <div>
                        <button onClick={() => {authenticate({ provider: "walletconnect" });}}>
                          CoinBase
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Modal>
            </div>
          );
        };
        export default WalletConnect;
        `}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
        </div>
        <p className={styles.paragraph}>
          If you add the previous code to your website, you will get a
          basic-looking connect button. Now take your time to design the buttons
          to your taste and don't forget to test the wallets because the buttons
          are functioning well, which means you can now authenticate users to
          your website using web3 wallet authentication.Lastly, for the
          MagicLink, you will link that button to a new page, so on that page,
          use the code below to activate the <b>Magic Link</b> authentication
          below. Which means that the Magic Link button should take users to a
          new page. Now let's create a new page. Let's call it MagicLink.js and
          add the following codes below. After that, create another two files in
          the Components folder let's call it <b>MagicSignIn.js</b> and{" "}
          <b>MagicSignOut.js</b>. We will import this two components into the{" "}
          <b>MagicLink.js</b> page. Add the following code below to your{" "}
          <b>MagicLink.js</b> file.
        </p>
        <div className={styles.codeBlock}>
          <CopyBlock
            language="jsx"
            text={`//page/MagicLink.js
        import {useMoralis} from "react-moralis";
        import { useState } from "react";
        import MagicSignOut from "../components/MagicSignOut";
        import MagicSignIn from "../components/MagicSignIn";
        
        const MagicLink = () => {
          const { authenticate, isAuthenticated, logout, authError, isAuthenticating } = useMoralis();
          const [email, setEmail] = useState("youremail@gmail.com");
        
          const handleCustomLogin = async () => {
            await authenticate({
              provider: "magicLink",
              email: email,
              apiKey: "k_live_18118TYAJ12525FB",
              network: "kovan",
            });};
            return ( 
                <div>
                {isAuthenticated? <MagicSignOut/>: <MagicSignIn/>}
                </div>
             );
        }
        export default MagicLink`}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
        </div>
        <p className={styles.paragraph}>
          After that, go to <b>Magic.link</b> to get your app <b>apikey</b> and
          add it to the code below. Remove that one above and add your own{" "}
          <b>apikey</b> otherwise you won't get the result you. Also don't
          forget to add your <b>moralis</b> apiId and serverUrl. Go to your{" "}
          <b>MagicSignIn.js</b> and add the following code below.
        </p>
        <div className={styles.codeBlock}>
          <CopyBlock
            language="jsx"
            text={`//Components/MagicSignIn.js
import { useState } from "react";
import { useMoralis } from "react-moralis";

const MagicSignIn = () => {
  const { authenticate, isAuthenticated, authError, isAuthenticating } = useMoralis();
  const [email, setEmail] = useState("Email");

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "MagicLink",
      email: email,
      apiKey: "pk_live_18118TYAJ12525FB",
      network: "kovan",
    });
  };
return (
    <div>
      {isAuthenticating && <p>Authenticating...</p>}
      {authError && ( <p>{JSON.stringify(authError.message)}</p>)}
      <div>
        <b>Magic Link</b> <div>
          <input
            type={"email"}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button onClick={handleCustomLogin}>Login with Magic Link</button>
        </div>
      </div>
    </div>
  );
};
export default MagicSignIn;
`}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
        </div>
        <p className={styles.paragraph}>
          Lastly add the code below to the <b>MagicSignOut.js</b> file.
        </p>

        <div className={styles.codeBlock}>
          <CopyBlock
            language="jsx"
            text={`//Components/MagicSignOut.js
        import { useMoralis } from "react-moralis";
        import { useEffect, useState } from "react";
        
        const MagicSignOut = () => {
            const { logout, Moralis, user } = useMoralis();
            return ( 
                <div>
                   <button onClick={logout}>
                  Sign Out
                </button>
                </div>
             );
        }
        export default MagicSignOut; `}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
        </div>
        <p className={styles.paragraph}>
          There you go. We have our Web3 authentication working perfectly. All
          you have to do is style it to your own taste and if you have a
          question or need anything concerning this project, reach on in.{" "}
          <b>abeebabdullahi033@gmail.com</b> or <b>@SamAbdul_</b> on Twitter and
          use the Topic Dapp-Connector (question). Happy Coding🎉🎉 I'm Sam
          Abdul a Nigerian 🇳🇬.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Document;
