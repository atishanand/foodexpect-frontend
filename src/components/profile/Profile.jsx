import React from "react";
import { motion } from "framer-motion";
import myself from "../../assets/my-photo.jpg";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";

function Profile() {
  const option1 = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const option2 = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  return (
    <section className="profile">
      <main>
        <motion.img src={myself} alt="MySelf" {...option1} />

        <motion.h5 {...option1} transition={{ delay: 0.2 }}>
          Atish Anand
        </motion.h5>

        <motion.div {...option1} transition={{ delay: 0.4 }}>
          <Link to="/admin/dashboard">
            <MdDashboard /> Dashboard
          </Link>
          <Link to="/myorders">
            {" "}
            <AiOutlineUnorderedList /> My Orders
          </Link>
        </motion.div>

        <motion.button {...option2} transition={{ delay: 0.6 }}>
          <FiLogOut /> Logout
        </motion.button>
      </main>
    </section>
  );
}

export default Profile;
