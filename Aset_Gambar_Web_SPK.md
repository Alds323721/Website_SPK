markdown_images_content = """# Dokumen Manajemen Aset Gambar - Sistem Pendukung Keputusan (SPK) Pemilihan Web Developer

Dokumen ini disusun sebagai panduan kebutuhan aset gambar dan ilustrasi untuk frontend Web SPK. Seluruh desain aset mengikuti prinsip **Photography-First & Minimalist Style** yang diadaptasi dari acuan `DESIGN.md` (menggunakan warna dominant Ink `#1d1d1f`, Canvas Parchment `#f5f5f7`, dan aksen tunggal Action Blue `#0066cc`).

Semua file gambar wajib disimpan pada direktori:  
📁 `fe-spk/src/assets/images/ dan fe-spk/src/assets/icons/`

---

## 1. Panduan Estetika Gambar (Berdasarkan DESIGN.md)
* **Karakteristik Visual:** Bersih, minimalis, tanpa gradien dekoratif yang mencolok, dan menggunakan sudut melengkung halus (*rounded corner*).
* **Palet Warna Gambar:** Dominan putih, abu-abu netral, hitam/ink, dengan sentuhan warna interaktif aksen biru (`#0066cc`).
* **Efek Bayangan (Shadow):** Efek bayangan hanya diaplikasikan pada gambar bertipe *product photography* yang diletakkan di atas permukaan canvas (`rgba(0, 0, 0, 0.22) 3px 5px 30px`). UI Chrome lainnya harus tetap flat.

---

## 2. Daftar Kebutuhan Aset Gambar & Penempatan

### A. Aset Global & Navigasi (Brand Identity)
Aset yang muncul di seluruh halaman sistem (Navbar, Footer, & Tab Browser).

1.  **Logo Aplikasi (Navbar)**
    * **Path File:** `fe-spk/src/assets/icons/logo-spk-light.png` (Untuk background terang) & `logo-spk-light.png` (Untuk background gelap).
    * **Deskripsi:** Logogram minimalis kombinasi bentuk grafik keputusan terstruktur dan elemen web browser.
    * **Spesifikasi:** Format PNG Transparan, resolusi `120px x 40px`.
    * **Penempatan:** Pojok kiri atas komponen `{component.sub-nav-frosted}`.

2.  **Favicon Browser**
    * **Path File:** `fe-spk/src/assets/icons/logo-spk-light.png`
    * **Deskripsi:** Singkatan dari logo utama berbentuk inisial monogram clean.
    * **Spesifikasi:** Format ICO/PNG, resolusi `32px x 32px`.
    * **Penempatan:** Tab browser sistem.

---

### B. Halaman Publik (User Tanpa Login)
Berfokus pada visualisasi yang megah, bersih, bergaya galeri (*product tiles*).

3.  **Hero Product Photography (Landing Page)**
    * **Path File:** `fe-spk/src/assets/images/hero-digitalization.jpg`
    * **Deskripsi:** Foto beresolusi tinggi yang menampilkan layar laptop estetik berisi cetak biru desain *website company profile* modern.
    * **Spesifikasi:** Format JPG berkualitas tinggi, rasio `16:9` (minimal `1920px x 1080px`). Diberikan drop shadow khusus `rgba(0, 0, 0, 0.22) 3px 5px 30px`.
    * **Penempatan:** Sisi kanan komponen Hero Section pada Landing Page.

4.  **Ikon Vektor 5 Kriteria Utama (Kajian Kriteria Pakar)**
    Aset infografis minimalis berwana monokrom dengan aksen Action Blue untuk menjelaskan bobot kriteria dari Pak Surya.
    * **Path Kriteria 1 (UI/UX):** `fe-spk/src/assets/icons/ic-ui-ux.png` (Ikon berbentuk wireframe/kuas desain).
    * **Path Kriteria 2 (Biaya):** `fe-spk/src/assets/icons/ic-biaya.png` (Ikon berbentuk simbol tag harga/keuangan minimalis).
    * **Path Kriteria 3 (Keamanan):** `fe-spk/src/assets/icons/ic-keamanan.png` (Ikon berbentuk tameng/perisai siber).
    * **Path Kriteria 4 (Waktu):** `fe-spk/src/assets/icons/ic-waktu.svg` (Ikon berbentuk stopwatch/kalender proyek).
    * **Path Kriteria 5 (Portofolio):** `fe-spk/src/assets/icons/ic-portofolio.png` (Ikon berbentuk folder/buku rekam jejak kerja).
    * **Spesifikasi:** Format SVG asli (vektor), resolusi fleksibel `48px x 48px`, warna default mengisi variabel `{colors.ink}`, dan berubah menjadi `{colors.primary}` saat di-hover.
    * **Penempatan:** Tersemat di dalam masing-masing kartu grid tile kriteria pada Halaman Publik.

5.  **Ilustrasi Panduan Skala Input (Simulasi Panel)**
    * **Path File:** `fe-spk/src/assets/images/illustration-guide.png`
    * **Deskripsi:** Ilustrasi skematik flat yang menggambarkan perbandingan tingkat kualitas developer dari skala 1 hingga 5.
    * **Spesifikasi:** Format SVG, latar belakang transparan, skema warna desaturasi abu-abu.
    * **Penempatan:** Di dalam modal pop-up / tooltips fitur panduan validasi skala alternatif ketika user mengklik ikon bantuan pengetikan.

6.  **Header Laporan Cetak PDF (Output Tampilan)**
    * **Path File:** `fe-spk/src/assets/images/pdf-header-branding.png`
    * **Deskripsi:** Watermark logo institusi kampus (Undiksha) bersama entitas SPK versi monokrom formal untuk lembar cetak hasil keputusan.
    * **Spesifikasi:** Format PNG dengan kecerahan tinggi (untuk cetak dokumen kertas), resolusi `600px x 150px`.
    * **Penempatan:** Bagian paling atas (header) dokumen unduhan PDF hasil rekomendasi peringkat AHP.

---

### C. Halaman Administrator (Backend Panel)
Berfokus pada kejelasan data, fungsionalitas, keamanan, dan minim distrasi visual.

7.  **Artwork Keamanan Halaman Login Admin**
    * **Path File:** `fe-spk/src/assets/images/admin-secure-auth.png`
    * **Deskripsi:** Grafis vektor minimalis berbentuk ilustrasi gembok komputasi modern dengan garis tegas warna biru `#0066cc`.
    * **Spesifikasi:** Format SVG, resolusi `300px x 300px`.
    * **Penempatan:** Sisi sebelah kiri form isian login admin (`domain.com/admin`), memperkuat identitas keamanan *session-based auth*.

8.  **Empty State Placeholder (Data CRUD Kosong)**
    * **Path File:** `fe-spk/src/assets/images/empty-data-placeholder.png`
    * **Deskripsi:** Ilustrasi minimalis berupa kotak arsip data kosong berbayang tipis untuk menandakan data alternatif di database belum diisi atau terhapus.
    * **Spesifikasi:** Format SVG, menggunakan warna dominan `{colors.canvas-parchment}` agar menyatu sempurna dengan background dashboard admin.
    * **Penempatan:** Muncul di dalam tabel Manajemen Alternatif atau Log Perhitungan hanya jika data bernilai `null` atau kosong.

---

## 3. Matriks Sinkronisasi Warna Gambar & Komponen

| Nama Aset Gambar | Background Canvas Sekitar | Format Ideal | Dominasi Kode Warna Aset |
| :--- | :--- | :--- | :--- |
| `logo-spk-dark.png` | `#ffffff` (Canvas Terang) | PNG | `#1d1d1f` & `#0066cc` |
| `hero-digitalization.jpg`| `#f5f5f7` (Parchment Tile) | JPG | Neutral photography, aksen `#0066cc` |
| Seluruh Ikon `.svg` Kriteria | `#fafafc` (Pearl Surface) | SVG Vector | `#1d1d1f` (Hover state: `#0066cc`) |
| `admin-secure-auth.svg` | `#000000` (Surface Black) | SVG Vector | `#ffffff` & `#2997ff` (Aksen terang) |

---
"""
