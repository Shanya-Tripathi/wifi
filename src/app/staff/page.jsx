"use client";

import React from "react";
import Link from "next/link";

function StaffPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 bg-white shadow-md px-6">
        <h2 className="text-2xl font-bold text-black">Staff Dashboard</h2>
        <div className="flex gap-4">
          <Link href="/" className="text-black hover:text-indigo-600 font-medium">
            Home
          </Link>
          <Link href="/staff" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Logout
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mt-10 w-full max-w-5xl">
        <h3 className="text-2xl font-semibold mb-6 text-black">Welcome, Staff Member</h3>

        {/* Dashboard Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-3 text-black">Manage Students</h4>
            <p className="text-sm text-black">Add, update, or remove student details.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-3 text-black">Class Schedule</h4>
            <p className="text-sm text-black">View and update your teaching timetable.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-3 text-black">Assignments</h4>
            <p className="text-sm text-black">Create, review, and grade assignments.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-3 text-black">Exams & Results</h4>
            <p className="text-sm text-black">Upload exam papers and publish results.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-3 text-black">Notices</h4>
            <p className="text-sm text-black">Post important announcements for students.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-3 text-black">Profile Settings</h4>
            <div className="flex flex-col gap-2">
              <button className="bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700">
                Change Password
              </button>
              <button className="bg-gray-200 text-black px-3 py-2 rounded-md hover:bg-gray-300">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-6 w-full text-center border-t text-black text-sm">
        © {new Date().getFullYear()} Staff Dashboard. All rights reserved.
      </footer>
    </div>
  );
}

export default StaffPage;
