import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    navigate("/dashboard");
  }
  return (
    <div className="container py-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={submit} className="col-md-6 mx-auto">
        <div className="mb-3">
          <input type="email" placeholder="Email" className="form-control" required />
        </div>
        <div className="mb-3">
          <input type="password" placeholder="Password" className="form-control" required />
        </div>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
