import styles from "../styles/Home.module.css";
import Image from "next/image";
import Logo from "../public/logo.png";
import Linkedin from "../public/linkedin.png";
import Website from "../public/website.png";
import Twitter from "../public/twitter.png";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Image src={Logo} height={40} width={40} />
        <div className={styles.footer_text}> Sam Abdul</div>
        <div className={styles.social}>
            <div className={styles.social_icon}>
                <Link href='https://samabdul.com'>
                <Image src={Website} height={30} width={30} />
                </Link>
            </div>
            <div className={styles.social_icon}>
                <Link href='https://www.linkedin.com/in/sam-abdul-6b5875196/'>
                <Image src={Linkedin} height={30} width={30} />
                </Link>
            </div>
            <div className={styles.social_icon}>
                <Link href='https://twitter.com/SamAbdul_'>
                <Image src={Twitter} height={30} width={30} />
                </Link>
            </div>
          
        </div>
        <div className={styles.social_icon}>
                <Link href='https://github.com/sam-abdul'>
               <p> https://github.com/sam-abdul</p>
                </Link>
            </div>
      </div>
    </>
  );
};

export default Footer;
