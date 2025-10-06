import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate()

    const users = [
    { name: 'Bushra', email: 'syedabush2022@gmail.com', password: '12345!' },
    { name: 'Dua', email: 'duaezainab123@gmail.com', password: '54321' },
    { name: 'Huda', email: 'noorhuda@gmail.com', password: '12345' },
    { name: 'Tooba', email: 'toobareej123@gmail.com', password: '9876' },
    { name: 'Sidra', email: 'sidramzan123@gmail.com', password: '6789' },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name,email,password} = formData;


    if(!name||!email||!password){
        alert("All Fields are mandatory");
    }

     const nameonly = /^[A-Za-z ]+$/;
    if (!nameonly.test(name)){
      alert(`Name must contain only alphabets`);
      return;
    }

    const emailonly = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailonly.test(email)){
      alert(`Please enter a valid email address`);
      return;
    }

    const user = users.find((u)=> u.email===email && u.password===password);

    if (user) {
      alert(`Login successful! Welcome, ${user.name}`);
      localStorage.setItem('loggedInUserName', user.name);

      navigate("/Discover");
      
    } else {
      alert('Login Failed! Incorrect email or password.');
    }

    setFormData({name:"",email:"",password:""});
  };
  return (
    <div className='bg-[#4358e1]'>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit} id = "loginForm">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              required
              />

            <input
              type="email"
              id='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
              />

            <input
              type="password"
              id='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              required
              />
              <button type="submit">Login</button>

        </form>

    </div>
  );

};

export default Login;
