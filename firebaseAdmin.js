const admin = require('firebase-admin');
const serviceAccount = require('./helterbooks-firebase-adminsdk-5stdg-fbbd1c5fbf.json'); // Caminho para sua chave privada

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { db, admin };