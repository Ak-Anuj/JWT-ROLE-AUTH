import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {

    const res = await API.post("/login",{ email,password });

    localStorage.setItem("token",res.data.token);
    localStorage.setItem("user",JSON.stringify(res.data.user));

    const role = res.data.user.role;

    if(role==="admin") navigate("/admin");
    if(role==="manager") navigate("/manager");
    if(role==="user") navigate("/user");
  };

  return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-4">

  <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

    <h2 className="text-2xl font-bold text-center mb-6">
      Login
    </h2>

    <div className="space-y-4">

      <div>
        <label className="text-sm text-gray-600">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Login
      </button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-medium hover:underline"
        >
          Register here
        </Link>
      </p>

    </div>

  </div>

</div>

  );
}

export default Login;