import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";

function SignUpScreen() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signupHandler } = useAuth();

  return (
    <div className="form-wrapper">
      <form
        className="form"
        onSubmit={(e) => signupHandler(e, user)}
      >
        <h1>Sign Up</h1>
        <div className="input-group input-text">
          <label htmlFor="for-first-name">First Name*</label>
          <input
            className="input"
            type="text"
            name="form-first-name"
            id="form-first-name"
            placeholder="Adarsh"
            required
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </div>
        <div className="input-group input-text">
          <label htmlFor="for-last-name">Last Name*</label>
          <input
            className="input"
            type="text"
            name="form-last-name"
            id="form-last-name"
            placeholder="Balika"
            required
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
        <div className="input-group input-email">
          <label htmlFor="form-email">Email*</label>
          <input
            className="input"
            type="email"
            name="form-email"
            id="form-email"
            placeholder="adarshbalika@gmail.com"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="input-group input-password">
          <label htmlFor="form-password">Password*</label>
          <input
            className="input"
            type="password"
            name="form-password"
            id="form-password"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="input-group input-password">
          <label htmlFor="form-confirmPassword">Confirm Password*</label>
          <input
            className="input"
            type="password"
            name="form-confirmPassword"
            id="form-confirmPassword"
            required
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
          <small>
            {user.password !== "" &&
            user.confirmPassword !== "" &&
            user.password !== user.confirmPassword
              ? "Passwords don't match!"
              : ""}
          </small>
        </div>
        <div className="input-submit">
          <button
            type="submit"
            className={
              user.password !== "" &&
              user.confirmPassword !== "" &&
              user.password === user.confirmPassword
                ? "btn btn-teal btn-auth"
                : "btn btn-disabled btn-teal btn-auth"
            }
            disabled={user.password !== user.confirmPassword}
          >
            Sign Up
          </button>
        </div>
        <span className="auth-link-message">
          Existing user?{" "}
          <Link to="/signin" className="auth-link">
            Login here!
          </Link>
        </span>
      </form>
    </div>
  );
}

export { SignUpScreen };
