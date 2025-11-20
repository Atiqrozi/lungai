"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

export default function CTScanDetection() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError("");

    if (file) {
      // Validasi tipe file
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        setError("Format file tidak didukung. Silakan pilih file JPG, JPEG, atau PNG.");
        return;
      }

      // Validasi ukuran file (maksimal 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        setError("Ukuran file terlalu besar. Maksimal 10MB.");
        return;
      }

      setSelectedFile(file);

      // Buat preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Silakan pilih file gambar CT-scan terlebih dahulu.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post("http://localhost:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Redirect to appropriate result page
      if (response.data.prediction === "Kanker Paru-paru" || response.data.prediction === "Cancer") {
        router.push("/result/ct-scan/cancer");
      } else {
        router.push("/result/ct-scan/normal");
      }
    } catch (error) {
      console.error("Error submitting CT-scan:", error);
      setError("Terjadi kesalahan saat memproses gambar. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
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

            {/* Back Button */}
            <div className="flex items-center space-x-4">
              <button onClick={() => router.push("/")} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                <span>←</span>
                <span className="hidden sm:inline">Kembali</span>
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

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Deteksi CT-Scan Paru-Paru</h2>
            <p className="text-blue-100 text-lg">Upload gambar CT-scan paru-paru untuk deteksi dini kanker</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* File Upload Area */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Gambar CT-Scan</h3>

                {!selectedFile ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                    <div className="space-y-4">
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div>
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <span className="text-lg font-medium text-blue-600 hover:text-blue-500">Klik untuk upload file</span>
                          <span className="text-gray-500"> atau drag & drop file disini</span>
                        </label>
                        <input id="file-upload" type="file" accept="image/jpeg,image/jpg,image/png" onChange={handleFileSelect} className="hidden" />
                      </div>
                      <p className="text-sm text-gray-500">Format: JPG, JPEG, PNG (Maksimal 10MB)</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {previewUrl && (
                            <div className="w-32 h-32 border border-gray-200 rounded-lg overflow-hidden">
                              <Image src={previewUrl} alt="Preview CT-scan" width={128} height={128} className="w-full h-full object-cover" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{selectedFile.name}</p>
                          <p className="text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                          <button type="button" onClick={handleRemoveFile} className="mt-2 text-sm text-red-600 hover:text-red-500">
                            Hapus file
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Panduan Upload CT-Scan:</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Pastikan gambar CT-scan berkualitas baik dan jelas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Format file yang didukung: JPG, JPEG, PNG</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Ukuran file maksimal 10MB</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Hasil deteksi bersifat bantuan diagnosis, bukan pengganti konsultasi dokter</span>
                  </li>
                </ul>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={!selectedFile || isLoading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <>
                      <span>Analisis CT-Scan</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
