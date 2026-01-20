// Importa o Firebase via CDN (não precisa instalar node_modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- COLE AQUI SUA CONFIGURAÇÃO DO FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyBhtwWew_DQNX2TZROUShZz4mjK57pRgQk",
  authDomain: "lembrete-d6c15.firebaseapp.com",
  projectId: "lembrete-d6c15",
  storageBucket: "lembrete-d6c15.firebasestorage.app",
  messagingSenderId: "368296869868",
  appId: "1:368296869868:web:ea3d3baceb24b52fa90ac9",
  measurementId: "G-CF25FSSKZE"
};

// Inicializa o app e exporta o banco de dados
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);