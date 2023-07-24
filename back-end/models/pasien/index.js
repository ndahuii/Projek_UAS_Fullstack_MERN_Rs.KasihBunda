const mongoose = require("mongoose");

const Pasien = mongoose.model("pasiens", {
  nama: {
    type: String,
  },
  noHp: {
    type: String,
  },
  umur: {
    type: Number,
  },
  poli: {
    type: String,
  },
  dokter: {
    type: String,
  },
  hari: {
    type: String,
  },
  pembayaran: {
    type: String,
  },
});

module.exports = Pasien;
