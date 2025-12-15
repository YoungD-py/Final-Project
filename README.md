# Paradise Nursery

Aplikasi e-commerce berbasis React untuk nursery tanaman, dengan fitur keranjang belanja menggunakan manajemen state Redux Toolkit.

## Fitur

- **Halaman Landing**: Halaman selamat datang dengan navigasi ke katalog tanaman.
- **Katalog Produk**: Jelajahi tanaman yang dikelompokkan berdasarkan kategori (Tanaman Indoor, Sukulen, Semak Outdoor). Setiap produk menampilkan gambar, nama, harga, dan tombol "Add to Cart" yang dinonaktifkan setelah ditambahkan.
- **Keranjang Belanja**: Tambah, hapus, dan sesuaikan jumlah item di keranjang dengan kontrol + dan -.
- **Ikon Keranjang Dinamis**: Pembaruan real-time jumlah total item unik di navbar.
- **Desain Responsif**: Didesain dengan CSS untuk antarmuka bersih dengan tema tropis, termasuk efek hover dan layout grid.
- **State Management**: Menggunakan Redux Toolkit untuk mengelola state keranjang secara efisien.

## Teknologi yang Digunakan

- **React 18**: Framework frontend untuk membangun UI.
- **React Router v6**: Untuk routing sisi klien.
- **Redux Toolkit**: Untuk manajemen state keranjang belanja.
- **CSS3**: Untuk styling komponen dengan tema tropis.
- **Create React App**: Untuk setup proyek.

## Struktur Proyek

```
src/
├── app/
│   └── store.js            # Konfigurasi Redux store
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
├── index.js                # Titik masuk app dengan Provider Redux
public/
├── index.html              # Template HTML
package.json                # Dependensi dan scripts
README.md                   # Dokumentasi proyek
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

- **Halaman Utama**: Klik "Get Started" untuk masuk ke katalog produk.
- **Katalog Produk**: Jelajahi tanaman berdasarkan kategori. Klik "Add to Cart" untuk menambah item (tombol akan dinonaktifkan setelah ditambahkan).
- **Keranjang Belanja**: Akses via navbar. Sesuaikan quantity dengan tombol + dan -, atau hapus item. Lihat total harga dan lanjut ke checkout (placeholder).
- **Navigasi**: Gunakan navbar untuk berpindah halaman, dengan ikon keranjang menunjukkan jumlah item.

## Redux Setup

Proyek menggunakan Redux Toolkit untuk state management:

- **Store**: Dikonfigurasi di `src/app/store.js`.
- **Slice**: `CartSlice.jsx` mengelola actions seperti `addItem`, `removeItem`, dll.
- **Selectors**: `selectTotalUniqueItems` dan `selectTotalPrice` untuk mengakses state.

## Berkontribusi

1. Fork repositori.
2. Buat branch fitur.
3. Lakukan perubahan dan commit.
4. Push ke branch dan buat pull request.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.