
import { useState } from "react";
import Hero from "../components/Hero9";
// import Hero from "../components/Main2";
import Navbar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* <Hero  setMenuOpen={setMenuOpen}/> */}
      <Hero setMenuOpen={setMenuOpen} />

      {/* <Journey /> */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
