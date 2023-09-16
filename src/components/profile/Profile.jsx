import React from "react";
import { motion } from "framer-motion";
// import myself from "../../assets/my-photo.jpg";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import Loader from "../layout/Loader";

function Profile() {
  const option1 = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const option2 = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="profile">
      {loading === false ? (
        <main>
          <motion.img src={user.photo} alt="MySelf" {...option1} />

          <motion.h5 {...option1} transition={{ delay: 0.2 }}>
            {user.name}
          </motion.h5>

          <motion.div {...option1} transition={{ delay: 0.4 }}>
            {user.role === "admin" && (
              <Link to="/admin/dashboard">
                <MdDashboard /> Dashboard
              </Link>
            )}

            <Link to="/myorders">
              <AiOutlineUnorderedList /> My Orders
            </Link>
          </motion.div>

          <motion.button
            {...option2}
            transition={{ delay: 0.6 }}
            onClick={logoutHandler}
          >
            <FiLogOut /> Logout
          </motion.button>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default Profile;
