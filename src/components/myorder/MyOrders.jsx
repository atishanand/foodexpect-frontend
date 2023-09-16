import React, { useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../layout/Loader";
import { getMyOrders } from "../../redux/actions/orderAction";
import toast from "react-hot-toast";

function MyOrders() {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    dispatch(getMyOrders());
  }, [dispatch, error]);

  return (
    <section className="table-class">
      {loading === false ? (
        <main>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((i) => (
                  <tr key={i._id}>
                    <td>#{i._id}</td>
                    <td>{i.orderStatus}</td>
                    <td>
                      {i.orderedItems.burger.quantity +
                        i.orderedItems.pizza.quantity +
                        i.orderedItems.milkshake.quantity +
                        i.orderedItems.thali.quantity +
                        i.orderedItems.softdrink.quantity +
                        i.orderedItems.chowmein.quantity}
                    </td>
                    <td>₹{i.totalAmount}</td>
                    <td>{i.paymentMethod}</td>
                    <td>
                      <Link to={`/order/${i._id}`}>
                        <AiOutlineEye />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default MyOrders;
