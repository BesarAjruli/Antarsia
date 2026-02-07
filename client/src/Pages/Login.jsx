import { useState } from "react";
import { useNavigate } from "react-router"
import "./Login.css";

function Login() {
  const nav = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }
      
      nav('/')
    } catch (err) {
      console.error("Signup error:", err);
      alert("Server error");
    }
  };

  return (
    <>
      <div className="login">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLu7NUMFCS7GKcutI4sZPEA1sEpipcLifGng&s"
          alt="logo e antarsise"
        />
        <form method="post" onSubmit={submit}>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <span onClick={() => nav('/signup')}>Sign Up</span>
      </div>
    </>
  );
}

export default Login;
