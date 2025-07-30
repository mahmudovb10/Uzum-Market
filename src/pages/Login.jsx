import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import regsiter from "./Register.jsx";

function login() {
  const navigate = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/register");
    };
  };
  return (
    <div>
      <div class="flex min-h-screen items-center justify-center bg-base-200">
        <div class="w-full max-w-sm shadow-2xl bg-base-100 p-8 rounded-xl">
          <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
          <form>
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control mb-6">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                class="input input-bordered"
                required
              />
              <label class="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Forgot Password
                </Link>
              </label>
            </div>
            <div class="form-control">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
