import React from 'react';
import { 
  UsersIcon, 
  TruckIcon, 
  ShoppingCartIcon, 
  CreditCardIcon,
  CalendarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';

function Dashboard() {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your inventory today.</p>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">1,240</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 font-medium">+12%</span>
                <span className="text-sm text-gray-500">from last month</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <UsersIcon className="w-6 h-6 text-white"/>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Suppliers</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">48</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 font-medium">+5%</span>
                <span className="text-sm text-gray-500">from last month</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <TruckIcon className="w-6 h-6 text-white"/>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">$45.2K</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 font-medium">+18%</span>
                <span className="text-sm text-gray-500">from last month</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <ShoppingCartIcon className="w-6 h-6 text-white"/>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Purchases</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">$28.7K</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 font-medium">+8%</span>
                <span className="text-sm text-gray-500">from last month</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <CreditCardIcon className="w-6 h-6 text-white"/>
            </div>
          </div>
        </div>
      </div>

      {/* Time Filter Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <CalendarIcon className="w-6 h-6 text-blue-700"/>
            </div>
            <div>
              <p className="text-white text-opacity-80">Today's Revenue</p>
              <p className="text-2xl font-bold mt-1">$2,450</p>
              <p className="text-sm text-white text-opacity-90 mt-1">+15 orders completed</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <ChartBarIcon className="w-6 h-6 text-green-700"/>
            </div>
            <div>
              <p className="text-white text-opacity-80">This Month</p>
              <p className="text-2xl font-bold mt-1">$28,500</p>
              <p className="text-sm text-white text-opacity-90 mt-1">+245 orders completed</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <CalendarIcon className="w-6 h-6 text-sky-700"/>
            </div>
            <div>
              <p className="text-white text-opacity-80">This Year</p>
              <p className="text-2xl font-bold mt-1">$342,800</p>
              <p className="text-sm text-white text-opacity-90 mt-1">+2,890 orders completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Factory Product Stock Alert */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TruckIcon className="w-5 h-5"/> 
              Factory Product Stock Alert
              <ExclamationTriangleIcon className="w-5 h-5 text-yellow-300 ml-2" />
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">SKU</th>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">Laptop Pro 15</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">LP-001</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-red-500">5</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
                      Low Stock
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">Office Chair Deluxe</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">OC-002</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-yellow-500">3</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                      Critical
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">Wireless Mouse</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">WM-003</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-red-500">2</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
                      Low Stock
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Stock Alert */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 px-6 py-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShoppingCartIcon className="w-5 h-5"/> 
              Stock Alert
              <ExclamationTriangleIcon className="w-5 h-5 text-yellow-300 ml-2" />
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Item</th>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">Bluetooth Headphones</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">BH-005</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-red-500">0</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
                      Out of Stock
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">Running Shoes</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">RS-004</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-yellow-500">1</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                      Critical
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">Gaming Keyboard</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">GK-007</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-red-500">4</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
                      Low Stock
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;