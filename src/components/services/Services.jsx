import React from "react";
import { motion } from "framer-motion";
import currency from "../../assets/currency.jpg";
import apple from "../../assets/apple.png";
import deliveryperson from "../../assets/deliveryperson.png";

function Services() {
  return (
    <section className="services">
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <img src={currency} alt="currency" />
        <h1>Affordable Price</h1>
        <p>You will find the best possible price here.</p>
      </motion.div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <img src={apple} alt="apple" />
        <h1>Fresh Food</h1>
        <p>We focus on providing quality food.</p>
      </motion.div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <img src={deliveryperson} alt="deliveryperson" />
        <h1>Lightning Speed Delivery</h1>
        <p>Experience on time food delivery.</p>
      </motion.div>
    </section>
  );
}

export default Services;
