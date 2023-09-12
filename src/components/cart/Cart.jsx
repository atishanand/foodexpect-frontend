import React from "react";
import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.jpg";
import milkshake from "../../assets/milkshake.jpg";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, img, price, increament, decreament }) => {
  return (
    <div className="cart-item">
      <div>
        <img src={img} alt="cartItem" />
        <h4>{title}</h4>
      </div>

      <div>
        <div>
          <button onClick={decreament}>-</button>
          <input type="number" readOnly value={value} />
          <button onClick={increament}>+</button>
        </div>
        <p>₹{price}</p>
      </div>
    </div>
  );
};

function Cart() {
  const increament = (item) => {};

  const decreament = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          value={0}
          title="Burger"
          img={burger}
          price={150}
          increament={() => increament(1)}
          decreament={() => decreament(1)}
        />
        <CartItem
          value={0}
          title="Pizza"
          img={pizza}
          price={400}
          increament={() => increament(1)}
          decreament={() => decreament(1)}
        />
        <CartItem
          value={0}
          title="Milkshake"
          img={milkshake}
          price={70}
          increament={() => increament(1)}
          decreament={() => decreament(1)}
        />
      </main>
      <article>
        <div>
          <h4>Sub Total</h4>
          <p>{2000}</p>
        </div>
        <div>
          <h4>Tax</h4>
          <p>{2000 * 0.18}</p>
        </div>
        <div>
          <h4>Shipping Charges</h4>
          <p>{200}</p>
        </div>
        <div>
          <h4>Total</h4>
          <p>{2560}</p>
        </div>
        <Link to="/shipping">Checkout</Link>
      </article>
    </section>
  );
}

export default Cart;
