import React from "react";
import { motion } from "framer-motion";
import myself from "../../assets/my-photo.jpg";

function Founder() {
  const option = {
    initial: { y: "100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };

  return (
    <section className="founder">
      <div>
        <img src={myself} alt="myself" />
        <motion.h1 {...option} transition={{ delay: 0.2 }}>
          Hello, I am Atish Anand.
        </motion.h1>
        <motion.p {...option} transition={{ delay: 0.4 }}>
          A visionary, goal oriented, problem solver and loves to take
          challenges to come out of comfort zone.
        </motion.p>
      </div>
    </section>
  );
}

export default Founder;
