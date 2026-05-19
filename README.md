# Website SPK - Pemilihan Web Developer (Metode AHP)

Proyek ini adalah Sistem Pendukung Keputusan (SPK) untuk memilih Web Developer terbaik menggunakan metode *Analytical Hierarchy Process* (AHP). Aplikasi ini terbagi menjadi dua *repository* lokal di dalam satu folder: **Backend (Laravel 12)** dan **Frontend (React.js + Tailwind V4)**.

---

## 🛠️ Persyaratan Sistem (Prerequisites)

Sebelum menjalankan proyek ini, pastikan Anda dan tim Anda telah menginstal perangkat lunak berikut di komputer masing-masing:
1. **PHP** (Minimal versi 8.2)
2. **Composer** (Untuk *package manager* Laravel)
3. **Node.js** (Minimal versi 18.x) & **NPM** (Untuk *package manager* React)
4. **MySQL** (Bisa menggunakan XAMPP, Laragon, atau DB Server mandiri)
5. **Git** (Untuk manajemen versi)

---

## 🚀 Cara Instalasi & Menjalankan Proyek secara Lokal

Ikuti langkah-langkah di bawah ini secara berurutan untuk menyiapkan lingkungan pengembangan (Development) di komputer lokal.

### Langkah 1: Kloning Repositori
Buka terminal Anda, lalu jalankan perintah berikut untuk mengunduh kode proyek:
```bash
git clone https://github.com/Alds323721/Website_SPK.git
cd Website_SPK
```

### Langkah 2: Menyiapkan Database
1. Buka aplikasi **XAMPP / Laragon** Anda dan jalankan modul **MySQL**.
2. Buat sebuah database baru dengan nama `web-spk`. (Atau sesuai nama database yang ingin Anda gunakan).

### Langkah 3: Konfigurasi Backend (Laravel API)
Buka terminal baru, lalu masuk ke folder `BE-SPK`:
```bash
cd BE-SPK
```
1. Salin file konfigurasi *.env*:
   ```bash
   cp .env.example .env
   ```
2. Buka file `.env` yang baru saja disalin, lalu pastikan konfigurasi database sudah benar:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=web-spk
   DB_USERNAME=root
   DB_PASSWORD=
   ```
3. Instal semua dependensi PHP (Pastikan Anda terkoneksi ke internet):
   ```bash
   composer install
   ```
4. Buat kunci keamanan aplikasi (*App Key*):
   ```bash
   php artisan key:generate
   ```
5. Jalankan migrasi database beserta data awal (Seeder) untuk membuat akun Admin:
   ```bash
   php artisan migrate:fresh --seed
   ```
6. Jalankan server Backend Laravel:
   ```bash
   php artisan serve
   ```
   *(Biarkan terminal ini tetap terbuka dan berjalan di latar belakang. Server akan berjalan di `http://localhost:8000`)*.

---

### Langkah 4: Konfigurasi Frontend (React + Vite)
Buka terminal **BARU** (jangan tutup terminal Backend), lalu masuk ke folder `fe-spk`:
```bash
cd fe-spk
```
1. Instal dependensi Node.js (Pastikan Anda terkoneksi ke internet):
   ```bash
   npm install
   ```
2. Jalankan server Frontend React:
   ```bash
   npm run dev
   ```
   *(Server Vite akan memberikan URL, biasanya `http://localhost:5173`. Buka URL tersebut di browser/peramban Anda)*.

---

## 🔑 Kredensial Akses

Setelah kedua server berjalan, Anda dapat mengakses Halaman Publik di browser Anda.
Untuk masuk ke **Dashboard Admin** (Kelola data master dan Export Excel), klik menu "Login Admin" di pojok kanan atas dan gunakan akun bawaan yang telah kita buat melalui *Seeder*:

- **Email:** `admin@spk.com`
- **Password:** `password`

---

## 🤝 Alur Kerja Kolaborasi (Git Workflow)

Bagi tim yang berkolaborasi dalam kode ini, ikuti langkah berikut setiap kali ingin memperbarui atau mengirim fitur baru:

1. Tarik pembaruan terbaru dari teman Anda sebelum mulai ngoding:
   ```bash
   git pull origin main
   ```
2. Setelah selesai melakukan perubahan pada kode, tambahkan perubahan:
   ```bash
   git add .
   ```
3. Buat deskripsi tentang apa yang Anda ubah (*commit*):
   ```bash
   git commit -m "Deskripsi perubahan (contoh: Memperbaiki warna tombol login)"
   ```
4. Kirim perubahan Anda ke repositori GitHub:
   ```bash
   git push origin main
   ```

Selamat mengembangkan dan berkolaborasi! Jangan lupa merujuk ke dokumen desain dan fitur jika ada kebingungan spesifikasi antarmuka.
