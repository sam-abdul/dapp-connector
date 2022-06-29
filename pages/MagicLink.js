import {useMoralis} from "react-moralis";
import { useState } from "react";
import MagicSignOut from "../components/MagicSignOut";
import MagicSignIn from "../components/MagicSignIn";

const MagicLink = () => {
  const { authenticate, isAuthenticated, logout, authError, isAuthenticating } = useMoralis();
  const [email, setEmail] = useState("abeebabdullahi033@gmail.com");

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "magicLink",
      email: email,
      apiKey: "pk_live_2695D8F9236525FB",
      network: "kovan",
    });};
    return ( 
        <div>
        {isAuthenticated? <MagicSignOut/>: <MagicSignIn/>}
        </div>
     );
}
export default MagicLink