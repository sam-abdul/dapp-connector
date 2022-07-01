import React from "react";
import "antd/dist/antd.css";
import { Button, Modal, Alert } from "antd";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useWeb3 } from "@3rdweb/hooks";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import style from "../styles/But.module.css";
import Image from "next/image";
import Metamask from "../public/metamask.png";
import WalletConnect from "../public/walletconnect.png";
import MagicLink from "../public/magic-link.jpeg";
import Trustwallet from "../public/trustwallet.png";
import Phantom from "../public/phantom.jpeg";
import Coinbase from "../public/coinbase.png";

const WalletCon = () => {
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

  const { authenticate, isAuthenticated, logout, user } = useMoralis();
  return (
    <div>
      <Alert
        message="Notification"
        description="Make sure you have the Metamask and Phantom (Solana) chrome wallet installed to be able to authenticate with the Metamask or Phantom (Solana) wallet. You can also use the walletConnect to connect any wallet. The metamask and phantom are for desktop views only. Use the rest for mobile view."
        type="warning"
        showIcon
        closable
      />
      <div className={styles.icon_body}>
        <button className={style.walletBut} onClick={showModal}>
          Connect wallet
        </button>
      </div>
      <Modal
        title="Choose Wallet"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {isAuthenticated ? (
          <>
            <h3>
              You are login with Metamask. Your wallet address is:{" "}
              {user.get("ethAddress")}
            </h3>
            <button className={style.walletBut} onClick={logout}>
              logout
            </button>
          </>
        ) : (
          <div className={styles.icon_body}>
            <div className={styles.icon}>
              <div className={styles.icon_child}>
                <button
                  onClick={() => {
                    authenticate({ provider: "walletconnect" });
                  }}
                  className={style.iconBut}
                >
                  {" "}
                  <Image src={WalletConnect} width={80} height={80} />
                  WalletConnect
                </button>
              </div>

              <div className={styles.icon_child}>
                <button
                  onClick={() => {
                    authenticate({ provider: "walletconnect" });
                  }}
                  className={style.iconBut}
                >
                  <Image src={Trustwallet} width={80} height={80} />
                 TrustWallet
                </button>
              </div>
            </div>
            <div className={styles.icon}>
              <div className={styles.icon_child}>
                <Link href="/MagicLink">
                  <button className={style.iconBut}>
                    <Image src={MagicLink} width={80} height={80} />
                    MagicLink
                  </button>
                </Link>
              </div>
              <div className={styles.icon_child}>
                <button
                  onClick={() => {
                    authenticate({ provider: "metamask" });
                  }}
                  className={style.iconBut}
                >
                  <Image src={Metamask} width={80} height={80} />
                  Metamask
                </button>
              </div>
            </div>
            <div className={styles.icon}>
              <div className={styles.icon_child}>
                <button
                  onClick={() => {
                    authenticate({ type: "sol" });
                  }}
                  className={style.iconBut}
                >
                  <Image src={Phantom} width={80} height={80} />
                  Phantom
                </button>
              </div>

              <div className={styles.icon_child}>
                <button
                  onClick={() => {
                    authenticate({ provider: "walletconnect" });
                  }}
                  className={style.iconBut}
                >
                  <Image src={Coinbase} width={80} height={80} />
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

export default WalletCon;
