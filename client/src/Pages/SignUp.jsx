import { useState } from "react";
import { useNavigate } from "react-router"
import "./Login.css";

function SignUp() {
  const nav = useNavigate()
  
  const [formData, setFormData] = useState({
    name: "",
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
      const res = await fetch("http://localhost:8095/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Registration successful");
      nav('/login')
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
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Mosques name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
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
        <span onClick={() => nav('/login')}>Login</span>
      </div>
    </>
  );
}

export default SignUp;
