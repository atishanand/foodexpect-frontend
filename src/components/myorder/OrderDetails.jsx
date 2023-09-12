import React from "react";

function OrderDetails() {
  return (
    <section className="order-detaials">
      <main>
        <h1>Order Details</h1>

        <div>
          <h2>Shipping</h2>
          <p>
            <b>Address</b>
            {"asfdj;ioaj"}
          </p>
        </div>
        <hr />

        <div>
          <h2>Contact</h2>
          <p>
            <b>Name</b>
            {"Atish"}
          </p>
          <p>
            <b>Phone No.</b>
            {"0123456789"}
          </p>
        </div>
        <hr />

        <div>
          <h2>Status</h2>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"26-08-2023"}
          </p>
          <p>
            <b>Delivered At</b>
            {"28-08-2023"}
          </p>
        </div>
        <hr />

        <div>
          <h2>Payment</h2>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
        </div>
        <hr />

        <div>
          <h2>Amount</h2>
          <p>
            <b>Items Total</b>₹{1030}
          </p>
          <p>
            <b>Shipping Charges</b>₹{200}
          </p>
          <p>
            <b>Tax</b>₹{100}
          </p>
          <p>
            <b>Total</b>₹{1030 + 200 + 100}
          </p>
        </div>
        <hr />

        <article>
          <h1>Ordered Item</h1>

          <div>
            <h4>Burger</h4>
            <div>
              <span>{6}</span> x <span>{150}</span>
            </div>
          </div>
          <div>
            <h4>Pizza</h4>
            <div>
              <span>{4}</span> x <span>{400}</span>
            </div>
          </div>
          <div>
            <h4>Milkshake</h4>
            <div>
              <span>{8}</span> x <span>{70}</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>₹{3060}</div>
          </div>
        </article>
      </main>
    </section>
  );
}

export default OrderDetails;
