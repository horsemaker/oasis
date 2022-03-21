import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";

function SignInScreen() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signinHandler } = useAuth();

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={(e) => signinHandler(e, user)}>
        <h1>Sign In</h1>
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
        <div className="input-group input-checkbox">
          <input
            className="oasis-input"
            type="checkbox"
            name="signin"
            id="signin-remember-me"
          />
          <label htmlFor="signin-remember-me">Remember Me</label>
        </div>
        <div className="input-submit">
          <button type="submit" className="btn btn-teal btn-auth">
            Sign In
          </button>
        </div>
        <div className="input-submit">
          <button
            type="button"
            className="btn btn-teal-secondary btn-auth"
            onClick={(e) =>
              signinHandler(e, {
                email: "adarshbalika@gmail.com",
                password: "adarshbalika",
              })
            }
          >
            Sign In as a Guest
          </button>
        </div>
        <span className="auth-link-message">
          New here?{" "}
          <Link to="/signup" className="auth-link">
            Create an account!
          </Link>
        </span>
      </form>
    </div>
  );
}

export { SignInScreen };
