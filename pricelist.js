/**
 * pricelist.js
 * Modul logika pricelist & generator invoice Google Sheets untuk 3 GARAGE.
 */
const Garage3Pricelist = {
  formatRupiah(amount) {
    const num = Number(amount) || 0;
    return 'Rp ' + num.toLocaleString('id-ID');
  },

  calculateTotals(items = [], discount = 0) {
    const subtotal = (items || []).reduce((acc, row) => {
      const qty = Math.max(0, Number(row.qty) || 0);
      const price = Math.max(0, Number(row.price) || 0);
      return acc + qty * price;
    }, 0);
    const cleanDiscount = Math.max(0, Number(discount) || 0);
    const total = Math.max(0, subtotal - cleanDiscount);
    return {
      subtotal,
      discount: cleanDiscount,
      total
    };
  },

  summarizeItems(items = []) {
    return (items || [])
      .map(r => `${r.name || 'Item'} (x${Number(r.qty) || 1})`)
      .join('; ');
  },

  buildTSV(invoice) {
    const totals = this.calculateTotals(invoice.items, invoice.discount);
    const headers = [
      'No Invoice',
      'Tanggal',
      'Pelanggan',
      'No WA',
      'Kendaraan',
      'No Plat',
      'Items',
      'Subtotal',
      'Diskon',
      'Total',
      'Catatan'
    ].join('\t');

    const row = [
      invoice.invNumber || '',
      invoice.invDate || '',
      invoice.customer || '',
      invoice.phone || '',
      invoice.car || '',
      invoice.plate || '',
      this.summarizeItems(invoice.items),
      totals.subtotal,
      totals.discount,
      totals.total,
      invoice.notes || ''
    ].join('\t');

    return `${headers}\n${row}`;
  },

  buildCSV(invoice) {
    const totals = this.calculateTotals(invoice.items, invoice.discount);
    const rows = [
      [
        'No Invoice',
        'Tanggal',
        'Pelanggan',
        'No WA',
        'Kendaraan',
        'No Plat',
        'Items',
        'Subtotal',
        'Diskon',
        'Total',
        'Catatan'
      ],
      [
        invoice.invNumber || '',
        invoice.invDate || '',
        invoice.customer || '',
        invoice.phone || '',
        invoice.car || '',
        invoice.plate || '',
        this.summarizeItems(invoice.items),
        totals.subtotal,
        totals.discount,
        totals.total,
        invoice.notes || ''
      ]
    ];

    return (
      '\uFEFF' +
      rows
        .map(r => r.map(cell => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(','))
        .join('\n')
    );
  },

  async postToGoogleSheet(webAppUrl, invoice) {
    if (!webAppUrl) {
      throw new Error('URL Google Apps Script belum diisi.');
    }
    const totals = this.calculateTotals(invoice.items, invoice.discount);
    const payload = {
      ...invoice,
      itemsSummary: this.summarizeItems(invoice.items),
      subtotal: totals.subtotal,
      discount: totals.discount,
      total: totals.total
    };

    await fetch(webAppUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    return payload;
  }
};

if (typeof window !== 'undefined') {
  window.Garage3Pricelist = Garage3Pricelist;
}
