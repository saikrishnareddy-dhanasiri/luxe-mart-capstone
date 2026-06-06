import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login Successful!");
      navigate('/');
    }
  };

  return (
    <div className="pt-48 pb-20 px-10 min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-bold uppercase tracking-[0.4em] mb-12 text-center">Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest block mb-3">Email Address</label>
            <input 
              type="email" 
              className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-gray-200'} py-3 focus:outline-none focus:border-black transition text-sm font-light`}
              placeholder="email@example.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <p className="text-[9px] text-red-500 mt-2 uppercase tracking-tighter">{errors.email}</p>}
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest block mb-3">Password</label>
            <input 
              type="password" 
              className={`w-full border-b ${errors.password ? 'border-red-500' : 'border-gray-200'} py-3 focus:outline-none focus:border-black transition text-sm font-light`}
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            {errors.password && <p className="text-[9px] text-red-500 mt-2 uppercase tracking-tighter">{errors.password}</p>}
          </div>

          <button className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition shadow-lg mt-4">
            Sign In
          </button>
        </form>

        <div className="mt-12 text-center border-t border-gray-100 pt-8">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">Don't have an account?</p>
          <button className="mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;