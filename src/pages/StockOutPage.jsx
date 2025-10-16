import React, { useState, useEffect } from "react";
import {
  FaMoneyBillWave,
  FaCreditCard,
  FaUniversity,
  FaMobileAlt,
  FaTrash,
  FaPlus,
  FaShoppingCart,
} from "react-icons/fa";

/**
 * StockOutPage (Sales Form)
 * Beautiful React + Tailwind UI with clear structure
 */
function StockOutPage() {
  // Auto-generated invoice ID
  const [invoiceId] = useState(`INV-${Date.now()}`);

  // Form data
  const [form, setForm] = useState({
    customer: "",
    product: "",
    quantity: 1,
    price: "",
    discount: 0,
    payment: "cash",
    date: new Date().toISOString().slice(0, 10),
  });

  // Sales history
  const [sales, setSales] = useState([]);

  // Product list (can later be fetched from backend)
  const [products] = useState([
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 60 },
    { name: "Monitor", price: 300 },
  ]);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add sale record
  const handleAddSale = () => {
    if (!form.customer || !form.product || !form.price) return alert("Please fill all fields!");
    const total = form.quantity * form.price * (1 - form.discount / 100);
    const newSale = { ...form, total };
    setSales([...sales, newSale]);
    setForm({ ...form, product: "", quantity: 1, price: "", discount: 0 });
  };

  // Delete a sale
  const handleDelete = (index) => {
    const updatedSales = sales.filter((_, i) => i !== index);
    setSales(updatedSales);
  };

  // Total calculations
  const subtotal = sales.reduce((sum, s) => sum + s.total, 0);
  const tax = subtotal * 0.1;
  const grandTotal = subtotal + tax;

  // Payment options
  const paymentMethods = [
    { value: "cash", label: "Cash", icon: <FaMoneyBillWave className="text-green-600" /> },
    { value: "card", label: "Credit Card", icon: <FaCreditCard className="text-blue-600" /> },
    { value: "transfer", label: "Bank Transfer", icon: <FaUniversity className="text-indigo-600" /> },
    { value: "digital", label: "Digital Payment", icon: <FaMobileAlt className="text-purple-600" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      {/* SALES FORM */}
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaShoppingCart className="text-blue-600" /> Sales Form
          </h1>
          <p className="text-sm text-gray-500">Invoice ID: {invoiceId}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Customer */}
          <div>
            <label className="block font-medium mb-1">Customer Name</label>
            <input
              type="text"
              name="customer"
              placeholder="Enter customer name"
              value={form.customer}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Product */}
          <div>
            <label className="block font-medium mb-1">Product</label>
            <select
              name="product"
              value={form.product}
              onChange={(e) => {
                const selected = products.find((p) => p.name === e.target.value);
                setForm({
                  ...form,
                  product: e.target.value,
                  price: selected ? selected.price : "",
                });
              }}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Product</option>
              {products.map((p, i) => (
                <option key={i} value={p.name}>
                  {p.name} (${p.price})
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-medium mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={form.quantity}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Discount */}
          <div>
            <label className="block font-medium mb-1">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={form.discount}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block font-medium mb-1">Payment Method</label>
            <div className="flex flex-wrap gap-3">
              {paymentMethods.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setForm({ ...form, payment: m.value })}
                  className={`flex items-center gap-2 border rounded-lg px-3 py-2 text-sm ${
                    form.payment === m.value
                      ? "bg-blue-100 border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {m.icon}
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => window.print()}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
          >
            🖨️ Print / PDF
          </button>
          <button
            onClick={handleAddSale}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <FaPlus className="inline-block mr-1" />
            Add Sale
          </button>
        </div>
      </div>

      {/* SALES HISTORY */}
      <div className="max-w-5xl mx-auto mt-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          📊 Sales History
        </h2>

        {sales.length === 0 ? (
          <p className="text-gray-500 text-center">No sales recorded yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-blue-100">
                <tr>
                  <th className="p-2 text-left">Customer</th>
                  <th className="p-2 text-left">Product</th>
                  <th className="p-2">Qty</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Discount</th>
                  <th className="p-2">Total</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((s, i) => (
                  <tr
                    key={i}
                    className="border-t hover:bg-gray-50 transition duration-150"
                  >
                    <td className="p-2">{s.customer}</td>
                    <td className="p-2">{s.product}</td>
                    <td className="p-2 text-center">{s.quantity}</td>
                    <td className="p-2 text-center">${s.price}</td>
                    <td className="p-2 text-center">{s.discount}%</td>
                    <td className="p-2 text-center font-semibold">
                      ${s.total.toFixed(2)}
                    </td>
                    <td className="p-2 text-center">{s.date}</td>
                    <td className="p-2 text-center">
                      <button
                        onClick={() => handleDelete(i)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className="flex justify-end mt-6">
              <div className="w-64 border-t pt-3 text-gray-700 space-y-1">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StockOutPage;
