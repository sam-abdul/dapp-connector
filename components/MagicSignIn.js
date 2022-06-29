import { useState } from "react";
import { useMoralis } from "react-moralis";
import styles from '../styles/Home.module.css'
import MagicLink from "../public/magic-link.jpeg";
import Image from "next/image";
const MagicSignIn = () => {
  const { authenticate, isAuthenticated, authError, isAuthenticating } =
    useMoralis();

  const [email, setEmail] = useState("Email");

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "magicLink",
      email: email,
      apiKey: "pk_live_2695D8F9236525FB",
      network: "kovan",
    });
  };

  return (
    <div>
      {isAuthenticating && <p className={styles.success}>Authenticating...</p>}
      {authError && <p className={styles.error}>{JSON.stringify(authError.message)}</p>}
      <div className={styles.magicCard}>
      
       <div className={styles.magicCard_img}>
       <Image src={MagicLink} width={80} height={80}/>
       
       </div>
       <b>Magic Link</b>
       
     <div className={styles.magicCard_form}>
     <input
        className={styles.input}
          type={"email"}
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            
          }}
        />

        <button className={styles.magicCard_But} onClick={handleCustomLogin}>Login with Magic Link</button>
     </div>
      </div>
    </div>
  );
};

export default MagicSignIn;
