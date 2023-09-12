import React from "react";
import { motion } from "framer-motion";
import frontPageImg from "../../assets/front-page-img.png";
import Founder from "./Founder";
import Menu from "./Menu";

function Home() {
  const option = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  return (
    <>
      <section className="home-upper-div">
        <div className="home-upper-left-div">
          <motion.h1 {...option}>Eat Healthy Live Healthy</motion.h1>
          <motion.p {...option} transition={{ delay: 0.2 }}>
            The ultimate platform to provide you quality and tasty food.
          </motion.p>
          <motion.a
            href="#menu"
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Explore Menu
          </motion.a>
        </div>
        <div className="home-upper-right-div">
          <div className="front-img-div">
            <img
              src={frontPageImg}
              alt="frontPageImg"
              className="front-page-img"
            />
          </div>
        </div>
      </section>
      <Menu />
      <Founder />
    </>
  );
}

export default Home;
