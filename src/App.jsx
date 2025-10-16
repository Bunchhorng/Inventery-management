import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";
import StockInPage from "./pages/StockInPage";
import StockOutPage from "./pages/StockOutPage";
import Suppliers from "./pages/Suppliers";
import CustomerCRMPage from "./pages/CustomerCRMPage";
import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md fixed top-0 left-0 h-full z-20">
          <Sidebar />
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 ml-64 flex flex-col">
          {/* Navbar */}
          <header className="bg-white shadow px-6 py-4 sticky top-0 z-10">
            <Navbar />
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ProductPage/>}/>
              <Route path="/stock-in" element={<StockInPage/>}/>
              <Route path="/stock-out" element={<StockOutPage/>}/>
              <Route path="/suppliers" element={<Suppliers/>}/>
              <Route path="/customers" element={<CustomerCRMPage/>}/>
              <Route path="/users" element={<UserManagement/>}/>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
