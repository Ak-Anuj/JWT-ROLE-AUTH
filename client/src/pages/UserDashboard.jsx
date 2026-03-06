import { useNavigate } from "react-router-dom";

function UserDashboard() {

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))

    const logout = () => {

        localStorage.clear()
        navigate("/login")

    }

    return (

        <div className="min-h-screen bg-gray-100">

          
            <div className="bg-blue-600 text-white flex justify-between items-center px-10 py-4">

                <h2 className="font-bold text-xl">JWT Auth</h2>

                <div className="flex items-center gap-4">

                    <span>
                        Welcome, {user?.name} ({user?.role})
                    </span>

                    <button
                        onClick={logout}
                        className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>

                </div>

            </div>


           
            <div className="max-w-5xl mx-auto mt-10 px-4">

               
                <div className="bg-white p-6 rounded-lg shadow mb-6">

                    <h1 className="text-2xl font-bold">
                        User Dashboard
                    </h1>

                    <p className="text-gray-500">
                        Welcome, {user?.name}!
                    </p>

                </div>


               
                <div className="grid md:grid-cols-2 gap-6 mb-6">

                    <div className="bg-blue-500 text-white p-6 rounded-lg shadow flex justify-between items-center">

                        <div>
                            <p>My Tasks</p>
                            <h2 className="text-3xl font-bold">5</h2>
                        </div>

                        <span className="text-3xl">📄</span>

                    </div>

                    <div className="bg-green-500 text-white p-6 rounded-lg shadow flex justify-between items-center">

                        <div>
                            <p>Notifications</p>
                            <h2 className="text-3xl font-bold">3</h2>
                        </div>

                        <span className="text-3xl">🔔</span>

                    </div>

                </div>


               
                <div className="bg-white p-6 rounded-lg shadow mb-6">

                    <h2 className="text-xl font-semibold mb-4">
                        Your Information
                    </h2>

                    <div className="space-y-3">

                        <p><b>Name:</b> {user?.name}</p>

                        <p><b>Email:</b> {user?.email}</p>

                        <p>
                            <b>Role:</b>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded ml-2">
                                {user?.role}
                            </span>
                        </p>

                    </div>

                </div>


               
                <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 mb-6">

                    <p>
                        User Access Level: You have basic access to view your profile and tasks.
                    </p>

                </div>


               
                <div className="flex gap-4">

                    <button
                        onClick={() => navigate("/manager")}
                        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
                    >
                        Go to Manager Dashboard
                    </button>

                    <button
                        onClick={() => navigate("/admin")}
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                    >
                        Go to Admin Dashboard
                    </button>

                </div>

            </div>

        </div>

    )

}

export default UserDashboard