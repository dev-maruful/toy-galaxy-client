import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero my-10">
        <div className="hero-content block">
          <h2 className="text-center text-4xl font-bold mb-5">Please Login</h2>
          <div className="card w-full shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
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
              <button className="btn btn-circle bg-primary border-none">
                <FaGoogle></FaGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
