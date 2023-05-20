import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useTitle("Register");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setSuccess("Registration successful, welcome to Toy Galaxy");
        navigate("/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div>
      <div className="hero my-10">
        <div className="hero-content block">
          <h2 className="text-center text-4xl font-bold mb-5">
            Please Register
          </h2>
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="link">login</span>
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
          {error && (
            <p className="text-center mt-5 text-error text-lg font-semibold">
              {error}
            </p>
          )}
          {success && (
            <p className="text-center mt-5 text-success text-lg font-semibold">
              {success}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
