import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">

  
            <nav className="flex justify-between items-center px-10 py-5">

                <h2 className="text-2xl font-bold">
                    JWT Auth
                </h2>

                <div className="flex gap-4">

                    <Link
                        to="/login"
                        className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="bg-green-500 px-5 py-2 rounded-lg font-medium hover:bg-green-600 transition"
                    >
                        Register
                    </Link>

                </div>

            </nav>


           
            <div className="flex flex-col items-center justify-center text-center px-4 mt-20">

                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    JWT Authentication System
                </h1>

                <p className="text-lg md:text-xl mb-12">
                    Role-Based Access Control with MERN Stack
                </p>


              
                <div className="bg-white text-black p-10 rounded-xl shadow-xl max-w-2xl w-full">

                    <h3 className="text-2xl font-semibold mb-6 text-center">
                        Features
                    </h3>

                    <ul className="space-y-4 text-left text-lg">

                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✔</span>
                            Secure JWT token-based authentication
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✔</span>
                            Three role levels: User, Manager, and Admin
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✔</span>
                            Protected routes with role-based authorization
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✔</span>
                            Responsive design with Tailwind CSS
                        </li>

                    </ul>

                </div>


              
                <div className="mt-10 flex gap-6">

                    <Link
                        to="/login"
                        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="bg-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                    >
                        Register
                    </Link>

                </div>

            </div>

        </div>

    )

}

export default Home