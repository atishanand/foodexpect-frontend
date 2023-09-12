import React from "react";
import mobile from "../../assets/mobile.png";

function About() {
  return (
    <section className="about">
      <div>
        <h1>Your favourite destination for your delicious food.</h1>
        <p>Order your tasty food and get it immediately.</p>
        <p>
          Hello, everyone!!! I am <strong>Atish Anand</strong>. I have created
          this project <strong>"Food Expect"</strong> web app which is basically
          a food delivery website where user can order food of their choice and
          admin can process their order.
        </p>
      </div>
      <div>
        <img src={mobile} alt="mobile" />
      </div>
    </section>
  );
}

export default About;
