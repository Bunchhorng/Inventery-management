import React from "react";
import {
  FiHome,
  FiBox,
  FiUpload,
  FiDownload,
  FiTruck,
  FiUsers,
  FiDollarSign,
  FiBarChart2,
  FiUser,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-64 h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white flex flex-col p-6 shadow-xl border-r border-slate-700">
      {/* Header with enhanced styling */}
      <div className="mb-10 pt-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <FiBox className="text-white" size={24} />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Inventory
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Navigation with active states */}
      <nav className="flex flex-col gap-2 flex-1">
        <Link
          to="/"
          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
            isActive("/")
              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg"
              : "hover:bg-slate-700/50 hover:border hover:border-slate-600"
          }`}
        >
          <div
            className={`p-2 rounded-lg transition-all duration-300 ${
              isActive("/")
                ? "bg-blue-500 shadow-md"
                : "bg-slate-700 group-hover:bg-blue-500"
            }`}
          >
            <FiHome size={18} className="text-white" />
          </div>
          <span className="font-medium">Dashboard</span>
        </Link>

        <Link
          to="/products"
          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
            isActive("/products")
              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg"
              : "hover:bg-slate-700/50 hover:border hover:border-slate-600"
          }`}
        >
          <div
            className={`p-2 rounded-lg transition-all duration-300 ${
              isActive("/products")
                ? "bg-blue-500 shadow-md"
                : "bg-slate-700 group-hover:bg-blue-500"
            }`}
          >
            <FiBox size={18} className="text-white" />
          </div>
          <span className="font-medium">Product Management</span>
        </Link>

        {/* Stock In */}
        <Link
          to="/stock-in"
          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
            isActive("/stock-in")
              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg"
              : "hover:bg-slate-700/50 hover:border hover:border-slate-600"
          }`}
          >
          <div className={`p-2 rounded-lg transition-all duration-300 ${
              isActive("/stock-in")
                ? "bg-blue-500 shadow-md"
                : "bg-slate-700 group-hover:bg-blue-500"
            }`}
            >
            <FiUpload size={18} className="text-white" />
          </div>
          <span className="font-medium">Stock In</span>
        </Link>

        {/* Stock Out */}
        <Link
          to="/stock-out"
          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
            isActive("/stock-out")
              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg"
              : "hover:bg-slate-700/50 hover:border hover:border-slate-600"
          }`}
          >
          <div className={`p-2 rounded-lg transition-all duration-300 ${
              isActive("/stock-out")
                ? "bg-blue-500 shadow-md"
                : "bg-slate-700 group-hover:bg-blue-500"
            }`}
            >
            <FiDownload size={18} className="text-white" />
          </div>
          <span className="font-medium">Stock Out</span>
        </Link>

        {/* Supplier Management */}
        <Link
          to="/suppliers"
        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
            isActive("/suppliers")
              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg"
              : "hover:bg-slate-700/50 hover:border hover:border-slate-600"
          }`}
          >
          <div className={`p-2 rounded-lg transition-all duration-300 ${
              isActive("/suppliers")
                ? "bg-blue-500 shadow-md"
                : "bg-slate-700 group-hover:bg-blue-500"
            }`}
            >
            <FiTruck size={18} className="text-white" />
          </div>
          <span className="font-medium">Supplier Management</span>
        </Link>

        {/* Customer & CRM */}
        <Link
          to="/customers"
          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
            isActive("/customers")
              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg"
              : "hover:bg-slate-700/50 hover:border hover:border-slate-600"
          }`}
          >
          <div className={`p-2 rounded-lg transition-all duration-300 ${
              isActive("/customers")
                ? "bg-blue-500 shadow-md"
                : "bg-slate-700 group-hover:bg-blue-500"
            }`}
            >
            <FiUsers size={18} className="text-white" />
          </div>
          <span className="font-medium">Customer & CRM</span>
        </Link>

        {/* User Management */}
        <Link
          to="/users"
          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
            isActive("/users")
              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg"
              : "hover:bg-slate-700/50 hover:border hover:border-slate-600"
          }`}
          >
          <div className={`p-2 rounded-lg transition-all duration-300 ${
              isActive("/users")
                ? "bg-blue-500 shadow-md"
                : "bg-slate-700 group-hover:bg-blue-500"
            }`}
            >
            <FiUser size={18} className="text-white" />
          </div>
          <span className="font-medium">User Management</span>
        </Link>
      </nav>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-slate-700">
        <div className="text-center text-slate-400 text-sm">
          <p>Inventory System</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
