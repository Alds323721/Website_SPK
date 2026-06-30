# Task: Perbaikan Bug Perhitungan Matriks AHP (Analytic Hierarchy Process)

## 🚨 Deskripsi Masalah (Bug Report)
Pada modul Sistem Pendukung Keputusan (SPK) Pemilihan Developer menggunakan metode AHP, ditemukan anomali pada hasil akhir perhitungan skor alternatif:
- **Skor Developer C:** `1.0010` (Melebihi nilai maksimal 1.0).
- **Total Skor Semua Alternatif (A + B + C):** `2.1554` (Seharusnya total mutlak harus `1.0` atau 100%).

Hal ini menunjukkan adanya kesalahan logika matematis pada bagian **Normalisasi Matriks** atau **Sintesis Bobot Akhir** di dalam kode program. Sebagai seorang *vibe coder*, saya membutuhkan perbaikan kode secara menyeluruh pada fungsi perhitungan tersebut.

---

## 📐 Panduan Aturan Matematis AHP yang Benar
Untuk memastikan perhitungan valid, kode program harus mengikuti kaidah AHP murni berikut:
1. **Bobot Kriteria Ternormalisasi:** Total penjumlahan dari bobot semua kriteria (UI/UX, Biaya, Keamanan, Waktu, Portofolio) harus tepat `1.0`.
2. **Normalisasi Nilai Alternatif:** Nilai input alternatif untuk setiap kriteria harus dinormalisasikan terlebih dahulu sebelum dikalikan dengan bobot kriteria.
   - *Rumus standar:* Nilai Alternatif pada Kriteria X dibagi dengan Total Nilai Seluruh Alternatif pada Kriteria X.
3. **Sintesis (Skor Akhir):** - Skor Akhir Alternatif = ∑ (Nilai Alternatif Ternormalisasi × Bobot Kriteria)
4. **Validasi Akhir:** Jika Skor Akhir Alternatif A, B, dan C dijumlahkan, hasilnya **wajib bernilai 1.0**.

---

## 🛠️ Tugas Perbaikan Kode (Task for AI)
1. Cari fungsi atau method yang menangani perhitungan/sintesis akhir peringkat AHP (misalnya fungsi `hitungAHP()`, `calculateAHP()`, atau sejenisnya).
2. Periksa bagian loop atau matriks yang melakukan perkalian bobot. Pastikan proses **Normalisasi** sudah diterapkan dengan benar sebelum melakukan penjumlahan akhir.
3. Jika sistem ini menggunakan kombinasi metode (AHP + SAW/TOPSIS), pastikan rumus pembagi pembacaan kriteria *Benefit* (Maksimal) dan *Cost* (Minimal) tidak menghasilkan nilai kumulatif yang bocor melewati angka 1.0.
4. Perbaiki kode tersebut agar menghasilkan output skor yang berkisar antara `0.0` hingga `1.0` dengan total jumlahan seluruh alternatif sama dengan `1.0`.
