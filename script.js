function mostrarSecao(idSecao) {
    // Seleciona todas as seções de conteúdo
    const secoes = document.querySelectorAll('.conteudo-secao');
    
    // Remove a classe 'ativa' de todas as seções para escondê-las
    secoes.forEach(secao => {
        secao.classList.remove('ativa');
    });
    
    // Encontra a seção clicada e adiciona a classe 'ativa' para mostrá-la
    const secaoAlvo = document.getElementById(idSecao);
    if (secaoAlvo) {
        secaoAlvo.classList.add('ativa');
    }
}
