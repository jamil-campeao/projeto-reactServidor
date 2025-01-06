const admin = require('firebase-admin');

if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_PRIVATE_KEY || !process.env.FIREBASE_CLIENT_EMAIL) {
    throw new Error('As variáveis de ambiente do Firebase não estão configuradas corretamente.');
}

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Corrige quebras de linha
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
});
const db = admin.firestore();

module.exports = { db };
