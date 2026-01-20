import { statsData } from '../data.js';

export function renderDashboard() {
    const { kpis, agenda, alertas } = statsData;

    // HTML da Agenda
    const agendaHTML = agenda.map(item => `
        <li class="agenda-item">
            <span class="agenda-time">${item.hora}</span>
            <div>
                <strong>${item.tipo}</strong> com ${item.cliente}
                <div style="font-size:0.8rem; color:#666">${item.local}</div>
            </div>
        </li>
    `).join('');

    // HTML de Alertas
    const alertasHTML = alertas.map(item => `
        <li class="alert-item ${item.nivel}">
            <span class="material-icons" style="font-size: 1.2rem;">warning</span>
            ${item.msg}
        </li>
    `).join('');

    return `
        <div class="dashboard-grid">
            <div class="card stat-card">
                <div><h3>Disponíveis</h3><div class="number">${kpis.disponiveis}</div></div>
                <span class="material-icons icon">home</span>
            </div>
            <div class="card stat-card">
                <div><h3>Leads Novos</h3><div class="number">${kpis.novos}</div></div>
                <span class="material-icons icon">person_add</span>
            </div>
            <div class="card stat-card">
                <div><h3>Em Negociação</h3><div class="number">${kpis.negociacao}</div></div>
                <span class="material-icons icon">handshake</span>
            </div>
            <div class="card stat-card">
                <div><h3>Conversão</h3><div class="number">${kpis.conversao}</div></div>
                <span class="material-icons icon">trending_up</span>
            </div>
        </div>

        <div class="dashboard-grid" style="grid-template-columns: 1fr 1fr;">
            <div class="card">
                <h3 class="section-title">Agenda do Dia</h3>
                <ul class="agenda-list">${agendaHTML || '<li>Sem compromissos hoje</li>'}</ul>
            </div>
            <div class="card">
                <h3 class="section-title">Alertas</h3>
                <ul class="alert-list">${alertasHTML || '<li>Sem alertas pendentes</li>'}</ul>
            </div>
        </div>
    `;
}