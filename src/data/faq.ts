export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export type FAQCategory = {
  id: string;
  label: string;
  icon: string;
};

export const FAQ_CATEGORIES: FAQCategory[] = [
  { id: "all", label: "Semua", icon: "📋" },
  { id: "produk", label: "Produk", icon: "🎋" },
  { id: "pemesanan", label: "Pemesanan", icon: "🛒" },
  { id: "pengiriman", label: "Pengiriman", icon: "📦" },
  { id: "perawatan", label: "Perawatan", icon: "✨" },
  { id: "harga", label: "Harga & Bisnis", icon: "💼" },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-001",
    category: "produk",
    question: "Apa itu produk anyaman bambu yang kami tawarkan?",
    answer:
      "Produk kami adalah kerajinan tangan berbahan dasar bambu yang dibuat oleh pengrajin lokal secara tradisional dan modern. Setiap produk dibuat dengan detail, kuat, dan ramah lingkungan. Kami menggabungkan kearifan lokal pengrajin Desa dengan teknik modern untuk menghasilkan produk berkualitas tinggi yang bersaing di pasar global.",
  },
  {
    id: "faq-002",
    category: "produk",
    question: "Produk apa saja yang tersedia?",
    answer:
      "Kami menyediakan berbagai produk seperti:\n• Topi Pantai — hadir dalam versi Classic, Premium, dan Wide Brim\n• Peci — tersedia dalam model Tradisional dan Modern\n\nKoleksi dapat berubah sesuai musim dan permintaan. Kami juga selalu mengembangkan produk baru berdasarkan tren dan masukan pelanggan.",
  },
  {
    id: "faq-003",
    category: "pemesanan",
    question: "Apakah produk bisa custom sesuai permintaan?",
    answer:
      "Ya, kami menerima pesanan custom untuk:\n• Ukuran tertentu\n• Warna khusus\n• Logo branding\n• Kebutuhan hampers atau souvenir acara\n\nSilakan hubungi kami melalui halaman Kontak untuk diskusi lebih lanjut dan dapatkan penawaran terbaik sesuai kebutuhan Anda.",
  },
  {
    id: "faq-004",
    category: "produk",
    question: "Apakah produk ini ramah lingkungan?",
    answer:
      "Ya. Produk kami menggunakan bambu alami yang biodegradable, sehingga lebih ramah lingkungan dibandingkan plastik. Bambu juga merupakan tanaman yang tumbuh sangat cepat dan tidak memerlukan pestisida, menjadikannya salah satu bahan baku paling berkelanjutan di dunia. Proses produksi kami juga meminimalkan limbah dengan memanfaatkan sisa bambu untuk keperluan lain.",
  },
  {
    id: "faq-005",
    category: "pemesanan",
    question: "Bagaimana cara pemesanan?",
    answer:
      "Pemesanan dapat dilakukan melalui:\n• Form pemesanan di website (halaman Products)\n• WhatsApp yang tertera di halaman kontak\n• Marketplace resmi kami (Tokopedia & Shopee)\n\nUntuk pesanan custom atau dalam jumlah besar, kami menyarankan untuk menghubungi langsung agar kami dapat memberikan penawaran terbaik.",
  },
  {
    id: "faq-006",
    category: "pemesanan",
    question: "Berapa lama proses produksi?",
    answer:
      "Estimasi waktu produksi:\n• Produk ready stock: 1–3 hari kerja\n• Custom atau pemesanan dalam jumlah besar: 5–14 hari kerja tergantung jumlah dan tingkat kesulitan\n\nKami akan memberikan konfirmasi waktu pengerjaan yang lebih akurat setelah diskusi detail pesanan Anda.",
  },
  {
    id: "faq-007",
    category: "pengiriman",
    question: "Apakah melayani pengiriman ke luar kota atau luar negeri?",
    answer:
      "Ya, kami melayani:\n• Pengiriman ke seluruh Indonesia via JNE, J&T, SiCepat, dan ekspedisi lainnya\n• Ekspor internasional sesuai kesepakatan\n\nUntuk pengiriman internasional, silakan hubungi kami terlebih dahulu untuk pembahasan detail biaya dan prosedur ekspor.",
  },
  {
    id: "faq-008",
    category: "perawatan",
    question: "Bagaimana cara perawatan produk anyaman bambu?",
    answer:
      "Agar produk tahan lama, ikuti panduan perawatan berikut:\n• Hindari tempat lembab\n• Simpan di tempat kering dan berventilasi baik\n• Bersihkan dengan kain kering atau sedikit lembab\n• Jemur sesekali agar tidak berjamur\n• Hindari paparan air langsung dalam waktu lama\n• Jauhkan dari benda tajam yang bisa merusak anyaman",
  },
  {
    id: "faq-009",
    category: "harga",
    question: "Apakah tersedia harga grosir?",
    answer:
      "Ya, kami menyediakan harga khusus untuk:\n• Pembelian dalam jumlah besar (minimal order bervariasi per produk)\n• Reseller dan distributor\n• Pengadaan korporat\n\nSilakan hubungi tim kami melalui WhatsApp atau email untuk mendapatkan price list grosir dan penawaran terbaik.",
  },
  {
    id: "faq-010",
    category: "pemesanan",
    question: "Bagaimana jika produk rusak saat diterima?",
    answer:
      "Kepuasan pelanggan adalah prioritas kami. Jika terjadi kerusakan akibat pengiriman:\n• Segera kirim foto/video kondisi produk maksimal 1×24 jam setelah barang diterima\n• Hubungi kami via WhatsApp atau email dengan menyertakan nomor pesanan\n• Tim kami akan memproses solusi terbaik (penggantian produk atau refund)\n\nKami tidak dapat memproses klaim yang dilaporkan lebih dari 24 jam setelah penerimaan.",
  },
];
