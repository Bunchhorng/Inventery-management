import React, { useState } from "react";
import {
  FaUserTie,
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaSave,
  FaStar,
} from "react-icons/fa";

/**
 * Suppliers Management Page
 * CRUD UI — Add, Edit, View, Delete supplier info
 * Ready for backend integration
 */
function Suppliers() {
  // State
  const [suppliers, setSuppliers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    contact: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    rating: 0,
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update supplier
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.company || !form.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    if (editingIndex !== null) {
      const updated = [...suppliers];
      updated[editingIndex] = form;
      setSuppliers(updated);
      setEditingIndex(null);
    } else {
      setSuppliers([...suppliers, form]);
    }

    setForm({
      name: "",
      company: "",
      contact: "",
      email: "",
      phone: "",
      address: "",
      notes: "",
      rating: 0,
    });
  };

  // Edit supplier
  const handleEdit = (index) => {
    setForm(suppliers[index]);
    setEditingIndex(index);
  };

  // Delete supplier
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this supplier?")) {
      setSuppliers(suppliers.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaUserTie className="text-blue-600" /> Supplier Management
          </h1>
          <span className="text-gray-500 text-sm">
            {editingIndex !== null ? "Editing Supplier" : "Add New Supplier"}
          </span>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4 mb-8"
        >
          <div>
            <label className="block font-medium mb-1">Supplier Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter supplier name"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Company *</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Contact Person</label>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Enter contact person"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Phone *</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaPhoneAlt className="text-gray-400 mr-2" />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+855 123456789"
                className="w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Address</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Notes</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Add any important notes"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-2 md:col-span-2">
            <label className="font-medium">Rating:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => setForm({ ...form, rating: star })}
                className={`cursor-pointer text-xl ${
                  form.rating >= star
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-300"
                }`}
              />
            ))}
          </div>

          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            {editingIndex !== null && (
              <button
                type="button"
                onClick={() => {
                  setEditingIndex(null);
                  setForm({
                    name: "",
                    company: "",
                    contact: "",
                    email: "",
                    phone: "",
                    address: "",
                    notes: "",
                    rating: 0,
                  });
                }}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              {editingIndex !== null ? (
                <>
                  <FaSave /> Update
                </>
              ) : (
                <>
                  <FaPlus /> Add Supplier
                </>
              )}
            </button>
          </div>
        </form>

        {/* SUPPLIER TABLE */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          <FaBuilding className="text-blue-600" /> Supplier List
        </h2>

        {suppliers.length === 0 ? (
          <p className="text-gray-500 text-center">No suppliers added yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-blue-100">
                <tr>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Company</th>
                  <th className="p-2">Phone</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Rating</th>
                  <th className="p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((s, i) => (
                  <tr
                    key={i}
                    className="border-t hover:bg-gray-50 transition duration-150"
                  >
                    <td className="p-2">{s.name}</td>
                    <td className="p-2">{s.company}</td>
                    <td className="p-2 text-center">{s.phone}</td>
                    <td className="p-2 text-center">{s.email}</td>
                    <td className="p-2 text-center">
                      {Array.from({ length: s.rating }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 inline" />
                      ))}
                    </td>
                    <td className="p-2 text-center">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleEdit(i)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(i)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Suppliers;
