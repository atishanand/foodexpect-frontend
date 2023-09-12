import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <section className="login">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <button>
          Login with google <FcGoogle />
        </button>
      </motion.div>
    </section>
  );
}

export default Login;
