import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Paradise Nursery</h1>
      <p>
        Paradise Nursery adalah penyedia tanaman hias berkualitas tinggi yang berkomitmen untuk membawa keindahan alam ke dalam rumah Anda.
        Kami percaya bahwa tanaman tidak hanya mempercantik ruangan, tetapi juga meningkatkan kualitas udara dan kesejahteraan Anda.
      </p>
      <p>
        Visi kami adalah menjadi pemimpin dalam industri nursery dengan fokus pada keberlanjutan. Kami memilih tanaman yang ramah lingkungan,
        menggunakan praktik pertanian organik, dan mendukung komunitas lokal. Setiap tanaman yang kami jual dipilih dengan hati-hati
        untuk memastikan kesehatan dan keindahannya.
      </p>
      <p>
        Misi kami adalah membuat gardening mudah dan menyenangkan bagi semua orang. Baik Anda seorang pemula atau ahli, kami menyediakan
        berbagai pilihan tanaman indoor, succulents, dan shrubs outdoor yang cocok untuk berbagai kebutuhan.
      </p>
      <Link to="/plants">Kembali ke Produk</Link>
    </div>
  );
}

export default AboutUs;
