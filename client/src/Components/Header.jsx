import { button } from "../Components/ui/button"; 
import { LogOut } from "lucide-react";           
import { useNavigate } from "react-router";
import "./Header.css";

export function Header() {
  const nav = useNavigate();

  const logout = async () => {
    try {
      const res = await fetch("/api/members/logout", {
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
    <div className="header flex items-center justify-between p-4 bg-gray-100">
      {/* Logo + titulli */}
      <div className="flex items-center gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLu7NUMFCS7GKcutI4sZPEA1sEpipcLifGng&s"
          alt="logo e antarsise"
          className="h-12 w-12 rounded"
        />
        <h1 className="text-xl font-bold">Antarsia e fese islame</h1>
      </div>

      {/* Butoni Logout */}
      <button
        variant="destructive"  
        size="md"
        onClick={logout}
        style={{ backgroundColor: "green", color: "white", display: "flex", alignItems: "center", gap: "5px" }}
      >
        <LogOut className="h-5 w-5" />
        Log Out
      </button>
    </div>
  );
}

export default Header;
