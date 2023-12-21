import { Link } from "react-router-dom";
import "../css/main.css";
import "../css/util.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "../node_modules/firebase/auth";
import { useState } from "react";
import { setDoc, doc } from "../node_modules/firebase/firestore";
import firestore from "./firebase";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((data) => {
      setEmail("");
      setPassword("");
      try {
        const cityRef = doc(firestore, "Details", `${email}`);
        setDoc(cityRef, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          userName: userName,
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setUserName("");
        navigate("./http://localhost:5173/");
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <div>
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
              <img src="images/img-01.png" alt="IMG" />
            </div>

            <form class="login100-form validate-form">
              <span class="login100-form-title">Sign Up</span>

              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  value={firstName}
                  class="input100"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  value={lastName}
                  class="input100"
                  type="text"
                  name="lastName"
                  placeholder="LastName"
                  onChange={(event) => setLastName(event.target.value)}
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  value={email}
                  class="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  value={userName}
                  class="input100"
                  type="text"
                  name="userName"
                  placeholder="UserName"
                  onChange={(event) => setUserName(event.target.value)}
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  value={password}
                  class="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div class="container-login100-form-btn" onClick={handleSubmit}>
                <button class="login100-form-btn">Sign Up</button>
              </div>
              <Link to="/">
                <div class="text-center p-t-12">
                  <span class="txt1">Already a user </span>
                  <a class="txt2" href="#">
                    Signin
                  </a>
                </div>
              </Link>

              <div class="text-center p-t-136">
                <a class="txt2" href="#">
                  {/* Create your Account */}
                  <i
                    class="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Signup;
