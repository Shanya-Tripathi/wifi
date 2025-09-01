import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Students Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Students</h2>
          <p className="text-3xl font-bold text-blue-600">120</p>
          <p className="text-sm text-gray-500 mt-2">Active students in the system</p>
        </div>

        {/* Staff Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Staff</h2>
          <p className="text-3xl font-bold text-green-600">25</p>
          <p className="text-sm text-gray-500 mt-2">Active staff members</p>
        </div>
      </div>

      {/* Options Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-medium text-gray-700">Manage Students</h3>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-medium text-gray-700">Manage Staff</h3>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <h3 className="font-medium text-gray-700">Settings</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
