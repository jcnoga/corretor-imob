import { renderDashboard } from './views/dashboard.js';
import { renderClients } from './views/clients.js';

const appContainer = document.getElementById('app-container');
const pageTitle = document.getElementById('page-title');

// Função de roteamento global
window.navigateTo = async function(route) {
    // 1. Atualizar Menu Lateral (Visual)
    document.querySelectorAll('.sidebar li').forEach(el => el.classList.remove('active'));
    const activeItem = document.getElementById(`nav-${route}`);
    if(activeItem) activeItem.classList.add('active');

    // 2. Feedback de Carregamento
    appContainer.innerHTML = '<div class="loading"><span class="material-icons spin">refresh</span> Carregando dados...</div>';

    // 3. Renderizar View
    try {
        if (route === 'dashboard') {
            pageTitle.innerText = 'Dashboard - Visão Geral';
            appContainer.innerHTML = renderDashboard();
        } 
        else if (route === 'clients') {
            pageTitle.innerText = 'Gestão de Clientes';
            // Como busca do Firebase, usamos await
            appContainer.innerHTML = await renderClients();
        }
    } catch (error) {
        console.error(error);
        appContainer.innerHTML = `<div class="card" style="color:red">Erro ao carregar: ${error.message}</div>`;
    }
}

// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', () => {
    window.navigateTo('dashboard');
});