
window.addEventListener('DOMContentLoaded', function() {
    
    const dadosSalvos = localStorage.getItem('meuCartao');


    const container = document.getElementById('containerCartao');


    if (dadosSalvos) {
        const dadosCartao = JSON.parse(dadosSalvos);
        const htmlDoCartao = `
            <div class="cartao-visita">
                <h3>${dadosCartao.empresa}</h3>
                <p><strong>Telefone:</strong> ${dadosCartao.telefone}</p>
                <p><strong>Email:</strong> ${dadosCartao.email}</p>
            </div>
        `;
        container.innerHTML = htmlDoCartao;
    } else {
        container.innerHTML = "<p>Nenhum cartão foi criado. Volte e crie um!</p>";
    }
});