import React from "react";
import { motion } from "framer-motion";

function MenuCard({ foodNum, foodSrc, title, price, rating, handler }) {
  return (
    <div className="menu-card">
      <div>Food {foodNum}</div>
      <main>
        <motion.img src={foodSrc} alt={foodNum} whileHover={{ scale: 1.2 }} />
        <div>
          <h3>{title}</h3>
          <p>₹{price}</p>
        </div>
        <span>{rating}</span>
        <button onClick={() => handler(foodNum)}>Buy now</button>
      </main>
    </div>
  );
}

export default MenuCard;
