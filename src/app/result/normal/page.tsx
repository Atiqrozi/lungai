"use client";

import { useRouter } from "next/navigation";

export default function NormalResult() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  const handleNewDetection = () => {
    router.push("/detection-form");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
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
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">✅</span>
              </div>
              <h1 className="text-4xl font-bold text-green-600 mb-4">Selamat!</h1>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Hasil Deteksi: Normal</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Berdasarkan data yang Anda masukkan, sistem tidak mendeteksi adanya risiko kanker paru-paru. Anda memiliki <strong>paru-paru yang normal</strong> berdasarkan parameter yang dianalisis.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">🎉 Paru-Paru Anda Sehat!</h3>
              <p className="text-gray-700 mb-4">Hasil ini menunjukkan bahwa berdasarkan faktor risiko yang dianalisis, Anda memiliki kondisi paru-paru yang sehat.</p>
              <div className="text-left text-gray-700 space-y-2">
                <h4 className="font-semibold text-blue-800">Tips Menjaga Kesehatan Paru-Paru:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Hindari merokok dan asap rokok</li>
                  <li>Olahraga teratur untuk meningkatkan kapasitas paru</li>
                  <li>Konsumsi makanan bergizi dan antioksidan</li>
                  <li>Hindari polusi udara sebisa mungkin</li>
                  <li>Lakukan pemeriksaan kesehatan rutin</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800 text-sm">
                <strong>Catatan:</strong> Hasil ini hanya berdasarkan data yang Anda masukkan dan bersifat skrining awal. Untuk pemeriksaan kesehatan yang komprehensif, tetap konsultasikan dengan dokter secara berkala.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={handleBackToHome} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl">
                Kembali ke Beranda
              </button>
              <button onClick={handleNewDetection} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl">
                Deteksi Ulang
              </button>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Terima kasih</strong> telah menggunakan LungAI untuk skrining kesehatan paru-paru Anda. Tetap jaga kesehatan dan lakukan pemeriksaan berkala!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
