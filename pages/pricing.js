import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className={styles.pricing}>
        <div className={styles.pricing_top}>Free</div>
        <div className={styles.pricing_text}>
          Dapp-connector is free to use. All you have to do is give me
          credibility by following me on Twitter{" "}
          <div className={styles.pricing_link}>
            <Link href="https://twitter.com/SamAbdul_">@SamAbdul_</Link>.
          </div>
           It won't affect your health. Don't be stingy with following LOL.
          Thank you.
        </div>
        <div className={styles.pricing_below}>$0.0</div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
