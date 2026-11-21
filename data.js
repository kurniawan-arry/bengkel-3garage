/**
 * data.js
 * Data awal/default untuk aplikasi web 3 GARAGE — SUBARU & MAZDA SPECIALIST.
 */
const GARAGE3_DATA = {
  storageKeys: {
    content: 'garage3_content_v1',
    pin: 'garage3_admin_pin_v1',
    gsUrl: 'garage3_gs_url_v1'
  },
  defaultPin: '3Garage2026',
  defaultContent: {
    workshop: {
      brandName: '3 GARAGE',
      tagline: 'SUBARU & MAZDA SPECIALIST',
      waNumber: '6281287691811',
      heroBadge: 'Spesialis Boxer Engine, AWD/CVT Subaru & Skyactiv Mazda',
      heroTitle: 'Perawatan Presisi & Performa Optimal untuk Subaru & Mazda Anda.',
      heroSubtitle: '3 GARAGE hadir dengan standar diagnosa terarah, suku cadang terkurasi, serta mekanik berpengalaman khusus platform Subaru Boxer & Mazda Skyactiv — lengkap dengan transparansi estimasi biaya, booking cepat, dan konsultasi langsung via WhatsApp.',
      address: 'RUKO FRANKFURT, Gading Serpong, BLOK F/09, Klp. Dua, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810',
      hours: 'Senin – Sabtu: 08.30 – 17.30 WIB • Minggu & Hari Besar: By Appointment'
    },
    services: [
      {
        id: 'srv-subaru-1',
        category: 'Subaru',
        title: 'Service Berkala Boxer + Oli Mesin & Filter',
        price: 1150000,
        duration: '60 - 90 Menit',
        description: 'Penggantian oli mesin & filter oli, inspeksi kebocoran seal Boxer, tekanan ban, rem, fluida, dan scan OBD.'
      },
      {
        id: 'srv-subaru-2',
        category: 'Subaru',
        title: 'Kurasi & Ganti Oli Transmisi CVT / AWD Diff',
        price: 1650000,
        duration: '90 - 120 Menit',
        description: 'Perawatan transmisi Lineartronic CVT & diferensial Symmetrical AWD untuk menjaga perpindahan halus dan traksi.'
      },
      {
        id: 'srv-mazda-1',
        category: 'Mazda',
        title: 'Skyactiv Tune-Up & Throttle / Intake Cleaning',
        price: 850000,
        duration: '60 - 90 Menit',
        description: 'Pembersihan throttle body, pengecekan busi & koil, reset adaptasi, dan diagnosa sistem Skyactiv-G / Turbo.'
      },
      {
        id: 'srv-mazda-2',
        category: 'Mazda',
        title: 'Service Berkala Mazda + Oli & Filter Original/Kurasi',
        price: 1050000,
        duration: '60 Menit',
        description: 'Paket ganti oli mesin, filter oli, inspeksi kaki-kaki, sistem pengereman, aki/i-Stop & pengecekan kolong.'
      },
      {
        id: 'srv-paket-1',
        category: 'Paket',
        title: 'Paket General Check-Up & Pre-Purchase Inspection',
        price: 450000,
        duration: '45 - 60 Menit',
        description: 'Pemeriksaan menyeluruh kondisi mesin, transmisi, suspensi, kolong bodi, dan scan DTC sebelum perjalanan jauh atau beli unit.'
      },
      {
        id: 'srv-gen-1',
        category: 'General',
        title: 'Perbaikan Kaki-Kaki, Shock & Pengereman (Jasa)',
        price: 600000,
        duration: '90 - 180 Menit',
        description: 'Jasa bongkar pasang shock absorber, arm/bushing, link stabilizer, bearing roda, serta servis kampas & piringan rem.'
      }
    ],
    faqs: [
      {
        question: 'Apakah 3 GARAGE hanya melayani Subaru dan Mazda saja?',
        answer: 'Spesialisasi utama kami berada pada lini kendaraan Subaru dan Mazda (Boxer NA/Turbo, AWD/CVT, Skyactiv-G/D, transmisi & kaki-kaki). Untuk pengecekan umum atau unit tertentu, silakan konsultasikan via WhatsApp.'
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.GARAGE3_DATA = GARAGE3_DATA;
}
