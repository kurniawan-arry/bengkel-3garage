/**
 * workshop.js
 * Modul logika aplikasi, CMS konten & pricelist tanpa edit kode, serta alur WhatsApp 3 GARAGE.
 */
const Garage3Workshop = {
  sanitizeWaNumber(numStr) {
    const digits = String(numStr || '').replace(/\D/g, '');
    if (!digits) return '6281234567890';
    return digits.startsWith('0') ? '62' + digits.slice(1) : digits;
  },

  buildConsultMessage(brandName, { name, car, plate, notes }) {
    return [
      `Halo *${brandName}*, saya ingin konsultasi:`,
      name ? `- Nama: *${name}*` : null,
      car ? `- Mobil: *${car}*` : null,
      plate ? `- Tahun / Plat: *${plate}*` : null,
      notes ? `- Keluhan / Pertanyaan: ${notes}` : null
    ]
      .filter(Boolean)
      .join('\n');
  },

  buildBookingMessage(brandName, { name, phone, car, plate, service, date, time, notes }) {
    return [
      `Halo *${brandName}*, saya ingin *BOOKING SERVIS*:`,
      name ? `- Nama: *${name}*` : null,
      phone ? `- No. HP/WA: *${phone}*` : null,
      car ? `- Kendaraan: *${car}*` : null,
      plate ? `- No. Plat: *${plate}*` : null,
      service ? `- Layanan: *${service}*` : null,
      date || time ? `- Jadwal: *${date || '-'}* pukul *${time || '-'}*` : null,
      notes ? `- Catatan: ${notes}` : null
    ]
      .filter(Boolean)
      .join('\n');
  },

  openWhatsApp(waNumber, message) {
    const cleanNum = this.sanitizeWaNumber(waNumber);
    const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  },

  init() {
    if (typeof window.syncAllViews === 'function') {
      window.syncAllViews();
    }
    if (typeof window.syncJsonPreview === 'function') {
      window.syncJsonPreview();
    }
  }
};

if (typeof window !== 'undefined') {
  window.Garage3Workshop = Garage3Workshop;
}
