import { useNavigate } from "react-router-dom";

function ManagerDashboard() {

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


            
            <div className="max-w-6xl mx-auto mt-10 px-4">


                
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg shadow mb-6">

                    <h1 className="text-2xl font-bold">
                        Manager Dashboard
                    </h1>

                    <p>
                        Welcome, {user?.name}! Manage your team efficiently.
                    </p>

                </div>


                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">

                    <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">

                        <div>
                            <p className="text-gray-500">Team Members</p>
                            <h2 className="text-3xl font-bold">20</h2>
                        </div>

                        <span className="text-3xl">👥</span>

                    </div>


                    <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">

                        <div>
                            <p className="text-gray-500">Active Projects</p>
                            <h2 className="text-3xl font-bold">11</h2>
                        </div>

                        <span className="text-3xl">📊</span>

                    </div>


                    <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">

                        <div>
                            <p className="text-gray-500">Pending Approvals</p>
                            <h2 className="text-3xl font-bold">7</h2>
                        </div>

                        <span className="text-3xl">⏳</span>

                    </div>

                </div>


               
                <div className="grid md:grid-cols-2 gap-6 mb-6">

                    
                    <div className="bg-white p-6 rounded-lg shadow">

                        <h2 className="font-semibold mb-4">
                            Recent Activities
                        </h2>

                        <ul className="space-y-2 text-gray-600">

                            <li>• Approved project proposal from Team A</li>
                            <li>• Reviewed performance reports</li>
                            <li>• Scheduled team meeting for next week</li>
                            <li>• Assigned new tasks to team members</li>

                        </ul>

                    </div>


                    
                    <div className="bg-white p-6 rounded-lg shadow">

                        <h2 className="font-semibold mb-4">
                            Manager Information
                        </h2>

                        <p><b>Name:</b> {user?.name}</p>
                        <p><b>Email:</b> {user?.email}</p>

                        <p>
                            <b>Role:</b>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded ml-2">
                                {user?.role}
                            </span>
                        </p>

                    </div>

                </div>


                
                <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6">

                    Manager Access Level: You can manage team members, approve requests, and oversee projects.

                </div>


                
                <div className="flex gap-4">

                    <button
                        onClick={() => navigate("/user")}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        View User Dashboard
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

export default ManagerDashboard;
