import styles from '../styles/Home.module.css'
import Welcome from '../public/welcome1.webp'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return ( 
        <div className={styles.header}>
            <div className={styles.headerBody}>
            <div className={styles.header_text}>
               Welcome to<br></br> dapp-connector.
             
            </div>
         <div className={styles.headerBut}>Get Started</div>
            </div>
            <div className={styles.header_img}>
            <Image src={Welcome}/>
            </div>
        </div>
     );
}
 
export default Header;