import React, { useRef, useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../frebase.js";
import { Navigate, useNavigate } from "react-router-dom";

function SignIn() {
  const emailObj = useRef();
  const passObj = useRef();
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailObj.current.value;
    const password = passObj.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        navigate("/");
      })
      .catch((error) => {
        setDisplay(true);
      });
  };

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login"></Navigate>;
  };

  return (
    <div className="div">
      <div className="create-post ">
        <div className="post-container" style={{ backgroundColor: " #ffffff" }}>
          <img src="images/offer.avif" alt="" />
          <form className="formContent" onSubmit={handleSubmit}>
            <h3>
              Login <span>or</span> Signup{" "}
            </h3>

            <input type="email" placeholder="Email address" ref={emailObj} />

            <input type="password" placeholder="Password" ref={passObj} />
            <p>
              By continuing, I agree to the <span>Terms of Use</span> &{" "}
              <span>Privacy Policy</span>{" "}
            </p>

            <button type="submit">CONTINUE</button>

            <p>
              Have trouble logging in? <span>Get help</span>
            </p>

            {display && (
              <p style={{ marginLeft: "80px", color: "red", fontSize: "18px" }}>
                Incorrect PassWord
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
