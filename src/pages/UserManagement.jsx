import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import profile2 from '../assets/images/profile2.png';

function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sok Pisey",
      profile: profile2,
      email: "pisey@gmail.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2025-10-12 09:34",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Staff",
    status: "Active",
    profile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewUser((prev) => ({
        ...prev,
        profile: URL.createObjectURL(file),
      }));
    }
  };

  const addUser = () => {
    if (!newUser.name || !newUser.email) return; // basic validation
    setUsers((prev) => [
      ...prev,
      {
        ...newUser,
        id: Date.now(),
        lastLogin: "Never",
        profile: newUser.profile || profile2,
      },
    ]);
    setShowModal(false);
    setNewUser({ name: "", email: "", role: "Staff", status: "Active", profile: null });
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
          : u
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Add User
          </button>
        </div>

        {/* User Table */}
        <div className="bg-white rounded-3xl shadow-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">User</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 flex items-center space-x-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
                      <img className="w-full h-full object-cover" src={user.profile} alt="" />
                    </div>
                    <span className="font-medium text-gray-900">{user.name}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{user.email}</td>
                  <td className="px-6 py-4 text-gray-700">{user.role}</td>
                  <td className="px-6 py-4">
                    <span
                      onClick={() => toggleStatus(user.id)}
                      className={`px-3 py-1 rounded-full text-sm font-semibold cursor-pointer ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                 <div className="flex space-x-2 ml-7">
                    <button className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                    <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-600 hover:text-red-800"
                    >
                        <FaTrash />
                    </button>
                    </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl animate-scale-in">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Add New User</h2>
            <div className="space-y-4">
              {/* Profile Image Upload */}
              <div className="flex justify-center mb-4">
                <label className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer">
                  {newUser.profile ? (
                    <img className="w-full h-full object-cover" src={newUser.profile} alt="profile" />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400 text-xl font-bold">
                      +
                    </div>
                  )}
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
              </div>

              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <select
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              >
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
                <option value="Manager">Manager</option>
                <option value="Accountant">Accountant</option>
              </select>
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={addUser}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserManagement;
