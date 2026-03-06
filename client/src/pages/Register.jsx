import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Register() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState("user")

    const register = async () => {

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        await API.post("/register", {
            name,
            email,
            password,
            role
        })

        navigate("/login")

    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600 px-4">

            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Register
                </h2>

                <div className="space-y-4">

                    <div>
                        <label className="text-sm text-gray-600">Full Name</label>
                        <input
                            placeholder="Enter your name"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Email Address</label>
                        <input
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Role</label>
                        <select
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="manager">Manager</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button
                        className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                        onClick={register}
                    >
                        Register
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-green-600 font-medium hover:underline"
                        >
                            Login here
                        </Link>
                    </p>

                </div>

            </div>

        </div>

    )

}

export default Register