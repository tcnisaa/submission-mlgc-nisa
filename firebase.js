const admin = require('firebase-admin');

// Path ke file JSON kredensial yang diunduh
const serviceAccount = require('./submissionmlgc-tangguh-445213-2822cb851810.json');

// Inisialisasi Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
