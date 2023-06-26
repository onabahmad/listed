import React, { useContext, useState, useEffect } from "react";
import "../assets/Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const Nevigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  useEffect(() => {
    const hasPageReloaded = localStorage.getItem("hasPageReloaded");
    if (!hasPageReloaded) {
      localStorage.setItem("hasPageReloaded", true);
      window.location.reload();
    }
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Loged in
        const user = userCredential.user;
        console.log(user);
        alert("login succesfully");
        dispatch({ type: "LOGIN", payload: user });
        Nevigate("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
        alert("Please register first or Refresh the page");
      });
  };

  const handleSignupLinkClick = () => {
    setShowLogin(!showLogin);
    setShowSignup(!showSignup);
  };
  //signup
  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("User register succesfully");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
        alert("write a valid email or Refresh the page");
      });
  };
  //  login with google
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        dispatch({ type: "LOGIN", payload: user });
        Nevigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Main_login_container">
      <div className="left">
        <p className="board">Board.</p>
      </div>
      <div className="right">
        <div className="sign_in">
          <div className="wrapper">
            <div className="title">{showLogin ? "Sign In" : "Sign Up"}</div>
            <p className="Sign_in_text">
              {showLogin ? "Sign in to your account" : "Create an account"}
            </p>
            <div className="main_div">
              <div className="social_icons">
                <a href="#" onClick={handleGoogleSignIn}>
                  <span>Google</span>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                  <span>Apple</span>
                </a>
              </div>
              {showLogin && (
                <form action="#" onSubmit={handleLogin}>
                  <div className="input_box">
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input_box">
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="option_div">
                    <div className="forget_div">
                      <a href="#">Forgot password?</a>
                    </div>
                  </div>
                  <div className="input_box button">
                    <input type="submit" value="Login" />
                  </div>
                </form>
              )}
              {showSignup && (
                <form onSubmit={handleSignupFormSubmit}>
                  <div className="input_box">
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input_box">
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input_box button">
                    <input type="submit" value="Sign up" />
                  </div>
                </form>
              )}
            </div>
            <div className="sign_up">
              {showLogin ? (
                <>
                  Don't have an account?
                  <a href="#" onClick={handleSignupLinkClick}>
                    Register Here
                  </a>
                </>
              ) : (
                <>
                  Already have an account?
                  <a href="#" onClick={handleSignupLinkClick}>
                    Sign In Here
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
