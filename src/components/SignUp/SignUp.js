import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./Signup.css";

const SignUp = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Password Doesn't Match");
      return;
    }

    createUser(email, password)
      .then(() => {
        setSuccess("User created successfully");
        form.reset();
      })
      .catch((error) => setError(error.message));
  };

  const passwordHandle = (event) => {
    const password = event.target.value;

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please give at least a uppercase character");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError("Please give at least a lowercase character");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please give at least a special character");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Please give at least a number");
      return;
    } else if (!/(?=.{8})/.test(password)) {
      setError("Please give at least 8 character");
      return;
    } else {
      setError("");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Sign Up</h2>
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
              onChange={passwordHandle}
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              placeholder="Confirm Password"
            />
          </div>
          <p className="form-success">{success}</p>
          <p className="form-error">{error}</p>
          <button className="form-btn" type="submit">
            Sign Up
          </button>
        </form>
        <p className="form-new">
          Already have an account?{" "}
          <Link className="form-new-link" to="/login">
            Login
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

export default SignUp;
