# Paradise Nursery

Aplikasi e-commerce berbasis React untuk nursery tanaman, dengan fitur keranjang belanja menggunakan manajemen state Redux.

## Fitur

- **Halaman Landing**: Halaman selamat datang dengan navigasi ke katalog tanaman.
- **Katalog Produk**: Jelajahi tanaman yang dikelompokkan berdasarkan kategori (Tanaman Indoor, Sukulen, Semak Outdoor).
- **Keranjang Belanja**: Tambah, hapus, dan sesuaikan jumlah item di keranjang.
- **Ikon Keranjang Dinamis**: Pembaruan real-time jumlah total item di navbar.
- **Desain Responsif**: Didesain dengan CSS untuk antarmuka bersih dengan tema tropis.

## Teknologi yang Digunakan

- **React**: Framework frontend untuk membangun UI.
- **React Router**: Untuk routing sisi klien.
- **Redux Toolkit**: Untuk manajemen state keranjang belanja.
- **CSS**: Untuk styling komponen.

## Struktur Proyek

```
src/
├── components/
│   ├── Navbar.jsx          # Bilah navigasi dengan ikon keranjang
│   ├── ProductList.jsx     # Menampilkan produk berdasarkan kategori
│   ├── ShoppingCart.jsx    # Halaman keranjang dengan manajemen item
│   └── CartItem.jsx        # Komponen item keranjang individual
├── features/
│   └── cart/
│       └── CartSlice.jsx   # Slice Redux untuk state keranjang
├── data/
│   └── plants.js           # Data statis untuk tanaman
├── App.jsx                 # Komponen app utama dengan routing
├── App.css                 # Gaya global
└── index.js                # Titik masuk app
```

## Memulai

### Prasyarat

- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn

### Instalasi

1. Kloning repositori:
   ```
   git clone <repository-url>
   cd paradise-nursery
   ```

2. Instal dependensi:
   ```
   npm install
   ```

3. Jalankan server development:
   ```
   npm start
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Build untuk Produksi

```
npm run build
```

## Penggunaan

- Navigasi ke halaman utama dan klik "Get Started" untuk melihat tanaman.
- Jelajahi tanaman berdasarkan kategori dan tambahkan item ke keranjang.
- Lihat dan kelola item keranjang Anda, sesuaikan jumlah, atau hapus item.
- Ikon keranjang di navbar menunjukkan jumlah total item unik.

## Berkontribusi

1. Fork repositori.
2. Buat branch fitur.
3. Lakukan perubahan dan commit.
4. Push ke branch dan buat pull request.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.