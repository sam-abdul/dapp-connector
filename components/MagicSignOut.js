import { useMoralis } from "react-moralis";
import styles from '../styles/Home.module.css'

const MagicSignOut = () => {
    const { logout, Moralis, user } = useMoralis();
    return ( 
        <div>
           <button className={styles.magicBut} onClick={logout}>
           
           Sign Out
         </button>
           <div className={styles.magicLogIn}>You logged in with Magic Link</div>
           
          
        </div>
     );
}
 
export default MagicSignOut;