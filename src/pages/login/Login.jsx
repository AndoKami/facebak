import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { api } from "./provider/api";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [username, setUsername] = useState();
  const navigate = useNavigate()

  let data = {
    "email" :   email,
    "password": password,
    "confirmPassword": confirmPassword,
    "username": username
  }

const login = async () => {
  try {
    const response = await api.post('/users', data);
    console.log(response);
    navigate("/")
  } catch (error) {
      console.log("ERROR: ", error.response.data.message);
  }
}

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FaceBook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <div className="bottom">
              <form className="bottomBox" onSubmit={() => login(data)}>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="loginInput"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="loginInput"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                 <input
                  type="password"
                  placeholder="ConfirmPassword"
                  id="password"
                  className="loginInput"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                 <input
                  type="text"
                  placeholder="Username"
                  id="password"
                  className="loginInput"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <button type="submit" className="loginButton" onClick={() => login}>
                  Sign In
                </button>

                <Link to="/register">
                  <button className="loginRegisterButton">
                    Create a New Account
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
