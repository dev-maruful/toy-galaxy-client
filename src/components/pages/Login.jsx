import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { googleLogin, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        form.reset();
        setSuccess("Login successful!");
      })
      .catch((err) => setError(err.code));
  };

  return (
    <div>
      <div className="hero my-10">
        <div className="hero-content block">
          <h2 className="text-center text-4xl font-bold mb-5">Please Login</h2>
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                />
                <label className="label">
                  <p className="text-sm">
                    new on Toy Galaxy?{" "}
                    <Link to="/register">
                      <span className="link">register</span>
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-1 text-sm">or login with</p>
            <div className="text-center mb-3">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-circle bg-primary border-none"
              >
                <FaGoogle></FaGoogle>
              </button>
            </div>
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

export default Login;
