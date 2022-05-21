import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../redux/action";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  // console.log(users);

  // const handleDelete = (id) => {
  //       dispatch(deleteUser(id))
  // }

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  //  const handleDelete = (id) => {
  //      console.log(id);
  //      console.log(`user ${id} clicked!`);
  //  }

  const navigate = useNavigate();

  return (
    <div>
      {/* <div className="display-6">Home Route</div> */}
      <section id="user">
        <div className="container-md d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => navigate("/addUser")}
          >
            Add User
          </button>
        </div>
      </section>
      <section id="table">
        <div className="container-md">
          <table className="table  table-hover">
            <thead className="text-white bg-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <button
                          type="button"
                          style={{ marginRight: "5px" }}
                          class="btn btn-danger"
                          // onClick={handleDelete(item.id)}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => navigate(`editUser/${item.id}`)}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Home;
