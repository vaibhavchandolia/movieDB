import React from "react";
import "./auth.css"

export const Login = () => {
  return (
    <div className="Auth">
              <form className="form" >
        <div className="input-container">
          <label className="label">Username: </label>
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Username"
            // value={username}
            // onChange={this.handleChange}
          />
        </div>
        <div className="input-container">
          <label className="label">Password: </label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            // value={password}
            // onChange={this.handleChange}
          />
          <a href="#" className="link forgotten-password">
            Forgot password?
          </a>
        </div>
        <button type="submit" id="login-btn">
          Login
        </button>
      </form>
        <p className="signup-label">
          Don't have an account?{" "}
          <a href="/signup" className="link">
            Sign up
          </a>
        </p>
      </div>
  )
}
