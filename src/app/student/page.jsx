"use client";

import React from "react";
import Link from "next/link";

function StudentPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 bg-white shadow-md px-6">
        <h2 className="text-2xl font-bold text-indigo-600">Student Dashboard</h2>
        <div className="flex gap-4">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
            Home
          </Link>
          <Link href="/" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Logout
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mt-10 w-full max-w-4xl">
        <h3 className="text-2xl font-semibold mb-6 text-black">Welcome, Student</h3>

        {/* Simple Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-3 text-black">Profile Form</h4>
            <p className="text-sm text-gray-600">Update your details easily.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-3 text-black">Assignments</h4>
            <p className="text-sm text-gray-600">Submit and check your work.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-3 text-black">Results</h4>
            <p className="text-sm text-gray-600">View your grades securely.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-3 text-black">Password Settings</h4>
            <div className="flex flex-col gap-2">
              <button className="bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700">
                Change Password
              </button>
              <button className="bg-gray-200 text-gray-800 px-3 py-2 rounded-md hover:bg-gray-300">
                Forgot Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
