import { Routes, Route } from "react-router-dom";
import "./globals.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <div className="font-jakarta">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
