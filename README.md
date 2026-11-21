3 GARAGE — SUBARU & MAZDA SPECIALIST

Website katalog layanan, pricelist, konsultasi & booking WhatsApp, panel Admin CMS tanpa edit kode, serta generator invoice terintegrasi Google Sheets untuk 3 GARAGE (spesialis Subaru dan Mazda), yang dirancang agar siap di-deploy ke GitHub Pages (kurniawan-arry/bengkel-3garage).

Fitur Utama

Katalog Layanan & Pricelist Subaru & Mazda (#layanan)

Filter kategori (Semua Layanan, Subaru, Mazda, Paket Servis, General & Kaki-Kaki) dan pencarian cepat kata kunci (misalnya: Boxer, CVT, Skyactiv, oli, rem).

Estimasi harga transparan dan tombol Booking Layanan langsung terhubung ke layanan terkait.

Konsultasi & Booking via WhatsApp (wa.me)

Form tanya cepat di hero card serta modal Konsultasi WA dan Booking Servis WA.

Menyusun format pesan WhatsApp secara otomatis berdasarkan data kendaraan, keluhan, layanan, tanggal, dan jam servis.

Admin CMS Tanpa Edit HTML / JavaScript

Akses melalui tombol Admin / Invoice di header (PIN default: 3garage, dapat diganti di pengaturan bengkel).

Layanan & Pricelist CMS: Tambah, edit, ubah urutan (↑ / ↓), atau hapus item layanan dan harga secara langsung.

Profil Bengkel & WA: Perbarui nama bengkel, nomor WhatsApp, headline hero, alamat, dan jam operasional.

Export / Import JSON: Unduh atau salin content.json agar perubahan dapat di-commit ke repository GitHub untuk sinkronisasi lintas perangkat.

Pricelist Builder & Invoice Google Sheets

Rakitan invoice dari daftar pricelist maupun item custom dengan hitung otomatis Subtotal, Diskon, dan Total Tagihan format Rupiah (Rp).

Mendukung Cetak / Simpan PDF Invoice, Copy Kolom TSV untuk paste langsung ke Google Sheets, Download CSV, serta pengiriman otomatis via Google Apps Script (doPost).

Struktur Folder & File

bengkel-3garage/
├── index.html          # Halaman utama, modal WA, Admin CMS, Invoice Builder & File Inspector
├── data.js             # Data awal/default (storage key, PIN default, profil bengkel, pricelist & FAQ)
├── pricelist.js        # Kalkulasi Rupiah, rakitan invoice, format TSV/CSV & kirim ke Google Sheets
├── workshop.js         # Normalisasi nomor WA, format pesan konsultasi & booking, serta helper aplikasi
├── README.md           # Dokumentasi proyek 3 GARAGE
└── assets/
    ├── README.md       # Panduan penempatan aset di folder assets/
    ├── content.json    # Data konten lengkap untuk export/import atau referensi struktur JSON
    ├── logo-3garage.png
    └── workshop-bay.jpg


Panduan Push ke GitHub & Aktifkan GitHub Pages

Pastikan seluruh file (index.html, data.js, pricelist.js, workshop.js, README.md, dan isi folder assets/) berada di folder lokal repository bengkel-3garage.

Jalankan perintah Git berikut:

git add .
git commit -m "feat: 3 GARAGE Subaru & Mazda specialist web app with WA flow, CMS, and Google Sheets invoice"
git push -u origin main


Di repository GitHub kurniawan-arry/bengkel-3garage, buka Settings → Pages, lalu pilih branch main dan folder / (root) untuk mempublikasikan situs.

Integrasi Google Sheets (Opsional)

Buka spreadsheet Google Sheets Anda, lalu klik Extensions → Apps Script.

Tempel fungsi doPost(e) (tersedia di tab 3. Invoice & Google Sheets pada panel Admin).

Klik Deploy → New deployment → Web app dengan pengaturan:

Execute as: Me

Who has access: Anyone

Salin Web app URL yang dihasilkan, lalu tempel ke kolom Google Apps Script Web App URL di tab 3. Invoice & Google Sheets pada panel Admin 3 GARAGE.`
