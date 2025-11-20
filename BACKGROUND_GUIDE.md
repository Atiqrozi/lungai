# Panduan Penempatan Gambar Background

## 📁 Struktur Folder Gambar

```
lungai-frontend/
└── public/
    └── images/
        └── background.png  <- Letakkan file background.png Anda di sini
```

## 🖼️ Cara Menambahkan Background Image

1. **Simpan gambar background.png** di folder:

   ```
   public/images/background.png
   ```

2. **Format yang Disarankan:**

   - Format: PNG, JPG, atau WebP
   - Resolusi: Minimal 1920x1080px
   - Ukuran file: Maksimal 2MB untuk performa optimal

3. **Jika nama file berbeda**, edit di `src/app/page.tsx` pada baris:
   ```tsx
   src = "/images/background.png";
   ```

## 🎨 Fitur Background yang Telah Diterapkan

- ✅ **Full Screen Background**: Gambar memenuhi seluruh layar
- ✅ **Responsive Design**: Menyesuaikan dengan berbagai ukuran layar
- ✅ **Overlay Transparan**: Lapisan putih semi-transparan untuk keterbacaan teks
- ✅ **Backdrop Blur**: Efek blur pada komponen untuk tampilan modern
- ✅ **Optimized Loading**: Menggunakan Next.js Image dengan priority loading

## 🔧 Penyesuaian Tampilan

### Mengubah Opacity Overlay

Untuk mengubah transparansi background, edit di `page.tsx`:

```tsx
<div className="absolute inset-0 bg-white bg-opacity-60"></div>
                                              ^^
                                         ubah nilai 60 (0-100)
```

### Mengubah Blur Effect

Untuk menyesuaikan efek blur pada komponen:

```tsx
className="bg-white bg-opacity-90 backdrop-blur-sm"
                                  ^^^^^^^^^^^^^^
                           ganti dengan: backdrop-blur-md atau backdrop-blur-lg
```

## 🎯 Perubahan yang Telah Dibuat

1. **Menghapus Medical Equipment Section** - Card peralatan medis di bagian bawah
2. **Menambahkan Background Image** - Foto latar belakang full screen
3. **Meningkatkan Hero Section** - Tampilan lebih menarik dengan efek glass morphism
4. **Responsive Header** - Navigation bar dengan backdrop blur
5. **Enhanced Footer** - Footer dengan transparansi dan blur

## 📱 Mobile Responsiveness

Background akan otomatis menyesuaikan dengan perangkat mobile melalui:

- `object-cover` untuk mempertahankan aspek rasio
- Responsive text sizing
- Adaptive spacing dan padding

Selamat menggunakan! 🎉
