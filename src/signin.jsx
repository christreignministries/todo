import { useNavigate, Link } from "react-router-dom";
import "../css/main.css";
import "../css/util.css";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "../node_modules/firebase/auth";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setEmail("");
        setPassword("");
        navigate("./home");
      })
      .catch((error) => {
        alert(error);
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
              <span class="login100-form-title">Member Login</span>

              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  value={email}
                  class="input100"
                  type="text"
                  //   name="email"
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
                data-validate="Password is required"
              >
                <input
                  value={password}
                  class="input100"
                  type="password"
                  //   name="pass"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div class="container-login100-form-btn" onClick={handleSubmit}>
                <button class="login100-form-btn">Login</button>
              </div>

              <div class="text-center p-t-12">
                <span class="txt1">Forgot </span>
                <a class="txt2" href="#">
                  Username / Password
                </a>
              </div>

              <Link to="/signup">
                <div class="text-center p-t-136">
                  <a class="txt2" href="#">
                    Create your Account
                    <i
                      class="fa fa-long-arrow-right m-l-5"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Signin;
