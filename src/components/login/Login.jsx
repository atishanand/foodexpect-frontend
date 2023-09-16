import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";

function Login() {
  const loginHandler = () => {
    window.open(`${server}/googlelogin`, "_self");
  };

  return (
    <section className="login">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <button onClick={loginHandler}>
          Login with google <FcGoogle />
        </button>
      </motion.div>
    </section>
  );
}

export default Login;
