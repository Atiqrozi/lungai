"use client";

import { useRouter } from "next/navigation";

export default function CancerResult() {
  const router = useRouter();

  const handleAdvancedDetection = () => {
    // Redirect to CT-scan detection page
    router.push("/ct-scan-detection");
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">LUNG HEALTH</h1>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            What We Do
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">⚠️</span>
              </div>
              <h1 className="text-4xl font-bold text-red-600 mb-4">Hasil Deteksi</h1>
              <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Terdeteksi Risiko Kanker Paru-Paru</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Berdasarkan data yang Anda masukkan, sistem mendeteksi adanya risiko kanker paru-paru. Namun, hasil ini hanya bersifat pendukung dan <strong>bukan diagnosis medis final</strong>.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ Penting untuk Diketahui</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Segera konsultasikan dengan dokter spesialis</li>
                <li>• Lakukan pemeriksaan medis lebih lanjut</li>
                <li>• Hasil AI ini hanya untuk skrining awal</li>
                <li>• Diagnosis pasti hanya dapat ditentukan oleh dokter</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={handleAdvancedDetection} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl">
                Deteksi Lanjutan (Gambar CT-Scan)
              </button>
              <button onClick={handleBackToHome} className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl">
                Kembali ke Beranda
              </button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Catatan:</strong> Untuk validasi lebih akurat, Anda dapat melakukan deteksi lanjutan menggunakan gambar CT-Scan paru-paru melalui tombol "Deteksi Lanjutan" di atas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
