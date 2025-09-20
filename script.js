function mostrarDescricao(pilarId) {
    // Esconde todas as descrições
    document.querySelectorAll('.descricao').forEach(descricao => {
        descricao.style.display = 'none';
    });

    // Mostra a descrição do pilar clicado
    const pilar = document.querySelector(`.pilar[onclick*="${pilarId}"]`);
    if (pilar) {
        const descricao = pilar.querySelector('.descricao');
        if (descricao) {
            descricao.style.display = 'block';
        }
    }
}

