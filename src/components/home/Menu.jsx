import React from "react";
import MenuCard from "./MenuCard";
import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.jpg";
import milkshake from "../../assets/milkshake.jpg";
import thali from "../../assets/thali.jpg";
import softdrink from "../../assets/softdrink.jpg";
import chowmein from "../../assets/chowmein.jpg";

function Menu() {
  const addToCart = (foodNum) => {};

  return (
    <section id="menu">
      <h1>Menu Card</h1>
      <div className="menu-card-container">
        <MenuCard
          foodNum={1}
          foodSrc={burger}
          title="Burger"
          price={150}
          rating="⭐⭐⭐⭐"
          handler={addToCart}
        />
        <MenuCard
          foodNum={2}
          foodSrc={pizza}
          title="Pizza"
          price={400}
          rating="⭐⭐⭐⭐"
          handler={addToCart}
        />
        <MenuCard
          foodNum={3}
          foodSrc={milkshake}
          title="Milkshake"
          price={70}
          rating="⭐⭐⭐⭐⭐"
          handler={addToCart}
        />
        <MenuCard
          foodNum={4}
          foodSrc={thali}
          title="Thali"
          price={250}
          rating="⭐⭐⭐⭐⭐"
          handler={addToCart}
        />
        <MenuCard
          foodNum={5}
          foodSrc={softdrink}
          title="Softdrink"
          price={60}
          rating="⭐⭐⭐⭐⭐"
          handler={addToCart}
        />
        <MenuCard
          foodNum={6}
          foodSrc={chowmein}
          title="Chowmein"
          price={100}
          rating="⭐⭐⭐⭐"
          handler={addToCart}
        />
      </div>
    </section>
  );
}

export default Menu;
