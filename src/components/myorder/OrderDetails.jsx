import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../redux/actions/orderAction";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader";

function OrderDetails() {
  const params = useParams();
  const { order, loading } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [params.id, dispatch]);

  return (
    <section className="order-detaials">
      {loading === false && order !== undefined ? (
        <main>
          <h1>Order Details</h1>

          <div>
            <h2>Shipping</h2>
            <p>
              <b>Address</b>
              {`${order.shippingInfo.hNo}, 
               ${order.shippingInfo.city}, 
               ${order.shippingInfo.state}, 
               ${order.shippingInfo.country}, 
               ${order.shippingInfo.pinCode}`}
            </p>
          </div>
          <hr />

          <div>
            <h2>Contact</h2>
            <p>
              <b>Name</b>
              {order.user.name}
            </p>
            <p>
              <b>Phone No.</b>
              {order.shippingInfo.phoneNo}
            </p>
          </div>
          <hr />

          <div>
            <h2>Status</h2>
            <p>
              <b>Order Status</b>
              {order.orderStatus}
            </p>
            <p>
              <b>Placed At</b>
              {order.createdAt.split("T")[0]}
            </p>
            <p>
              <b>Delivered At</b>
              {order.deliveryAt ? order.deliveryAt.split("T")[0] : "NA"}
            </p>
          </div>
          <hr />

          <div>
            <h2>Payment</h2>
            <p>
              <b>Payment Method</b>
              {order.paymentMethod}
            </p>
          </div>
          <hr />

          <div>
            <h2>Amount</h2>
            <p>
              <b>Items Total</b>₹{order.itemsPrice}
            </p>
            <p>
              <b>Shipping Charges</b>₹{order.shippingCharge}
            </p>
            <p>
              <b>Tax</b>₹{order.taxPrice}
            </p>
            <p>
              <b>Total</b>₹{order.totalAmount}
            </p>
          </div>
          <hr />

          <article>
            <h1>Ordered Item</h1>

            <div>
              <h4>Burger</h4>
              <div>
                <span>{order.orderedItems.burger.quantity}</span> x{" "}
                <span>{order.orderedItems.burger.price}</span>
              </div>
            </div>
            <div>
              <h4>Pizza</h4>
              <div>
                <span>{order.orderedItems.pizza.quantity}</span> x{" "}
                <span>{order.orderedItems.pizza.price}</span>
              </div>
            </div>
            <div>
              <h4>Milkshake</h4>
              <div>
                <span>{order.orderedItems.milkshake.quantity}</span> x{" "}
                <span>{order.orderedItems.milkshake.price}</span>
              </div>
            </div>
            <div>
              <h4>Thali</h4>
              <div>
                <span>{order.orderedItems.thali.quantity}</span> x{" "}
                <span>{order.orderedItems.thali.price}</span>
              </div>
            </div>
            <div>
              <h4>Softdrink</h4>
              <div>
                <span>{order.orderedItems.softdrink.quantity}</span> x{" "}
                <span>{order.orderedItems.softdrink.price}</span>
              </div>
            </div>
            <div>
              <h4>Chowmein</h4>
              <div>
                <span>{order.orderedItems.chowmein.quantity}</span> x{" "}
                <span>{order.orderedItems.chowmein.price}</span>
              </div>
            </div>

            <div>
              <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
              <div style={{ fontWeight: 800 }}>₹{order.itemsPrice}</div>
            </div>
          </article>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default OrderDetails;
