import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer">
      <div>
        <h3>Copyright ©️ Food Expect. All rights reserved.</h3>
      </div>
      <div>
        <h4>GET IN TOUCH</h4>
        <a href="https://linkedin.com/in/atish-anand">
          <FaLinkedin />
        </a>
        <a href="https://github.com/atishanand">
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Footer;
