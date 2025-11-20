"use client";

import { useRouter } from "next/navigation";

export default function CTScanNormalResult() {
  const router = useRouter();

  const handleNewDetection = () => {
    router.push("/ct-scan-detection");
  };

  const handleFormDetection = () => {
    router.push("/detection-form");
  };

  const healthTips = [
    {
      icon: "🚭",
      title: "Berhenti Merokok",
      description: "Hindari rokok dan asap rokok untuk menjaga kesehatan paru-paru Anda.",
    },
    {
      icon: "🏃‍♂️",
      title: "Olahraga Teratur",
      description: "Lakukan aktivitas fisik minimal 30 menit setiap hari untuk meningkatkan kapasitas paru-paru.",
    },
    {
      icon: "🥗",
      title: "Pola Makan Sehat",
      description: "Konsumsi makanan kaya antioksidan seperti buah dan sayuran hijau.",
    },
    {
      icon: "😷",
      title: "Hindari Polusi",
      description: "Gunakan masker saat berada di area berpolusi tinggi atau berdebu.",
    },
    {
      icon: "💧",
      title: "Minum Air Putih",
      description: "Konsumsi air putih minimal 8 gelas per hari untuk menjaga hidrasi paru-paru.",
    },
    {
      icon: "🌬️",
      title: "Latihan Pernapasan",
      description: "Lakukan latihan pernapasan dalam untuk meningkatkan fungsi paru-paru.",
    },
  ];

  const preventiveMeasures = [
    "Pemeriksaan kesehatan rutin setiap 6 bulan - 1 tahun",
    "Vaksinasi influenza dan pneumonia sesuai anjuran dokter",
    "Menjaga kebersihan tangan dan lingkungan",
    "Menghindari paparan asbes dan bahan kimia berbahaya",
    "Menggunakan APD (Alat Pelindung Diri) di lingkungan kerja berisiko",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <div onClick={() => router.push("/")} className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <h1 className="text-2xl font-bold text-blue-800">LUNG AI</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
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

            {/* Home Button */}
            <div className="flex items-center space-x-4">
              <button onClick={() => router.push("/")} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                <span>🏠</span>
                <span className="hidden sm:inline">Beranda</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Result Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-green-700 mb-4">Hasil CT-Scan: Normal</h2>
              <p className="text-lg text-gray-600 mb-6">Selamat! Berdasarkan analisis AI terhadap gambar CT-scan Anda, tidak ditemukan indikasi kanker paru-paru.</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
                <p className="text-green-800 font-medium">✅ Paru-paru Anda dalam kondisi baik</p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Tetap Jaga Kesehatan Paru-Paru Anda</h3>
                <p className="text-blue-800">Meskipun hasil menunjukkan normal, tetap penting untuk menjaga kesehatan paru-paru dan melakukan pemeriksaan rutin. Konsultasikan dengan dokter jika Anda mengalami gejala tidak biasa.</p>
              </div>
            </div>
          </div>

          {/* Health Tips */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tips Menjaga Kesehatan Paru-Paru</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{tip.icon}</div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">{tip.title}</h4>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preventive Measures */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Langkah Pencegahan:</h3>
            <div className="space-y-4">
              {preventiveMeasures.map((measure, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{index + 1}</div>
                  <p className="text-gray-700 pt-1">{measure}</p>
                </div>
              ))}
            </div>
          </div>

          {/* When to Consult Doctor */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Segera Konsultasi Dokter Jika Mengalami:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-yellow-800">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Batuk yang tidak sembuh &gt; 3 minggu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Batuk berdarah</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Sesak napas yang memburuk</span>
                </li>
              </ul>
              <ul className="space-y-2 text-yellow-800">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Nyeri dada yang persisten</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Penurunan berat badan drastis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Kelelahan berlebihan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Deteksi Lainnya:</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleNewDetection} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2">
                <span>🔄</span>
                <span>Deteksi CT-Scan Lagi</span>
              </button>
              <button onClick={handleFormDetection} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2">
                <span>📋</span>
                <span>Deteksi dengan Form</span>
              </button>
              <button onClick={() => router.push("/")} className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2">
                <span>🏠</span>
                <span>Kembali ke Beranda</span>
              </button>
            </div>
          </div>

          {/* Reminder */}
          <div className="mt-8 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-6 text-center">
            <h4 className="font-bold text-gray-800 mb-2">🎯 Ingat: Pencegahan Lebih Baik dari Pengobatan</h4>
            <p className="text-gray-700">Jadwalkan pemeriksaan kesehatan rutin dan terapkan gaya hidup sehat untuk menjaga paru-paru Anda tetap sehat.</p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">* Hasil deteksi AI ini bersifat bantuan dan tidak menggantikan pemeriksaan medis profesional. Selalu konsultasikan dengan dokter untuk pemeriksaan dan saran kesehatan yang tepat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
