import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

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


        
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-lg shadow mb-6">

          <h1 className="text-2xl font-bold">
            Admin Dashboard
          </h1>

          <p>
            Welcome, {user?.name}! You have full system control.
          </p>

        </div>


        
        <div className="grid md:grid-cols-4 gap-6 mb-6">

          <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">

            <div>
              <p className="text-gray-500">Total Users</p>
              <h2 className="text-3xl font-bold">50</h2>
            </div>

            <span className="text-3xl">👤</span>

          </div>


          <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">

            <div>
              <p className="text-gray-500">Total Managers</p>
              <h2 className="text-3xl font-bold">12</h2>
            </div>

            <span className="text-3xl">👥</span>

          </div>


          <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">

            <div>
              <p className="text-gray-500">Total Admins</p>
              <h2 className="text-3xl font-bold">2</h2>
            </div>

            <span className="text-3xl">⚡</span>

          </div>


          <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">

            <div>
              <p className="text-gray-500">System Health</p>
              <h2 className="text-xl font-bold text-green-600">Good</h2>
            </div>

            <span className="text-3xl">✅</span>

          </div>

        </div>


        
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          
          <div className="bg-white p-6 rounded-lg shadow">

            <h2 className="font-semibold mb-4">
              Admin Actions
            </h2>

            <div className="space-y-3">

              <div className="bg-blue-100 p-3 rounded">
                <b>Manage Users</b>
                <p className="text-sm text-gray-600">Add, edit, or remove users</p>
              </div>

              <div className="bg-purple-100 p-3 rounded">
                <b>System Settings</b>
                <p className="text-sm text-gray-600">Configure system preferences</p>
              </div>

              <div className="bg-green-100 p-3 rounded">
                <b>View Logs</b>
                <p className="text-sm text-gray-600">Access system audit logs</p>
              </div>

              <div className="bg-red-100 p-3 rounded">
                <b>Security Settings</b>
                <p className="text-sm text-gray-600">Manage security configurations</p>
              </div>

            </div>

          </div>


          
          <div className="bg-white p-6 rounded-lg shadow">

            <h2 className="font-semibold mb-4">
              Recent Admin Activities
            </h2>

            <ul className="space-y-3 text-gray-600">

              <li>• User account created</li>
              <li>• System backup completed</li>
              <li>• Security patch applied</li>
              <li>• Database optimized</li>

            </ul>

          </div>

        </div>


        {/* Admin Info */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">

          <h2 className="font-semibold mb-4">
            Admin Information
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <p><b>Name:</b> {user?.name}</p>

            <p><b>Email:</b> {user?.email}</p>

            <p>
              <b>Role:</b>
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded ml-2">
                {user?.role}
              </span>
            </p>

          </div>

        </div>


        
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">

          Admin Access Level: You have complete access to all system features, user management, and configurations.

        </div>


        {/* Buttons */}
        <div className="flex gap-4">

          <button
            onClick={() => navigate("/user")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            View User Dashboard
          </button>

          <button
            onClick={() => navigate("/manager")}
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
          >
            View Manager Dashboard
          </button>

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;