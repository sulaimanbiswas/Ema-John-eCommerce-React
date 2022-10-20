import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./Login.css";

const Login = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(() => {
        setSuccess("Logged in successfully");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit} className="form" action="">
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
            />
          </div>
          <p className="form-success">{success}</p>
          <p className="form-error">{error}</p>
          <button className="form-btn" type="submit">
            Login
          </button>
        </form>
        <p className="form-new">
          New to Ema-john?{" "}
          <Link className="form-new-link" to="/signup">
            Create New Account
          </Link>
        </p>
        <hr className="form-hr" />
        <div className="login-with-container">
          <button className="login-with-provider">
            <p>Continue with Google</p>
          </button>
          <button className="login-with-provider">
            <p>Continue with Facebook</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
