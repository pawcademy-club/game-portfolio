# Pawcademy — Project Data Guide

Panduan ini digunakan saat menambahkan game baru ke `public/data/games.json`.

## 1. Project Type

Pilih salah satu nilai berikut untuk properti `projectType`.

### `internal`
Gunakan untuk game yang dikembangkan sebagai proyek internal Pawcademy, bukan pesanan klien.

Contoh:
- Game buatan sendiri untuk portofolio.
- Game yang dikembangkan untuk koleksi game Pawcademy.

### `client`
Gunakan untuk game yang dikembangkan berdasarkan pesanan atau kebutuhan klien.

Contoh:
- Game untuk perusahaan.
- Game untuk sekolah atau universitas.
- Game untuk instansi atau organisasi.

Catatan: periksa izin publikasi nama klien sebelum menampilkannya.

### `prototype`
Gunakan untuk eksperimen, demo, proof of concept, atau proyek percobaan.

Contoh:
- Demo mekanisme permainan.
- Eksperimen game engine.
- Prototipe yang belum menjadi produk final.

## 2. Client Visibility

Gunakan properti `client.visibility` untuk menentukan informasi klien yang boleh ditampilkan.

- `public` — nama klien boleh dipublikasikan.
- `confidential` — identitas klien dirahasiakan.
- `none` — tidak ada klien eksternal yang perlu ditampilkan.

Jangan mempublikasikan nama klien tanpa izin yang sesuai.

## 3. Contoh Pengisian

Game internal:

`"projectType": "internal"`

Game pesanan klien:

`"projectType": "client"`

Game eksperimen atau demo:

`"projectType": "prototype"`

## 4. Konsistensi Data

- Gunakan nilai `projectType` yang sudah ditentukan.
- Isi tanggal pengerjaan hanya jika informasinya diketahui.
- Isi peran sesuai pekerjaan yang benar-benar dilakukan.
- Jangan mengarang nama klien, tanggal, pencapaian, atau detail proyek.
- Pertahankan format JSON yang valid.
- Setelah mengubah data, uji halaman detail game di website Pawcademy.
