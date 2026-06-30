# Perubahan Alur Autentikasi dan Dashboard (User Login Flow)

## 🔄 Pembaruan Alur Sistem (Per 30 Juni 2026)
Dokumen ini mendefinisikan perubahan arsitektur akses pada Web SPK Pemilihan Web Developer. Sistem yang sebelumnya memisahkan "Publik Tanpa Login" dan "Admin", kini **dirombak menjadi sistem berbasis Pengguna (User-centric)** dengan fitur *personal dashboard*.

### 1. Penghapusan Role "Admin Tunggal"
- Fitur `Login Admin` khusus dihilangkan. 
- Semua interaksi utama dengan sistem kini mewajibkan pengguna (user) untuk melakukan pendaftaran akun (Register) dan masuk (Login).

### 2. Alur Pengguna (User Flow) Baru
- **Landing Page:** Halaman depan yang berisi informasi umum tentang SPK Pemilihan Web Developer. Terdapat tombol "Login" atau "Mulai Sekarang".
- **Autentikasi:** Halaman Login/Register bagi pengguna baru.
- **Personal Dashboard (Setelah Login):** Setiap pengguna yang berhasil login akan langsung diarahkan ke Dashboard pribadi (mengadaptasi UI referensi KosRank). 

### 3. Struktur Navigasi (Sidebar) User Dashboard
Berdasarkan referensi visual, *sidebar* pengguna wajib memuat menu berikut:
* **Dashboard:** Ringkasan statistik (contoh: Total Simulasi yang pernah dilakukan user).
* **Data Alternatif:** Tabel manajemen daftar Web Developer *milik pengguna tersebut*.
* **Kriteria:** Penjelasan bobot AHP (UI/UX, Biaya, Keamanan, dll) atau antarmuka *slider* sensitivitas AHP.
* **Penilaian:** Form untuk memberikan nilai 1-5 pada alternatif.
* **Perhitungan:** Menampilkan matriks proses AHP dari data yang diinput pengguna.
* **Hasil Akhir:** Menampilkan *ranking* rekomendasi final untuk pengguna tersebut dan opsi *Export*.

---

## 🛠️ Instruksi Refactor (Untuk Vibe Coder AI)
Berdasarkan dokumen `DESIGN.md` dan `Flow.md` sebelumnya, lakukan modifikasi berikut pada repositori Backend (Laravel) dan Frontend (React):

### A. Perubahan Backend (Laravel 12)
1. **Model & Migration:** Modifikasi relasi database sehingga tabel `Alternatif` (Developer) memiliki `user_id` (Relasi *One-to-Many* dengan tabel `Users`). Artinya, data yang dilihat/dihapus oleh User A tidak memengaruhi data User B.
2. **Controllers:** Sesuaikan *middleware* autentikasi. Pastikan rute API CRUD Alternatif dan Perhitungan AHP di-filter berdasarkan `auth()->id()`.

### B. Perubahan Frontend (React.js + Tailwind V4)
1. **Routing (`App.jsx`):**
   - Hapus rute `/admin`.
   - Buat rute `/login` dan `/register` dengan UI yang mengikuti gaya Apple-minimalist (`bg-[#f5f5f7]`, form bersih tanpa *heavy shadow*).
   - Bungkus rute *dashboard* dengan `ProtectedRoute` yang mewajibkan token autentikasi.
2. **UI Dashboard (Adaptasi KosRank):**
   - Implementasikan *sidebar* di sebelah kiri (`w-64`) dan area konten utama di kanan.
   - Desain tabel untuk menu "Data Alternatif" harus *clean* dengan *border-bottom* tipis `border-[#e0e0e0]`.
   - Warna aktif pada *sidebar* gunakan biru utama (`#0066cc`).

### C. Penting (Menjaga Integritas AHP)
Perombakan UI/UX dan alur login ini **TIDAK BOLEH** mengubah sedikitpun logika matematika matriks AHP yang sudah berjalan dengan benar (skor ternormalisasi mutlak 1.0).
