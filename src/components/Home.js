import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../redux/action";

function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log(users);



  const handleDelete = (id) => {
        dispatch(deleteUser(id))
  }

    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);

  return (
    <div>
      {/* <div className="display-6">Home Route</div> */}
      <section id="table">
        <div className="container-md">
          <table className="table rounded">
            <thead>
              <tr className=" text-light bg-dark">
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {users &&
              users.map((item, index) => (
                <tbody key={item.id}>
                  <tr>
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
                          onClick={handleDelete(item.id)}
                        >
                          Delete
                        </button>
                        <button type="button" class="btn btn-primary">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </section>
    </div>
  );
}

export default Home;
