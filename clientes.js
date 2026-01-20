import { getClientes, addClienteFake } from '../data.js';

// Precisamos exportar o manipulador de clique globalmente para este exemplo simples
window.addClienteTeste = addClienteFake;

export async function renderClients() {
    // Busca dados do Firebase
    const clientes = await getClientes();

    if (clientes.length === 0) {
        return `
            <div class="client-controls">
                <button class="btn btn-primary" onclick="window.addClienteTeste()">
                    <span class="material-icons">add</span> Gerar Cliente Teste
                </button>
            </div>
            <div class="card" style="text-align:center; padding: 40px;">
                <h3>Nenhum cliente encontrado.</h3>
                <p>Verifique sua conexão com o Firebase ou adicione um novo.</p>
            </div>
        `;
    }

    const rows = clientes.map(c => `
        <tr>
            <td>
                <strong>${c.nome || 'Sem Nome'}</strong><br>
                <small style="color:#666">${c.email || '-'}</small>
            </td>
            <td>${c.telefone || '-'}</td>
            <td><span class="badge ${c.tipo ? c.tipo.toLowerCase() : ''}">${c.tipo || 'Outro'}</span></td>
            <td>${c.interesse || '-'}</td>
            <td>${c.valor || '-'}</td>
            <td>
                <button class="btn" title="Editar"><span class="material-icons" style="color:var(--secondary)">edit</span></button>
            </td>
        </tr>
    `).join('');

    return `
        <div class="client-controls">
            <button class="btn btn-primary" onclick="window.addClienteTeste()">
                <span class="material-icons">add</span> Novo Cliente
            </button>
        </div>

        <div class="card" style="overflow-x:auto;">
            <table class="client-table">
                <thead>
                    <tr>
                        <th>Nome / Email</th>
                        <th>Telefone</th>
                        <th>Tipo</th>
                        <th>Interesse</th>
                        <th>Faixa de Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}