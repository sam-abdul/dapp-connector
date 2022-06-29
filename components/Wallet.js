import styles from "../styles/Home.module.css";
import Metamask from "../public/metamask.png";
import WalletConnect from "../public/walletconnect.png";
import MagicLink from "../public/magic-link.jpeg";
import Trustwallet from "../public/trustwallet.png";
import Phantom from "../public/phantom.jpeg";
import Coinbase from "../public/coinbase.png";
import Image from "next/image";
const Wallet = () => {
  return (
    <>
      <div className={styles.walletType}>
        <div className={styles.walletHead}>Wallet Supported</div>
        <div className={styles.walletBody}>
          <div className={styles.wallet_child}> <Image src={Metamask} height={100} width={100} /></div>
          <div className={styles.wallet_child}>  <Image src={WalletConnect} height={100} width={100} /></div>{" "}
          <div className={styles.wallet_child}>  <Image src={MagicLink} height={100} width={100} /></div>
         {" "}
        {" "}
        
        </div>
        <div className={styles.walletBody}>
        <div className={styles.wallet_child}>  <Image src={Trustwallet} height={100} width={100} /></div>
        <div className={styles.wallet_child}>  <Image src={Phantom} height={100} width={100} /></div>
        <div className={styles.wallet_child}>  <Image src={Coinbase} height={100} width={100} /></div>
        </div>
        <div className={styles.walletBelow}>
            And More
        </div>
      </div>
    </>
  );
};

export default Wallet;
