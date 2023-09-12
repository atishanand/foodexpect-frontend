import React from "react";
import myself from "../../assets/my-photo.jpg";

function Users() {
  const arr = [1, 2, 3, 4];

  return (
    <section className="table-class">
      <main>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>10234</td>
                <td>Atish</td>
                <td>
                  <img src={myself} alt="myself" />
                </td>
                <td>Admin</td>
                <td>{"26-08-2023"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default Users;
