"use client";

import { useRouter } from "next/navigation";

export default function CTScanCancerResult() {
  const router = useRouter();

  const handleConsultDoctor = () => {
    // Redirect ke halaman konsultasi atau nomor darurat
    window.open("tel:119", "_self"); // Nomor darurat Indonesia
  };

  const handleNewDetection = () => {
    router.push("/ct-scan-detection");
  };

  const handleFormDetection = () => {
    router.push("/detection-form");
  };

  const hospitalRecommendations = [
    {
      name: "RS Dr. Soetomo",
      address: "Jl. Mayjen Prof. Dr. Moestopo No.6-8, Surabaya",
      phone: "(031) 5501001",
      type: "RS Rujukan Nasional",
    },
    {
      name: "RS Universitas Airlangga",
      address: "Jl. Prof. Dr. Moestopo No.47, Surabaya",
      phone: "(031) 5030252",
      type: "RS Pendidikan",
    },
    {
      name: "RS Premier Surabaya",
      address: "Jl. Nginden Intan Timur No.1, Surabaya",
      phone: "(031) 5993211",
      type: "RS Swasta",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
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
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.636 0L3.178 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-red-700 mb-4">Deteksi Menunjukkan Indikasi Kanker Paru-Paru</h2>
              <p className="text-lg text-gray-600 mb-6">Berdasarkan analisis AI terhadap gambar CT-scan yang Anda upload, terdapat indikasi adanya kanker paru-paru.</p>
            </div>
          </div>

          {/* Critical Notice */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.636 0L3.178 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-red-900 mb-2">PENTING - SEGERA KONSULTASI KE DOKTER!</h3>
                <p className="text-red-800 mb-4">Hasil ini hanya bersifat indikasi awal. Diagnosis resmi dan rencana pengobatan HARUS dikonfirmasi oleh dokter spesialis onkologi atau pulmonologi.</p>
                <button onClick={handleConsultDoctor} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center space-x-2">
                  <span>📞</span>
                  <span>HUBUNGI DOKTER SEKARANG</span>
                </button>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Langkah Selanjutnya yang Harus Dilakukan:</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Konsultasi Dokter Spesialis</h4>
                  <p className="text-gray-600">Segera buat janji dengan dokter spesialis onkologi atau pulmonologi untuk pemeriksaan lebih lanjut.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Bawa Hasil CT-Scan Asli</h4>
                  <p className="text-gray-600">Pastikan membawa file CT-scan asli dan hasil lab lainnya saat konsultasi.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Pemeriksaan Tambahan</h4>
                  <p className="text-gray-600">Dokter mungkin akan menyarankan pemeriksaan tambahan seperti biopsi, PET scan, atau tes darah.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Jaga Kondisi Fisik</h4>
                  <p className="text-gray-600">Tetap menjaga pola makan sehat, istirahat cukup, dan hindari rokok serta polusi udara.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Recommendations */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Rumah Sakit yang Direkomendasikan:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hospitalRecommendations.map((hospital, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="mb-3">
                    <h4 className="font-semibold text-lg text-gray-800">{hospital.name}</h4>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{hospital.type}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{hospital.address}</p>
                  <p className="text-blue-600 font-medium text-sm">{hospital.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Information */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-orange-900 mb-4">Nomor Darurat:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚨</span>
                <div>
                  <p className="font-semibold text-orange-900">Ambulans</p>
                  <p className="text-orange-800">119</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <p className="font-semibold text-orange-900">IGD RS Terdekat</p>
                  <p className="text-orange-800">Cari di Google Maps</p>
                </div>
              </div>
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

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">* Hasil deteksi AI ini bersifat bantuan diagnosis dan tidak menggantikan pemeriksaan medis profesional. Selalu konsultasikan dengan dokter untuk diagnosis dan pengobatan yang tepat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
