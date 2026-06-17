"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleStartDetection = () => {
    router.push("/detection-form");
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/background.png" alt="Medical Background" fill className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <nav className="bg-black bg-opacity-50 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center py-4">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <h1 className="text-2xl font-bold text-white">LUNG AI</h1>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-white hover:text-blue-300 font-medium transition-colors duration-200 relative group">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="text-white hover:text-blue-300 font-medium transition-colors duration-200 relative group">
                  Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="text-white hover:text-blue-300 font-medium transition-colors duration-200 relative group">
                  What We Do
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="text-white hover:text-blue-300 font-medium transition-colors duration-200 relative group">
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-white hover:text-blue-300 focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16 min-h-screen flex items-center">
          <div className="flex items-center justify-start w-full">
            <div className="max-w-xl">
              <div className="bg-white bg-opacity-95 p-10 rounded-3xl shadow-2xl backdrop-blur-sm">
                <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6 leading-tight">LUNG AI</h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Lung AI adalah website untuk deteksi dini kanker paru-paru menggunakan AI berbasis data Kaggle. Hasil deteksi hanya bersifat pendukung, keputusan medis tetap harus dikonsultasikan ke dokter.
                </p>
                <button onClick={handleStartDetection} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg">
                  Mulai Deteksi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black bg-opacity-50 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p>&copy; 2025 Lung AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
