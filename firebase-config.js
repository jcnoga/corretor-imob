// Importa o Firebase via CDN (não precisa instalar node_modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- COLE AQUI SUA CONFIGURAÇÃO DO FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyDRN1IlaIZ12yVqRrwQsxhoN3yGBI8oxCE",
  authDomain: "corretor-imob-d9359.firebaseapp.com",
  projectId: "corretor-imob-d9359",
  storageBucket: "corretor-imob-d9359.firebasestorage.app",
  messagingSenderId: "100488948331",
  appId: "1:100488948331:web:e7a6a9beb78e6cad2e1f2e",
  measurementId: "G-41PYMD0XE1"
};

// Inicializa o app e exporta o banco de dados
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);