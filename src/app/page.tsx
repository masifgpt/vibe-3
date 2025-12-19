import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-teal-400">PAIB BHAWANA</h1>
        <div className="space-x-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Hi, I’m <span className="text-teal-400">M Asif</span>
          </h2>
          <p className="text-gray-300 mb-4">
            Student & AI Developer at <b>PAIB BHAWANA</b>
          </p>
          <p className="text-gray-400 mb-6">
            We provide professional AI solutions including automation,
            chatbots, and AI-powered software for businesses worldwide.
          </p>

          <p className="mb-6">
            👨‍🏫 Supervisor: <span className="text-teal-400">Asif Langrah</span>
          </p>

          <button className="bg-teal-500 px-6 py-3 rounded-lg text-black font-semibold">
            Get AI Services
          </button>
        </div>

        <img
          src="/services.png"
          alt="AI Services"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Services */}
      <section className="px-10 py-20 bg-slate-800">
        <h3 className="text-3xl font-bold text-center mb-12 text-teal-400">
          Our AI Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-3">AI Automation</h4>
            <p className="text-gray-400">
              Automate your business processes using intelligent AI systems.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-3">AI Chatbots</h4>
            <p className="text-gray-400">
              Smart chatbots for websites, WhatsApp & customer support.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-3">AI Software</h4>
            <p className="text-gray-400">
              Custom AI-based software tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="text-center py-16">
        <h3 className="text-2xl font-bold mb-4 text-teal-400">
          24/7 Service Available
        </h3>
        <p className="text-gray-400">
          We are always open to help you grow your business with AI.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-center py-6 text-gray-500 text-sm">
        © 2025 PAIB BHAWANA | Developed by M Asif
      </footer>

    </div>
  );
};

export default page;
