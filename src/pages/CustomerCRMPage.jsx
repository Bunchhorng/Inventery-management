import React, { useState } from "react";
import {
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClipboardList,
  FaCalendarAlt,
  FaBell,
  FaGift,
  FaCrown,
  FaPlus,
  FaTrash,
  FaEdit,
  FaStar,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
  FaHistory,
  FaComments,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";
import profile1 from "../assets/images/profile1.png"

function CustomerCRMPage() {
  // Customer Profile
  const [customer, setCustomer] = useState({
    name: "Bun Chhorng",
    contact: "+096 653 856 1",
    email: "bunchhorng@gmail.com",
    picture:profile1,
    address: "Phnom Penh, Cambodia",
    preferences: "Electronics, Accessories",
    notes: "Prefers weekend delivery. Interested in new tech products.",
    loyaltyPoints: 1200,
    isVIP: true,
    joinDate: "2024-01-15",
    lastPurchase: "2025-10-05"
  });

  // Order History
  const [orders, setOrders] = useState([
    {
      id: "INV001",
      date: "2025-09-25",
      products: ["Laptop Pro 15", "Wireless Mouse"],
      amount: 1300,
      status: "Completed"
    },
    {
      id: "INV002",
      date: "2025-10-05",
      products: ["Bluetooth Speaker", "Phone Case"],
      amount: 150,
      status: "Completed"
    },
    {
      id: "INV003",
      date: "2025-10-15",
      products: ["Smart Watch"],
      amount: 299,
      status: "Processing"
    }
  ]);

  // CRM Tools
  const [followUps, setFollowUps] = useState([
    { 
      date: "2025-10-20", 
      note: "Call for restock update on new iPhone.", 
      priority: "high",
      completed: false
    },
    { 
      date: "2025-10-25", 
      note: "Follow up on warranty extension.", 
      priority: "medium",
      completed: true
    }
  ]);
  const [newFollowUp, setNewFollowUp] = useState("");

  const [logs, setLogs] = useState([
    { 
      type: "Call", 
      note: "Discussed new arrivals and upcoming promotions.", 
      date: "2025-10-10",
      duration: "15m"
    },
    { 
      type: "Email", 
      note: "Sent product catalog and special offers.", 
      date: "2025-10-08",
      duration: "-"
    }
  ]);
  const [newLog, setNewLog] = useState("");

  // Functions
  const totalSpending = orders.reduce((sum, o) => sum + o.amount, 0);
  const averageOrder = totalSpending / orders.length;
  const mostBought = orders
    .flatMap((o) => o.products)
    .reduce((acc, prod) => {
      acc[prod] = (acc[prod] || 0) + 1;
      return acc;
    }, {});
  const mostBoughtItem =
    Object.keys(mostBought).sort((a, b) => mostBought[b] - mostBought[a])[0] ||
    "N/A";

  const handleAddFollowUp = () => {
    if (newFollowUp.trim() === "") return;
    setFollowUps([...followUps, { 
      date: new Date().toISOString().slice(0, 10), 
      note: newFollowUp,
      priority: "medium",
      completed: false
    }]);
    setNewFollowUp("");
  };

  const handleAddLog = () => {
    if (newLog.trim() === "") return;
    setLogs([...logs, { 
      type: "Note", 
      note: newLog, 
      date: new Date().toISOString().slice(0, 10),
      duration: "-"
    }]);
    setNewLog("");
  };

  const handleDeleteFollowUp = (index) =>
    setFollowUps(followUps.filter((_, i) => i !== index));

  const handleDeleteLog = (index) => setLogs(logs.filter((_, i) => i !== index));

  const toggleFollowUpComplete = (index) => {
    setFollowUps(followUps.map((item, i) => 
      i === index ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2">
              Customer Profile
            </h1>
            <p className="text-gray-600">Manage customer relationships and track interactions</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 lg:mt-0">
            {customer.isVIP && (
              <div className="flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-2xl shadow-lg">
                <FaCrown className="mr-2" />
                <span className="font-semibold">VIP Member</span>
              </div>
            )}
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <FaEdit className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Customer Info & Stats */}
          <div className="xl:col-span-1 space-y-6">
            {/* Customer Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-white/60 p-6 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <img className="rounded-2xl w-[100%] h-[100%] object-cover"  src={customer.picture} alt="" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{customer.name}</h2>
                <div className="flex items-center justify-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <FaStar className="w-4 h-4 text-amber-500 mr-1" />
                    <span className="text-sm">Gold Tier</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <span className="text-sm">Member since {customer.joinDate}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaPhoneAlt className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-900">{customer.contact}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">{customer.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-gray-900">{customer.address}</p>
                  </div>
                </div>
              </div>

              {/* Loyalty Points */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-100">Loyalty Points</span>
                  <FaGift className="w-4 h-4 text-amber-300" />
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold">{customer.loyaltyPoints}</span>
                  <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-sm font-semibold transition-all duration-300">
                    Redeem
                  </button>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div 
                    className="bg-amber-400 h-2 rounded-full transition-all duration-1000" 
                    style={{ width: `${Math.min((customer.loyaltyPoints / 2000) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-3xl shadow-2xl border border-white/60 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FaChartLine className="w-5 h-5 text-blue-600 mr-2" />
                Customer Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <FaShoppingCart className="w-4 h-4 text-green-600" />
                  <div className="flex items-center space-x-3">
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Orders</p>
                      <p className="font-bold text-gray-900">{orders.length}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaDollarSign className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Spending</p>
                      <p className="font-bold text-green-600">${totalSpending}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FaHistory className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Avg. Order</p>
                      <p className="font-bold text-gray-900">${averageOrder.toFixed(0)}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <FaStar className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Favorite Item</p>
                      <p className="font-bold text-gray-900">{mostBoughtItem}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Orders & CRM Tools */}
          <div className="xl:col-span-2 space-y-6">
            {/* Order History */}
            <div className="bg-white rounded-3xl shadow-2xl border border-white/60 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <FaClipboardList className="w-5 h-5 text-blue-600 mr-2" />
                  Order History
                </h2>
                <span className="text-sm text-gray-500">{orders.length} orders</span>
              </div>

              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:border-blue-300 transition-all duration-300 group hover:shadow-md">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        <FaShoppingCart className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{order.id}</h3>
                        <p className="text-sm text-gray-600">{order.products.join(", ")}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-500">{order.date}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            order.status === 'Completed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">${order.amount}</p>
                      <p className="text-xs text-gray-500">{order.products.length} items</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CRM Tools Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Follow Ups */}
              <div className="bg-white rounded-3xl shadow-2xl border border-white/60 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center">
                    <FaBell className="w-5 h-5 text-amber-600 mr-2" />
                    Follow-ups
                  </h3>
                  <span className="text-sm text-gray-500">{followUps.length} reminders</span>
                </div>

                <div className="space-y-3 mb-4">
                  {followUps.map((followUp, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ${
                        followUp.completed 
                          ? 'bg-green-50 border-green-200' 
                          : followUp.priority === 'high'
                          ? 'bg-red-50 border-red-200'
                          : 'bg-amber-50 border-amber-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        <button 
                          onClick={() => toggleFollowUpComplete(index)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            followUp.completed 
                              ? 'bg-green-500 border-green-500 text-white' 
                              : 'border-gray-300 hover:border-green-500'
                          }`}
                        >
                          {followUp.completed && <FaCheckCircle className="w-3 h-3" />}
                        </button>
                        <div className="flex-1">
                          <p className={`text-sm ${followUp.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                            {followUp.note}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-500">{followUp.date}</span>
                            {followUp.priority === 'high' && !followUp.completed && (
                              <FaExclamationTriangle className="w-3 h-3 text-red-500" />
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteFollowUp(index)}
                        className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a new reminder..."
                    value={newFollowUp}
                    onChange={(e) => setNewFollowUp(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    onClick={handleAddFollowUp}
                    className="px-4 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Communication Logs */}
              <div className="bg-white rounded-3xl shadow-2xl border border-white/60 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center">
                    <FaComments className="w-5 h-5 text-green-600 mr-2" />
                    Communication Logs
                  </h3>
                  <span className="text-sm text-gray-500">{logs.length} entries</span>
                </div>

                <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                  {logs.map((log, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          log.type === 'Call' ? 'bg-blue-100 text-blue-600' :
                          log.type === 'Email' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {log.type === 'Call' && <FaPhoneAlt className="w-3 h-3" />}
                          {log.type === 'Email' && <FaEnvelope className="w-3 h-3" />}
                          {log.type === 'Note' && <FaComments className="w-3 h-3" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700">{log.note}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-500">{log.date}</span>
                            <span className="text-xs text-gray-400">{log.type}</span>
                            {log.duration !== '-' && (
                              <span className="text-xs text-gray-400">{log.duration}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteLog(index)}
                        className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add communication note..."
                    value={newLog}
                    onChange={(e) => setNewLog(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    onClick={handleAddLog}
                    className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCRMPage;