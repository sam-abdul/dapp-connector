import styles from "../styles/Home.module.css";
import Img from "../public/about1.gif";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div className={styles.about}>
        {/* <div className={styles.about_Img}>
          <Image src={Img} height={200} width={200} />
        </div> */}
        <div className={styles.about_text}>
          Dapp-connector is a ready-made web3 authentication which you can
          easily integrate into your web app so users can authenticate using the
          web3 authentication method. Users can authenticate with their
          cryptowallets of any kind. You can integrate Dapp-connector into your
          ReactJS and NextJS apps. Try it out by pressing that button that says
          "connect wallet."
        </div>
      </div>
    </>
  );
};

export default About;
