import React from "react";
import MenuCard from "./MenuCard";
import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.jpg";
import milkshake from "../../assets/milkshake.jpg";
import thali from "../../assets/thali.jpg";
import softdrink from "../../assets/softdrink.jpg";
import chowmein from "../../assets/chowmein.jpg";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function Menu() {
  const dispatch = useDispatch();

  const addToCart = (foodNum) => {
    switch (foodNum) {
      case 1:
        dispatch({ type: "burgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Burger added to cart");
        break;
      case 2:
        dispatch({ type: "pizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Pizza added to cart");
        break;
      case 3:
        dispatch({ type: "milkshakeIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Milkshake added to cart");
        break;
      case 4:
        dispatch({ type: "thaliIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Thali added to cart");
        break;
      case 5:
        dispatch({ type: "softdrinkIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Softdrink added to cart");
        break;
      case 6:
        dispatch({ type: "chowmeinIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Chowmein added to cart");
        break;

      default:
    }
  };

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
