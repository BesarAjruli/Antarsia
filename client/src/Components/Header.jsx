import { useNavigate } from "react-router";
import "./Header.css";

export function Header() {
  const nav = useNavigate();

  const logout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) {
        console.log("Failed to log you out");
      } else {
        nav("/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="header">
      {/* Logo + titulli */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLu7NUMFCS7GKcutI4sZPEA1sEpipcLifGng&s"
          alt="logo e antarsise"
        />
        <h1>Antarsia e fese islame</h1>

      {/* Butoni Logout */}
      <button className="button" onClick={logout}>Log Out</button>
    </div>
  );
}

export default Header;
