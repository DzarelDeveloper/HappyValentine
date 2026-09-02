<div align="center">

# Happy Valentine

Website ucapan Valentine interaktif dengan animasi hati, efek partikel, dan pesan personal dalam tampilan yang sederhana dan romantis.

[Live Demo](https://dzareldeveloper.github.io/HappyValentine/) · [Report an Issue](https://github.com/DzarelDeveloper/HappyValentine/issues)

</div>

## Tentang Proyek

**Happy Valentine** adalah website statis dua halaman untuk menyampaikan ucapan Valentine secara digital. Pengunjung akan melihat rangkaian animasi pembuka yang dibuat menggunakan Mo.js, kemudian diarahkan secara otomatis menuju halaman berisi pesan Valentine.

Animasi dapat dilewati dengan menekan teks **Love**. Proyek ini tidak memerlukan backend, database, ataupun proses build sehingga dapat dijalankan langsung melalui browser dan dipublikasikan menggunakan GitHub Pages.

## Fitur

- Animasi pembuka berbentuk hati dan ledakan partikel
- Custom heart shape berbasis SVG
- Timeline animasi berurutan menggunakan Mo.js
- Redirect otomatis menuju halaman pesan setelah animasi selesai
- Opsi melewati animasi dengan menekan teks **Love**
- Efek garis SVG yang bergerak pada halaman ucapan
- Pesan Valentine yang dapat dikustomisasi
- Tampilan sederhana dan responsif untuk perangkat seluler

## Teknologi

- **HTML5** — struktur halaman dan konten
- **CSS3** — styling, animasi SVG, dan tampilan responsif
- **JavaScript** — kontrol animasi, interaksi, dan navigasi halaman
- **[Mo.js](https://mojs.github.io/)** — animasi motion graphics berbasis JavaScript
- **GitHub Pages** — hosting website statis

## Struktur Proyek

```text
HappyValentine/
├── index.html       # Halaman dan pemicu animasi pembuka
├── Valentine.html   # Halaman utama berisi pesan Valentine
├── script.js        # Konfigurasi dan timeline animasi Mo.js
├── style.css        # Tampilan halaman pembuka
├── text.css         # Tampilan serta animasi halaman pesan
├── README.md        # Dokumentasi proyek
└── LICENSE          # Lisensi MIT
```

## Menjalankan Secara Lokal

Tidak diperlukan instalasi dependensi.

1. Clone repositori:

   ```bash
   git clone https://github.com/DzarelDeveloper/HappyValentine.git
   ```

2. Masuk ke direktori proyek:

   ```bash
   cd HappyValentine
   ```

3. Jalankan local server:

   ```bash
   python -m http.server 8000
   ```

4. Buka `http://localhost:8000` melalui browser.

> Koneksi internet diperlukan untuk memuat library Mo.js dan Google Fonts yang digunakan melalui CDN.

## Kustomisasi

- Ubah isi ucapan pada `Valentine.html`.
- Sesuaikan warna, tipografi, dan animasi garis melalui `text.css`.
- Atur durasi serta urutan animasi melalui variabel dan timeline pada `script.js`.
- Ubah warna latar halaman pembuka melalui `style.css`.
- Ganti teks **From Me** dengan nama atau identitas pengirim yang diinginkan.

Sebelum memublikasikan versi personal, pastikan pesan dan informasi yang ditampilkan memang aman untuk dilihat secara publik.

## Demo

Versi publik proyek tersedia melalui GitHub Pages:

**[Buka Live Demo](https://dzareldeveloper.github.io/HappyValentine/)**

## Lisensi

Proyek ini didistribusikan di bawah [MIT License](LICENSE).

## Author

Dibuat oleh [DzarelDeveloper](https://github.com/DzarelDeveloper).
