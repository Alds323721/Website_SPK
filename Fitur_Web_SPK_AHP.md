# Dokumen Spesifikasi Fitur Sistem Pendukung Keputusan (SPK) Pemilihan Web Developer
**Metode:** Analytical Hierarchy Process (AHP)  
**Pakar/Validator Kriteria:** Ir. Gede Surya Mahendra, S.Pd., M.Kom.  
**Bobot Kriteria Pakar (Fixed):**
* C1 (UI/UX): **0.245** (Benefit)
* C2 (Biaya): **0.239** (Cost)
* C3 (Keamanan Perangkat Lunak): **0.181** (Benefit)
* C4 (Waktu Pengerjaan): **0.181** (Cost)
* C5 (Portofolio & Pengalaman): **0.155** (Benefit)

---

## 1. Arsitektur Akses Sistem (Halaman Terpisah)
Sistem ini menggunakan pemisahan halaman yang tegas berdasarkan hak akses (*role-based access*):
* **Halaman Publik (User Tanpa Login):** Diakses melalui URL utama (contoh: `domain.com/` atau `domain.com/spk`). Halaman ini berfokus pada kemudahan pelaku usaha/pengusaha untuk melakukan simulasi pemilihan tanpa hambatan registrasi.
* **Halaman Backend Admin:** Diakses melalui URL khusus yang dirahasiakan (contoh: `domain.com/admin` atau `domain.com/login-admin`). Dilindungi dengan skema *session-based authentication* untuk mencegah akses ilegal.

---

## 2. Daftar Fitur Berdasarkan Role

### A. Role: User Tanpa Login (Halaman Publik)
Bertujuan memberikan efisiensi bagi pelaku pengusaha/UMKM di Wilayah X yang ingin mencari rekomendasi *web developer* terbaik dengan cepat.

1.  **Fitur Dashboard / Landing Page**
    * Menampilkan penjelasan singkat mengenai sistem SPK dan pentingnya digitalisasi *website company profile* bagi pengusaha.
    * Menampilkan diagram/informasi 5 kriteria utama beserta bobot kepentingan yang sudah divalidasi oleh pakar (*pembuktian transparansi sistem*).

2.  **Fitur Input Penilaian Alternatif (Simulasi SPK)**
    * Menampilkan form input interaktif berupa daftar calon kandidat *web developer* (Alternatif) yang ingin dinilai oleh user.
    * **Metode Penilaian Form:** User memasukkan nilai performa masing-masing kandidat pada tiap kriteria (Skala Likert 1-5 atau input angka riil untuk harga dan waktu).
    * Tombol aksi `"Hitung Rekomendasi"` untuk memproses algoritma perhitungan AHP secara real-time di background.

3.  **Fitur Tampilan Hasil Rekomendasi (Output)**
    * Menampilkan visualisasi peringkat (ranking) *web developer* terbaik dari urutan tertinggi ke terendah berdasarkan nilai skor akhir hasil perkalian bobot pakar.
    * Menampilkan detail perbandingan nilai tiap alternatif dalam bentuk grafik batang (bar chart) atau tabel yang bersih.
    * Fitur tombol `"Cetak Hasil / Unduh PDF"` agar pelaku usaha bisa menyimpan dokumen rekomendasi tersebut ke perangkat mereka.
4. **Fitur "Reset atau Sensitivitas Kriteria" (Pada Sisi User Umum)**
Penjelasan: Di halaman simulasi user, berikan opsi tombol "Gunakan Bobot Rekomendasi Pakar" (default) atau check-box "Sesuaikan Bobot Sendiri".

Manfaat Akademis: Jika pengusaha merasa bagi bisnis mereka kriteria "Biaya" jauh lebih krusial daripada "UI/UX" (berbeda dengan preferensi umum Pak Surya), mereka bisa menggeser slider bobot secara dinamis. Di dalam jurnal SPK, ini disebut dengan Analisis Sensitivitas, yang nilainya sangat tinggi secara akademis.

