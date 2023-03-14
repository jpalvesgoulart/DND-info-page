const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.carrossel__imagem');
const descricoes = document.querySelectorAll('.informacoes__descricao');

botoesCarrossel.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        imagens[i].classList.add('ativa');
        const descricaoAtiva = document.querySelector('.mostra');
        descricaoAtiva.classList.remove('mostra');
        descricoes[i].classList.add('mostra');
    })
})

