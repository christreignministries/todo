import "../css/main.css";
import "../css/util.css";
import Signin from "./signin";
import Signup from "./Signup";
import Home from "./home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { ProtectedRoute } from "./protectedRoute";
import { getAuth } from "../node_modules/firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
