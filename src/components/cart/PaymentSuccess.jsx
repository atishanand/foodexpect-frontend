import React from "react";
import tickmark from "../../assets/tickmark.png";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <section className="payment-success">
      <main>
        <img src={tickmark} alt="tickmark" />
        <h1>Congratulation, your order confirmed!!!</h1>
        <p>Thanks for trusting us. You can check out order status.</p>
        <Link to="/myorders">Check Status</Link>
      </main>
    </section>
  );
}

export default PaymentSuccess;
