import React from "react";

function OrderConfirm() {
  return (
    <section className="order-confirm">
      <main>
        <h1>Confirm Order</h1>
        <form>
          <div>
            <label>Cash On Delivery</label>
            <input type="radio" name="payment" id="" />
          </div>
          <div>
            <label>Pay Online</label>
            <input type="radio" name="payment" id="" />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </main>
    </section>
  );
}

export default OrderConfirm;
