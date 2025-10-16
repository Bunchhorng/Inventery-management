import React, { useState } from 'react';
import {
  PlusIcon,
  DocumentArrowUpIcon,
  CalendarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ChevronDownIcon,
  TruckIcon,
  CubeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

function StockInPage() {
  const [formData, setFormData] = useState({
    supplier: '',
    product: '',
    quantity: '',
    unitCost: '',
    date: new Date().toISOString().split('T')[0],
    notes: '',
    invoiceFile: null
  });

  const [stockInHistory, setStockInHistory] = useState([
    {
      id: 'SI-001',
      supplier: 'TechStore',
      product: 'Laptop Pro 15',
      quantity: 10,
      unitCost: 1200,
      totalCost: 12000,
      date: '2024-01-15',
      status: 'Completed',
      invoiceNo: 'INV-2024-001'
    },
    {
      id: 'SI-002',
      supplier: 'FurniCo',
      product: 'Office Chair Deluxe',
      quantity: 5,
      unitCost: 150,
      totalCost: 750,
      date: '2024-01-14',
      status: 'Completed',
      invoiceNo: 'INV-2024-002'
    },
    {
      id: 'SI-003',
      supplier: 'GadgetHub',
      product: 'Wireless Mouse',
      quantity: 30,
      unitCost: 25,
      totalCost: 750,
      date: '2024-01-13',
      status: 'Completed',
      invoiceNo: 'INV-2024-003'
    }
  ]);

  const [products] = useState([
    { id: 1, name: 'Laptop Pro 15', sku: 'LP-001', currentStock: 10 },
    { id: 2, name: 'Office Chair Deluxe', sku: 'OC-002', currentStock: 5 },
    { id: 3, name: 'Wireless Mouse', sku: 'WM-003', currentStock: 30 },
    { id: 4, name: 'Running Shoes', sku: 'RS-004', currentStock: 20 },
    { id: 5, name: 'Bluetooth Headphones', sku: 'BH-005', currentStock: 0 }
  ]);

  const [suppliers] = useState([
    { id: 1, name: 'TechStore', contact: 'tech@store.com', phone: '+1-555-0101' },
    { id: 2, name: 'FurniCo', contact: 'sales@furnico.com', phone: '+1-555-0102' },
    { id: 3, name: 'GadgetHub', contact: 'orders@gadgethub.com', phone: '+1-555-0103' },
    { id: 4, name: 'Sportify', contact: 'info@sportify.com', phone: '+1-555-0104' },
    { id: 5, name: 'SoundMax', contact: 'sales@soundmax.com', phone: '+1-555-0105' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');

  const generateStockInId = () => {
    const timestamp = new Date().getTime();
    return `SI-${timestamp}`;
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const stockInRecord = {
      id: generateStockInId(),
      supplier: formData.supplier,
      product: formData.product,
      quantity: parseInt(formData.quantity),
      unitCost: parseFloat(formData.unitCost),
      totalCost: parseInt(formData.quantity) * parseFloat(formData.unitCost),
      date: formData.date,
      status: 'Completed',
      invoiceNo: `INV-${new Date().getFullYear()}-${stockInHistory.length + 1}`
    };

    // Add to history
    setStockInHistory(prev => [stockInRecord, ...prev]);

    // Reset form
    setFormData({
      supplier: '',
      product: '',
      quantity: '',
      unitCost: '',
      date: new Date().toISOString().split('T')[0],
      notes: '',
      invoiceFile: null
    });

    alert('Stock In recorded successfully!');
  };

  const filteredHistory = stockInHistory.filter(record => {
    const matchesSearch = record.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.invoiceNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSupplier = selectedSupplier === 'All' || record.supplier === selectedSupplier;
    const matchesDate = !selectedDate || record.date === selectedDate;
    
    return matchesSearch && matchesSupplier && matchesDate;
  });

  const totalValue = filteredHistory.reduce((sum, record) => sum + record.totalCost, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stock In Management</h1>
        <p className="text-gray-600">Record new stock arrivals and track purchase history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Stock In Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <PlusIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">New Stock In</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Supplier Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Supplier *
                </label>
                <select
                  name="supplier"
                  value={formData.supplier}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select Supplier</option>
                  {suppliers.map(supplier => (
                    <option key={supplier.id} value={supplier.name}>
                      {supplier.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product *
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select Product</option>
                  {products.map(product => (
                    <option key={product.id} value={product.name}>
                      {product.name} (Stock: {product.currentStock})
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter quantity"
                />
              </div>

              {/* Unit Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unit Cost ($) *
                </label>
                <input
                  type="number"
                  name="unitCost"
                  value={formData.unitCost}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="0.00"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                  <CalendarIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Total Cost (Auto-calculated) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Cost
                </label>
                <div className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50">
                  <span className="text-lg font-bold text-green-600">
                    ${(formData.quantity * formData.unitCost).toFixed(2) || '0.00'}
                  </span>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="3"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Additional notes about this stock in..."
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attach Invoice/Delivery Receipt
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-400 transition-colors duration-200">
                <DocumentArrowUpIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-2">Drop your file here or click to browse</p>
                <input
                  type="file"
                  name="invoiceFile"
                  onChange={handleInputChange}
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200"
                >
                  <DocumentArrowUpIcon className="w-4 h-4" />
                  Choose File
                </label>
                {formData.invoiceFile && (
                  <p className="text-sm text-green-600 mt-2">
                    Selected: {formData.invoiceFile.name}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-bold text-lg"
            >
              Record Stock In
            </button>
          </form>
        </div>

        {/* Stock In History */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <ClockIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Stock In History</h2>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Search by product, supplier, invoice..."
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select
                value={selectedSupplier}
                onChange={(e) => setSelectedSupplier(e.target.value)}
                className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="All">All Suppliers</option>
                {suppliers.map(supplier => (
                  <option key={supplier.id} value={supplier.name}>{supplier.name}</option>
                ))}
              </select>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-blue-600 font-medium">Total Records</p>
                <p className="text-2xl font-bold text-blue-700">{filteredHistory.length}</p>
              </div>
              <div>
                <p className="text-sm text-blue-600 font-medium">Total Value</p>
                <p className="text-2xl font-bold text-green-600">${totalValue.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* History Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Supplier</th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Qty</th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredHistory.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="py-3 px-4">
                      <span className="font-mono text-sm text-blue-600 font-medium">{record.id}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900">{record.product}</div>
                      <div className="text-sm text-gray-500">{record.invoiceNo}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <TruckIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{record.supplier}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-gray-900">{record.quantity}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-green-600">${record.totalCost.toFixed(2)}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-gray-600">{record.date}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredHistory.length === 0 && (
            <div className="text-center py-12">
              <CubeIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No stock in records found</p>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StockInPage;