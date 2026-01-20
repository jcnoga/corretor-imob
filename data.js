import { db } from './firebase-config.js';
import { collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Função para buscar clientes reais do Firestore
export async function getClientes() {
    const lista = [];
    try {
        const querySnapshot = await getDocs(collection(db, "clientes"));
        querySnapshot.forEach((doc) => {
            lista.push({ id: doc.id, ...doc.data() });
        });
        return lista;
    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        return []; // Retorna lista vazia em caso de erro
    }
}

// Função placeholder para adicionar (pode ser expandida depois)
export async function addClienteFake() {
    try {
        await addDoc(collection(db, "clientes"), {
            nome: "Novo Cliente Teste",
            email: "teste@email.com",
            telefone: "(11) 99999-9999",
            tipo: "Comprador",
            interesse: "Apartamento",
            valor: "500k"
        });
        alert("Cliente teste adicionado! Atualize a página.");
    } catch (e) {
        console.error("Erro ao adicionar", e);
    }
}

// Dados estáticos do Dashboard (Simulação)
export const statsData = {
    kpis: {
        disponiveis: 42,
        novos: 15,
        negociacao: 5,
        conversao: '12%'
    },
    agenda: [
        { hora: '09:00', tipo: 'Visita', cliente: 'João Silva', local: 'Ed. Horizon' },
        { hora: '14:30', tipo: 'Reunião', cliente: 'Maria Oliveira', local: 'Escritório' }
    ],
    alertas: [
        { msg: 'Cliente Roberto sem retorno há 5 dias', nivel: 'urgente' },
        { msg: 'Imóvel REF-102 sem visitas há 30 dias', nivel: 'medio' }
    ]
};