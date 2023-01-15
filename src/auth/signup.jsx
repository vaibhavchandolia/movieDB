import React from "react";
import "./auth.css"


export const SignUp = () => {
    return (
        //     <form className="form">
        //     <label htmlFor="fname">First Name</label>
        //     <input type="text" placeholder="First name" />
        //     <label htmlFor="sname">Last Name</label>
        //     <input type="text" placeholder="Last name" />
        //     <label htmlFor="email">Email Address</label>
        //     <input type="text" placeholder="Email Address" />
        //     <label htmlFor="password">Password</label>
        //     <input type="text" placeholder="Password" />
        //   </form>
        <div className="Auth">
            <form className="form" >
                <div className="input-container">
                <label htmlFor="fname" className="label">First Name</label>
                <input type="text" className="input" placeholder="First name" />
                </div>
                <div className="input-container">
                <label htmlFor="sname" className="label">Last Name</label>
                <input type="text" className="input" placeholder="Last name" />
                </div>
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
                </div>
                <button type="submit" id="login-btn">
                    Sign UP
                </button>
            </form>
            <p className="signup-label">
                Already have an account?{" "}
                <a href="/login" className="link">
                    Login
                </a>
            </p>
        </div>
    )
}
