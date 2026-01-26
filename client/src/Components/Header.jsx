import "./Header.css";
import { useNavigate } from "react-router";

function Header() {
  const nav = useNavigate()
  const logout = async () => {
    const req = fetch("http://localhost:8095/api/members/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!req.ok) {
      console.log("Failed to log you out");
    }

    nav('/login')
  };
  return (
    <>
      <div className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLu7NUMFCS7GKcutI4sZPEA1sEpipcLifGng&s"
          alt="logo e antarsise"
        />
        <h1>Antarsia e fese islame</h1>

        <span onClick={logout}>Log Out</span>
      </div>
    </>
  );
}

export default Header;
