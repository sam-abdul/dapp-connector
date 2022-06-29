import type { NextPage } from "next";
import WalletCon from "../components/wallet-con";
import Snippet from "../components/snippets/Snippet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from '../components/About'
import Wallet from '../components/Wallet'

// #6851FF theme color

const Home: NextPage = () => {
  return (
    <div className='index'>
      <Navbar />
      <Header />
      <About/>
      <WalletCon />
      <Snippet />
      <Wallet/>
      <Footer />
    </div>
  );
};

export default Home;
