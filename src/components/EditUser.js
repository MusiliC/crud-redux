import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, oneUser, updateUser } from "../redux/action";
import { useNavigate, useParams } from "react-router-dom";

export const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.users)
  console.log(user);
  const navigate = useNavigate();
  let {id} = useParams();

  const [error, setError] = useState("");

  const { name, email, contact, address } = state;

  useEffect(() => {
    dispatch(oneUser(id))
  },[])

  useEffect(() => {
    if(user) {
        setState({...user})
    }
    
  },[])

  const handleInputChange = (e) => {
    setState((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("Please input all the fields!");
    } else {
      dispatch(updateUser(state, id));
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <section id="addUser">
        <div className="container-lg">
          <div className="text-center">
            <h2>Edit User</h2>
            {error && <h2 className="lead text-danger">{error}</h2>}
          </div>
          <div className="row justify-content-center my-3">
            <div className="col-lg-5">
              <form>
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name || ""}
                  name="name"
                  onChange={handleInputChange}
                />
                <label htmlFor="name" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={email || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="name" className="form-label">
                  Contact:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={contact || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="name" className="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={address || ""}
                  onChange={handleInputChange}
                />
                <div className="my-4 text-center">
                  <div className="btn btn-primary " onClick={handleSubmit}>
                    Update
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
