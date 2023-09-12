import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
  return (
    <>
      <Router>
        <Header isAuthenticated={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmorder" element={<OrderConfirm />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
