import React, { useEffect } from "react";
import burgerImg from "../../assets/burger.jpg";
import pizzaImg from "../../assets/pizza.jpg";
import milkshakeImg from "../../assets/milkshake.jpg";
import thaliImg from "../../assets/thali.jpg";
import softdrinkImg from "../../assets/softdrink.jpg";
import chowmeinImg from "../../assets/chowmein.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ value, title, img, price, increment, decrement }) => {
  return (
    <div className="cart-item">
      <div>
        <img src={img} alt="cartItem" />
        <h4>{title}</h4>
      </div>

      <div>
        <div>
          <button onClick={decrement}>-</button>
          <input type="number" readOnly value={value} />
          <button onClick={increment}>+</button>
        </div>
        <p>₹{price}</p>
      </div>
    </div>
  );
};

function Cart() {
  const {
    cartItems: { burger, pizza, milkshake, thali, softdrink, chowmein },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const { cartItems: orderItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "burgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "pizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "milkshakeIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 4:
        dispatch({ type: "thaliIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 5:
        dispatch({ type: "softdrinkIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 6:
        dispatch({ type: "chowmeinIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      default:
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (burger.quantity === 0) break;
        dispatch({ type: "burgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (pizza.quantity === 0) break;
        dispatch({ type: "pizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (milkshake.quantity === 0) break;
        dispatch({ type: "milkshakeDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 4:
        if (thali.quantity === 0) break;
        dispatch({ type: "thaliDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 5:
        if (softdrink.quantity === 0) break;
        dispatch({ type: "softdrinkDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 6:
        if (chowmein.quantity === 0) break;
        dispatch({ type: "chowmeinDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      default:
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({ subTotal, tax, shippingCharges, total })
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);

  return (
    <section className="cart">
      <main>
        <CartItem
          value={burger.quantity}
          title="Burger"
          img={burgerImg}
          price={150}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          value={pizza.quantity}
          title="Pizza"
          img={pizzaImg}
          price={400}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          value={milkshake.quantity}
          title="Milkshake"
          img={milkshakeImg}
          price={70}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <CartItem
          value={thali.quantity}
          title="Thali"
          img={thaliImg}
          price={250}
          increment={() => increment(4)}
          decrement={() => decrement(4)}
        />
        <CartItem
          value={softdrink.quantity}
          title="Softdrink"
          img={softdrinkImg}
          price={60}
          increment={() => increment(5)}
          decrement={() => decrement(5)}
        />
        <CartItem
          value={chowmein.quantity}
          title="Chowmein"
          img={chowmeinImg}
          price={70}
          increment={() => increment(6)}
          decrement={() => decrement(6)}
        />
      </main>
      <article>
        <div>
          <h4>Sub Total</h4>
          <p>{subTotal}</p>
        </div>
        <div>
          <h4>Tax</h4>
          <p>{tax}</p>
        </div>
        <div>
          <h4>Shipping Charges</h4>
          <p>{shippingCharges}</p>
        </div>
        <div>
          <h4>Total</h4>
          <p>{total}</p>
        </div>
        <Link to="/shipping">Checkout</Link>
      </article>
    </section>
  );
}

export default Cart;
