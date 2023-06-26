import React from "react";
import auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // auth.logout();
    navigate("/signin");
  };
  return (
    <div>
      <a onClick={() => handleLogout()}>Kembali Ke Login</a>
    </div>
  );
}

export default Home;
