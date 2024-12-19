const db = require('./firebase'); // Mengimpor file firebase.js yang sudah diinisialisasi

// Fungsi untuk mengambil data prediksi dari Firestore
async function getPredictionsFromFirestore() {
  const predictionsRef = db.collection('predictions');
  
  try {
    const snapshot = await predictionsRef.get();
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  } catch (error) {
    console.error('Error membaca data prediksi:', error);
  }
}

// Memanggil fungsi untuk menampilkan prediksi
getPredictionsFromFirestore();
