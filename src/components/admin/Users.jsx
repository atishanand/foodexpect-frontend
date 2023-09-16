import React, { useEffect } from "react";
// import myself from "../../assets/my-photo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUsers } from "../../redux/actions/adminAction";
import Loader from "../layout/Loader";

function Users() {
  const dispatch = useDispatch();

  const { loading, users } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);

  return (
    <section className="table-class">
      {loading === false ? (
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
              {users &&
                users.map((i) => (
                  <tr key={i._id}>
                    <td>#{i._id}</td>
                    <td>{i.name}</td>
                    <td>
                      <img src={i.photo} alt="myself" />
                    </td>
                    <td>{i.role}</td>
                    <td>{i.createdAt.split("T")[0]}</td>
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

export default Users;
