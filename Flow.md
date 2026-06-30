# Panduan Penggunaan Sistem Pendukung Keputusan (SPK) Developer

Selamat datang di aplikasi SPK Pemilihan Web Developer dengan metode Analytical Hierarchy Process (AHP). Aplikasi ini terbagi menjadi dua bagian utama: **Halaman Publik** untuk simulasi dan **Halaman Admin** untuk pengelolaan data master.

---

## 1. Halaman Publik (Simulasi Keputusan)

Halaman ini dapat diakses oleh siapa saja untuk melakukan simulasi pemilihan developer terbaik.

### A. Penyesuaian Bobot Kriteria (Tingkat Lanjut)
Secara bawaan, sistem menggunakan bobot kriteria AHP yang telah dihitung oleh pakar. Namun, jika Anda memiliki prioritas yang berbeda, Anda dapat menyesuaikan bobot tersebut:
1. Gulir ke bawah hingga bagian **Simulasi Keputusan AHP**.
2. Anda akan melihat sebuah tombol switch (toggle) bertuliskan **"Gunakan Pembobotan Khusus"**. Klik tombol tersebut untuk mengaktifkannya.
3. Setelah aktif, panel *slider* sensitivitas akan muncul.
4. Geser *slider* pada masing-masing kriteria (UI/UX, Biaya, Keamanan, Waktu, Portofolio) sesuai dengan tingkat kepentingan Anda (0-100%).
5. **Catatan:** Total persentase dari kelima kriteria harus selalu 100%. Sistem akan secara otomatis mendistribusikan ulang nilai sisa jika Anda menggeser salah satu *slider*.

### B. Input Alternatif Developer
1. Pada tabel **Input Alternatif Developer**, sistem telah menyediakan dua baris input kosong secara default.
2. Masukkan **Nama Developer** pada kolom pertama.
3. Masukkan nilai **Skala 1 - 5** untuk masing-masing kriteria (UI/UX, Biaya, Keamanan, Waktu, Portofolio).
   - **Tip:** Anda bisa melihat panduan arti nilai skala 1-5 dengan mengarahkan kursor (hover) ke ikon **"?"** di sudut kanan atas tabel. (Contoh: Skala 5 = Sangat Baik / Sangat Murah).
4. Jika ingin membandingkan lebih dari 2 developer, klik tombol **"+ Tambah Alternatif"** di bawah tabel.
5. Anda dapat menghapus developer dari tabel dengan menekan tombol **"✕"** di ujung kanan baris.

### C. Menghitung Peringkat AHP
1. Setelah semua alternatif diisi, klik tombol **"Hitung Peringkat AHP"**.
2. Sistem akan memproses normalisasi matriks secara seketika dan akan otomatis menggulir (scroll) ke bawah menuju tabel **Hasil Peringkat AHP**.
3. Developer dengan nilai tertinggi (Rank 1) akan disorot sebagai pemenang rekomendasi.
4. Anda dapat mencetak hasil ini dengan menekan tombol **Cetak Laporan (PDF)**.

---

## 2. Halaman Admin (Control Panel)

Halaman Admin digunakan untuk mengelola data master Alternatif secara permanen (tersimpan di database). Semua simulasi yang dijalankan dari data master akan mengacu ke data ini.

### A. Login ke Admin Panel
1. Buka halaman utama website, dan pada sudut kanan atas (Navbar), klik tombol **"Login Admin"**.
2. Anda akan diarahkan ke halaman *Sign In*.
3. Gunakan kredensial berikut untuk masuk:
   - **Email:** `admin@spk.com`
   - **Password:** `password`
4. Klik **"Secure Login"**. Anda akan diarahkan ke Dashboard Admin.

### B. Fitur di Halaman Admin
Setelah berhasil masuk, Anda akan melihat panel navigasi (Sidebar) di sebelah kiri dengan dua menu utama:

#### 1. Data Alternatif
Ini adalah halaman utama dasbor. Di sini Anda dapat melakukan pengelolaan penuh terhadap data (CRUD):
- **Tambah Data:** Klik tombol "+ Tambah Data" di kanan atas. Sebuah jendela popup (Modal) akan muncul. Anda dapat menginput nama developer, email/kontak, deskripsi singkat, beserta skor 1-5 bawaannya.
- **Edit Data:** Klik ikon pensil biru di baris tabel untuk memperbarui skor atau profil developer.
- **Hapus Data:** Klik ikon tempat sampah merah untuk menghapus alternatif selamanya.
- **Export Excel:** Anda dapat mengunduh seluruh data master developer yang tersimpan ke dalam format `.xlsx` dengan menekan tombol "Export Excel".

#### 2. Log Simulasi
Sistem ini memantau secara pasif (*silent tracking*) setiap kali pengunjung publik melakukan simulasi!
- Jika Anda berpindah ke tab **Log Simulasi**, Anda akan disuguhkan riwayat aktivitas.
- Tabel ini menampilkan Kapan simulasi dilakukan (Waktu Eksekusi) oleh pengunjung, beserta "Siapa pemenang dari simulasi tersebut" (Alternatif dengan skor tertinggi). 
- Fitur ini sangat berguna jika Anda ingin mengetahui tren web developer mana yang paling sering memenangkan perhitungan (berdasarkan parameter yang dicoba pengunjung).

#### 3. Logout
- Untuk keluar dari mode Administrator, klik tombol **Logout** berwarna merah di sudut kiri bawah panel navigasi. Sesi token keamanan Anda akan segera dihapus.
