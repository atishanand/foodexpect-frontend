import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userAction";
import toast, { Toaster } from "react-hot-toast";

import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile.jsx";
import Shipping from "./components/cart/Shipping";
import OrderConfirm from "./components/cart/OrderConfirm";
import PaymentSuccess from "./components/cart/PaymentSuccess.jsx";
import MyOrders from "./components/myorder/MyOrders";
import OrderDetails from "./components/myorder/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import NotFound from "./components/layout/NotFound";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/about.scss";
import "./styles/services.scss";
import "./styles/footer.scss";
import "./styles/cart.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/shipping.scss";
import "./styles/orderConfirm.scss";
import "./styles/paymentSuccess.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";

function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);

  return (
    <>
      <Router>
        <Header isAuthenticated={isAuthenticated} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />

          <Route
            path="/login"
            element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
                <Login />
              </ProtectedRoute>
            }
          />

          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect={"/login"}
              />
            }
          >
            <Route path="/me" element={<Profile />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/confirmorder" element={<OrderConfirm />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/order/:id" element={<OrderDetails />} />
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === "admin"}
                adminRoute={true}
                redirect={"/me"}
              />
            }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/orders" element={<Orders />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
