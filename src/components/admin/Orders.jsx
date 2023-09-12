import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import { Link } from "react-router-dom";

function Orders() {
  const arr = [1, 2, 3, 4];

  return (
    <section className="table-class">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>78900</td>
                <td>Processing</td>
                <td>56</td>
                <td>₹{1234}</td>
                <td>COD</td>
                <td>Atish</td>
                <td>
                  <Link to={`/orders/${"orderid"}`}>
                    <AiOutlineEye />
                  </Link>
                  <button>
                    <GiArmoredBoomerang />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default Orders;
