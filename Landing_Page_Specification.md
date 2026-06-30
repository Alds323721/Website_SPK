# Spesifikasi Desain Landing Page - SPK Pemilihan Web Developer (DevRank)

Dokumen ini mendefinisikan transformasi visual dan struktural halaman depan (*Landing Page*) aplikasi SPK Pemilihan Web Developer dengan metode AHP. Desain ini mengadaptasi susunan tata letak (layout) modern minimalis dari referensi "KosRank", namun diimplementasikan secara ketat menggunakan bahasa desain Apple-like dari `DESIGN.md` dan konteks kriteria AHP Anda.

---

## 🎨 Token Desain & Identitas Visual (Sesuai DESIGN.md)
- **Aksen Utama (Action Blue):** `#0066cc` (Untuk tombol utama, link aktif, ikon sorotan).
- **Warna Teks Utama (Ink):** `#1d1d1f` (Untuk headline besar dan teks tebal).
- **Latar Belakang Utama:** `#ffffff` (Murni) bergantian dengan `#f5f5f7` (Parchment Tile) untuk pemisah section.
- **Tipografi:** SF Pro Display (Headline dengan *negative letter-spacing*) & SF Pro Text (Body).

---

## 🏗️ Struktur Komponen Landing Page (React.js + Tailwind V4)

### 1. Komponen Navigation Bar (`Navbar.jsx`)
* **Sisi Kiri:** Logo aplikasi minimalis teks "DevRank" atau ikon logo gabungan kode warna `#1d1d1f` & `#0066cc`.
* **Sisi Tengah:** Link menu navigasi flat: `Fitur`, `Kriteria AHP`, `Tentang`.
* **Sisi Kanan:** Tombol aksen hantu (*ghost button*) "Daftar" dan Tombol Pil (*Pill-shaped Button*) utama `bg-[#0066cc]` teks putih bertuliskan **"Masuk / Dashboard"** yang mengarah ke halaman login baru.

### 2. Komponen Hero Section (`HeroSection.jsx`) - *Adaptasi Gambar 1*
* **Tata Letak:** Teks terpusat (*center-aligned*) dengan ruang kosong (*white space*) yang luas dan elegan.
* **Headline Utama (`h1`):** "Temukan Web Developer Terbaik untuk Bisnis Anda. Didukung Data Objek, Bukan Tebakan." (Gunakan font tebal ukuran besar dengan padding atas-bawah yang proporsional).
* **Sub-headline:** "Sistem Pendukung Keputusan berbasis metode Analytic Hierarchy Process (AHP) untuk mengukur kelayakan developer secara akurat berdasarkan kriteria UI/UX, Biaya, Keamanan, Waktu, dan Portofolio."
* **Call to Action (CTA) Buttons:**
    * Tombol Utama: Bentuk pil besar penuh `rounded-full bg-[#0066cc] text-white px-8 py-3.5` bertuliskan **"Mulai Evaluasi Sekarang"**.
    * Tombol Sekunder: *Link button* dengan ikon panah kanan tipis bertuliskan "Pelajari Metode AHP".

### 3. Komponen Alur & Kriteria Fitur (`FeaturesGrid.jsx`) - *Adaptasi Gambar 2 & 3*
Mengubah grid pencarian kos menjadi grid transparansi 5 Kriteria Utama Pemilihan Developer:
* Dibuat menggunakan layout card grid 3 kolom yang bersih (`bg-white border border-[#e0e0e0] rounded-[18px] p-6`).
* **Card 1 (UI/UX):** Menjelaskan pentingnya estetika & fungsionalitas antarmuka.
* **Card 2 (Biaya):** Menjelaskan optimasi kriteria *Cost* agar sesuai anggaran.
* **Card 3 (Keamanan Perangkat Lunak):** Proteksi celah keamanan kode sistem.
* **Card 4 (Waktu Pengerjaan):** Ketepatan waktu rilis *timeline* proyek (*Cost*).
* **Card 5 (Portofolio & Pengalaman):** Validasi rekam jejak proyek developer sebelumnya.

### 4. Komponen Panduan Cara Kerja (`WorkflowSteps.jsx`) - *Adaptasi Gambar 4*
Alur tiga langkah berurutan horizontal yang interaktif menggunakan penomoran tipis:
* **Langkah 01 - Daftarkan Akun & Alternatif:** Pengguna masuk ke personal dashboard dan menginput nama-nama kandidat developer.
* **Langkah 02 - Pembobotan Kriteria Dinamis:** Mengatur tingkat sensitivitas prioritas kriteria menggunakan slider intuitif.
* **Langkah 03 - Sintesis Keputusan Akhir:** Sistem memproses normalisasi matriks AHP secara instan dan mengeluarkan rekomendasi urutan peringkat terbaik dengan total nilai mutlak 1.0.

---

## 🛠️ Tugas Refactor (Untuk Vibe Coder AI)
1. Ganti tampilan file landing page lama (`LandingPage.jsx` atau `Home.jsx` pada direktori frontend).
2. Terapkan Tailwind CSS V4 utility classes secara bersih tanpa dekorasi gradasi warna yang berlebihan sesuai estetika galeri produk.
3. Pastikan tombol login diarahkan ke rute `/login` yang baru sesuai dengan `User_Dashboard_Flow_Update.md`.
