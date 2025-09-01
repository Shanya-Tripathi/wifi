"use client";

import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* ✅ Navbar */}
      <nav className="w-full flex justify-center gap-6 py-6 bg-white shadow-md sticky top-0 z-50">
        <Link href="/" className="px-3 font-bold text-gray-800 hover:text-indigo-600">
          Home Page
        </Link>
        <Link href="/student" className="px-3 font-bold text-gray-800 hover:text-indigo-600">
          Student Page
        </Link>
        <Link href="/staff" className="px-3 font-bold text-gray-800 hover:text-indigo-600">
          Staff Page
        </Link>
        <Link href="/admin" className="px-3 font-bold text-gray-800 hover:text-indigo-600">
          Admin Page
        </Link>
      </nav>

      {/* ✅ Hero Section */}
      <section className="text-center max-w-3xl mt-16 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Welcome to <span className="text-indigo-600">Next.js + Tailwind</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Build fast, modern, and responsive web apps with ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/student"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-lg"
          >
            Get Started
          </Link>
          <Link
            href="/staff"
            className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-xl text-lg"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl w-full px-4">
        {[
          {
            title: "⚡ Fast Development",
            desc: "Hot reload and optimized builds make coding smooth.",
          },
          {
            title: "🎨 Modern UI",
            desc: "Tailwind CSS makes styling quick and clean.",
          },
          {
            title: "🚀 SEO Friendly",
            desc: "Next.js ensures performance and scalability.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ✅ Footer */}
      <footer className="mt-20 py-6 w-full text-center border-t text-gray-600 text-sm">
        © {new Date().getFullYear()} My Next.js App. All rights reserved.
      </footer>
    </main>
  );
};

export default Page;
