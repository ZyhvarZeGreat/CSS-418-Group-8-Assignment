import { Routes, Route } from "react-router-dom";
import "./globals.css";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <>
      <div className="font-jakarta">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
