# LungAI Frontend

Frontend aplikasi LungAI untuk deteksi kanker paru-paru menggunakan Next.js dan TailwindCSS.

## 🚀 Fitur Utama

- **Halaman Utama**: Landing page dengan informasi tentang 6 mahasiswa UPN Jatim
- **Form Deteksi**: Input data tabular dengan label bahasa Indonesia
- **Hasil Deteksi**: Halaman terpisah untuk hasil normal dan kanker
- **Integrasi API**: Terhubung dengan BE_Model_Tabular (port 5001)

## 📋 Halaman Aplikasi

1. **Home Page (/)** - Halaman utama dengan tombol "Mulai Deteksi"
2. **Detection Form (/detection-form)** - Form input data kesehatan
3. **Cancer Result (/result/cancer)** - Hasil deteksi positif kanker
4. **Normal Result (/result/normal)** - Hasil deteksi normal

## 🛠️ Instalasi

### 1. Install Dependencies

```bash
cd lungai-frontend
npm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

## 🔧 Konfigurasi

### API Endpoint

- BE_Model_Tabular: `http://localhost:5001/predict`
- LungAi (Image): `http://localhost:5000`

### Form Fields (Bahasa Indonesia)

- Jenis Kelamin (GENDER): Laki-laki/Perempuan
- Umur (AGE): Input angka
- Merokok (SMOKING): No/Yes (1/2)
- Jari Kuning (YELLOW_FINGERS): No/Yes (1/2)
- Kecemasan (ANXIETY): No/Yes (1/2)
- Tekanan Teman Sebaya (PEER_PRESSURE): No/Yes (1/2)
- Penyakit Kronis (CHRONIC DISEASE): No/Yes (1/2)
- Kelelahan (FATIGUE): No/Yes (1/2)
- Alergi (ALLERGY): No/Yes (1/2)
- Mengi (WHEEZING): No/Yes (1/2)
- Konsumsi Alkohol (ALCOHOL CONSUMING): No/Yes (1/2)
- Batuk (COUGHING): No/Yes (1/2)
- Sesak Napas (SHORTNESS OF BREATH): No/Yes (1/2)
- Kesulitan Menelan (SWALLOWING DIFFICULTY): No/Yes (1/2)
- Nyeri Dada (CHEST PAIN): No/Yes (1/2)

## 📱 Responsive Design

Aplikasi menggunakan TailwindCSS untuk design yang responsive:

- Mobile-first approach
- Grid layout yang adaptif
- Button dan form yang touch-friendly

## 🔗 Integrasi Backend

### BE_Model_Tabular (Port 5001)

```javascript
const response = await axios.post("http://localhost:5001/predict", formData);
```

### Deteksi Lanjutan (Port 5000)

Tombol "Deteksi Lanjutan" akan membuka aplikasi LungAi untuk analisis gambar X-Ray.

## 🎨 Tema Warna

- Primary: `#4A90B8` (Biru)
- Secondary: `#87CEEB` (Biru Muda)
- Success: `#10B981` (Hijau)
- Warning: `#F59E0B` (Kuning)
- Error: `#EF4444` (Merah)

## 📁 Struktur Folder

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── detection-form/
│   │   └── page.tsx         # Form input
│   └── result/
│       ├── cancer/
│       │   └── page.tsx     # Hasil kanker
│       └── normal/
│           └── page.tsx     # Hasil normal
```

## 🚀 Deployment

### Build Production

```bash
npm run build
npm start
```

### Environment Variables

Buat file `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:5001
NEXT_PUBLIC_IMAGE_API_URL=http://localhost:5000
```

## 👥 Tim Pengembang

Dibuat oleh 6 mahasiswa UPN Veteran Jawa Timur untuk proyek deteksi kanker paru-paru menggunakan AI.

## ⚠️ Disclaimer

Hasil deteksi hanya bersifat skrining awal dan bukan diagnosis medis. Konsultasikan dengan dokter untuk diagnosis yang akurat.
