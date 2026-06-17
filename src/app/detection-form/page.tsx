"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface FormData {
  GENDER: string;
  AGE: number;
  SMOKING: number;
  YELLOW_FINGERS: number;
  ANXIETY: number;
  PEER_PRESSURE: number;
  "CHRONIC DISEASE": number;
  "FATIGUE ": number;
  "ALLERGY ": number;
  WHEEZING: number;
  "ALCOHOL CONSUMING": number;
  COUGHING: number;
  "SHORTNESS OF BREATH": number;
  "SWALLOWING DIFFICULTY": number;
  "CHEST PAIN": number;
}

export default function DetectionForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    GENDER: "",
    AGE: 0,
    SMOKING: 1,
    YELLOW_FINGERS: 1,
    ANXIETY: 1,
    PEER_PRESSURE: 1,
    "CHRONIC DISEASE": 1,
    "FATIGUE ": 1,
    "ALLERGY ": 1,
    WHEEZING: 1,
    "ALCOHOL CONSUMING": 1,
    COUGHING: 1,
    "SHORTNESS OF BREATH": 1,
    "SWALLOWING DIFFICULTY": 1,
    "CHEST PAIN": 1,
  });

  const formFields = [
    {
      key: "GENDER",
      label: "Jenis Kelamin",
      type: "select",
      options: [
        { value: "", label: "Pilih Jenis Kelamin" },
        { value: "M", label: "Laki-laki" },
        { value: "F", label: "Perempuan" },
      ],
    },
    { key: "AGE", label: "Umur", type: "number" },
    { key: "SMOKING", label: "Merokok", type: "radio" },
    { key: "YELLOW_FINGERS", label: "Jari Kuning", type: "radio" },
    { key: "ANXIETY", label: "Kecemasan", type: "radio" },
    { key: "PEER_PRESSURE", label: "Tekanan Teman Sebaya", type: "radio" },
    { key: "CHRONIC DISEASE", label: "Penyakit Kronis", type: "radio" },
    { key: "FATIGUE ", label: "Kelelahan", type: "radio" },
    { key: "ALLERGY ", label: "Alergi", type: "radio" },
    { key: "WHEEZING", label: "Mengi", type: "radio" },
    { key: "ALCOHOL CONSUMING", label: "Konsumsi Alkohol", type: "radio" },
    { key: "COUGHING", label: "Batuk", type: "radio" },
    { key: "SHORTNESS OF BREATH", label: "Sesak Napas", type: "radio" },
    { key: "SWALLOWING DIFFICULTY", label: "Kesulitan Menelan", type: "radio" },
    { key: "CHEST PAIN", label: "Nyeri Dada", type: "radio" },
  ];

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi form
    if (!formData.GENDER) {
      alert("Silakan pilih jenis kelamin");
      return;
    }

    if (formData.AGE <= 0) {
      alert("Silakan masukkan umur yang valid");
      return;
    }

    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
      const response = await axios.post(`${apiUrl}/predict`, formData);

      // Redirect to result page with prediction data
      if (response.data.prediction === "Kanker Paru-Paru") {
        router.push("/result/cancer");
      } else {
        router.push("/result/normal");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Terjadi kesalahan saat memproses data. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Form Deteksi Kanker Paru-Paru</h2>
            <p className="text-blue-100 text-lg">Silakan isi form berikut untuk melakukan deteksi dini</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="absolute left-0 w-64 h-64 bg-blue-200 rounded-full opacity-30"></div>
              <div className="absolute right-0 w-48 h-48 bg-blue-100 rounded-full opacity-40"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <div key={field.key} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-medium">{index + 1}</div>
                      <label className="text-gray-700 font-medium">{field.label}</label>
                    </div>

                    <div className="ml-11">
                      {field.type === "number" ? (
                        <input
                          type="number"
                          value={formData[field.key as keyof FormData] === 0 ? "" : formData[field.key as keyof FormData]}
                          onChange={(e) => handleInputChange(field.key, e.target.value === "" ? 0 : parseInt(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Masukkan umur"
                          min="1"
                          max="100"
                          required
                        />
                      ) : field.type === "select" ? (
                        <select
                          value={formData[field.key as keyof FormData]}
                          onChange={(e) => handleInputChange(field.key, e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        >
                          {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <div className="flex space-x-4">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name={field.key}
                              value={1}
                              checked={formData[field.key as keyof FormData] === 1}
                              onChange={() => handleInputChange(field.key, 1)}
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-gray-700">No</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name={field.key}
                              value={2}
                              checked={formData[field.key as keyof FormData] === 2}
                              onChange={() => handleInputChange(field.key, 2)}
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-gray-700">Yes</span>
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
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