5. ****Fitur "Validasi Skala Input Alternatif" (Pada Sisi User Umum)**
Penjelasan: Saat user memasukkan performa kandidat developer, jangan biarkan mereka mengira-ngira arti angka 1 sampai 5. Buatlah tooltips atau panduan pop-up kecil di form input, misalnya:

Skala 5 (UI/UX) = Developer memiliki sertifikasi desain / mockup sangat detail.

Skala 1 (UI/UX) = Developer hanya menyediakan template standar bawaan.

Manfaat Akademis: Ini membuktikan sistem SPK kamu bersifat objektif dan meminimalisir bias dari user umum yang awam teknologi.

---

### B. Role: Admin (Halaman Backend / Admin Panel)
Bertujuan mengelola repositori data master kriteria, alternatif bawaan, serta memantau penggunaan sistem.

1.  **Fitur Otentikasi & Keamanan (Login Admin)**
    * Form login multi-faktor/standar (Username & Password) dengan enkripsi (seperti Bcrypt/Argon2).
    * Sistem proteksi *Session Timeout* (otomatis logout jika tidak ada aktivitas dalam waktu tertentu).

2.  **Fitur Manajemen Data Kriteria (Kunci Bobot Pakar)**
    * Menampilkan daftar 5 kriteria bawaan (Biaya, Portofolio, Keamanan, Waktu, UI/UX).
    * Fitur untuk mengubah sifat kriteria (*Cost* atau *Benefit*) jika terjadi perubahan parameter di masa mendatang.
    * Fitur memperbarui nilai bobot tetap (*fixed weights*) sesuai dengan matriks AHP terbaru yang divalidasi pakar.

3.  **Fitur Manajemen Data Alternatif (Master Web Developer)**
    * **Create:** Menambahkan kandidat *web developer* baru (nama agensi/freelancer, kontak, deskripsi singkat) ke dalam database sistem.
    * **Read:** Menampilkan tabel seluruh daftar *web developer* bawaan beserta nilai kriteria standarnya.
    * **Update:** Mengubah data profil atau memperbarui nilai bawaan dari *web developer* jika kapabilitas mereka berubah (misal: harga turun atau portofolio bertambah).
    * **Delete:** Menghapus data *web developer* dari sistem jika penyedia jasa sudah tidak aktif.

4.  **Fitur Log Perhitungan / Riwayat Simulasi User**
    * Menampilkan rangkuman statistik data riwayat penggunaan sistem oleh user umum (kandidat mana yang paling sering muncul sebagai peringkat 1).
    * Berguna untuk keperluan analisis tren pasar digitalisasi pengusaha di Wilayah X yang dapat dimasukkan sebagai data tambahan pada artikel ilmiah.
5. **Fitur "Export/Backup Database Alternatif" (Pada Sisi Admin)**
Penjelasan: Tombol di halaman admin untuk mengekspor seluruh daftar master data web developer beserta nilai-nilainya ke dalam format Excel (.xlsx atau .csv).

Manfaat Praktis: Memudahkan kamu atau pengelola web di masa depan jika ingin memindahkan data puluhan web developer ke sistem lain tanpa perlu mengetik ulang satu per satu.
---

## 3. Desain Alur Kerja Sistem (Workflow)

[USER TANPA LOGIN]                           [HALAMAN ADMIN]
│                                           │
▼                                           ▼
Akses URL Utama                             Akses URL /admin
│                                           │
▼                                           ▼
Input Nama & Nilai Alternatif                 Form Login Admin
(Ada Panduan Skala Tooltips)                        │
│                                           │
▼                                           ▼
Pilih Bobot (Pakar / Sensitivitas Slider)   Kelola Data Master (CRUD)
│                                   & Export Excel Backup
▼                                           │
Proses Algoritma Perhitungan                        │
│                                           │
▼                                           ▼
Tampilkan Ranking & Unduh PDF <─────────────────────┘

"""
