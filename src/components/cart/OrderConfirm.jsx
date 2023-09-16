import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createOrder } from "../../redux/actions/orderAction";

function OrderConfirm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);

  const { message, error } = useSelector((state) => state.order);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisableBtn(true);
    dispatch(
      createOrder(
        shippingInfo,
        cartItems,
        paymentMethod,
        subTotal,
        tax,
        shippingCharges,
        total
      )
    );
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/paymentsuccess");
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      setDisableBtn(false);
    }
  }, [dispatch, message, error, navigate]);

  return (
    <section className="order-confirm">
      <main>
        <h1>Confirm Order</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              required
              onChange={() => setPaymentMethod("COD")}
            />
          </div>
          <div>
            <label>Pay Online</label>
            <input
              type="radio"
              name="payment"
              required
              onChange={() => setPaymentMethod("Online")}
            />
          </div>
          <button type="submit" disabled={disableBtn}>
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
}

export default OrderConfirm;
