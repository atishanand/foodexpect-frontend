import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Loader() {
  const option = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  };
  return (
    <div className="loader">
      <IoFastFoodOutline />
      <div>
        <motion.p {...option}>Loading...</motion.p>
      </div>
    </div>
  );
}

export default Loader;
