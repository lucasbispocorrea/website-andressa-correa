// Função para copiar o código do cupom
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(event) { 
        event.preventDefault();

        const couponCode = this.previousElementSibling.innerText; 
        const message = `Código do cupom "${couponCode}" copiado com sucesso!`; // Mensagem personalizada
        const notification = document.getElementById('notification');

        // Usando o Clipboard API para copiar o código para a área de transferência
        navigator.clipboard.writeText(couponCode).then(() => {
            notification.innerText = message; // Atualiza a mensagem
            notification.style.display = 'block'; 
            setTimeout(() => {
                notification.style.opacity = '0'; // Efeito de fade-out
                setTimeout(() => {
                    notification.style.display = 'none'; // Oculta a notificação após o fade-out
                    notification.style.opacity = '1'; 
                }, 500);
            }, 2000); // Exibe a notificação por 2 segundos
        }).catch(err => {
            console.error('Erro ao copiar o código: ', err);
            notification.innerText = 'Ocorreu um erro ao copiar o código.'; 
            notification.style.display = 'block'; // Exibe a notificação
            setTimeout(() => {
                notification.style.opacity = '0'; 
                setTimeout(() => {
                    notification.style.display = 'none'; 
                    notification.style.opacity = '1'; 
                }, 500);
            }, 2000); 
        });
    });
});

// Função para filtrar cupons pela busca
function filterCoupons() {
    let searchTerm = document.getElementById('input-busca').value.toLowerCase();
    let coupons = document.querySelectorAll('.cupom');

    coupons.forEach(function(coupon) {
        let textContent = coupon.textContent.toLowerCase();
        if (textContent.includes(searchTerm)) {
            coupon.style.display = ''; 
        } else {
            coupon.style.display = 'none'; 
        }
    });
}

// Função para exibir o menu de filtro quando o botão de categorias for clicado
function toggleDropdown() {
    const dropdownContent = document.getElementById("categorias");
    dropdownContent.classList.toggle('show'); // Adiciona ou remove a classe 'show' para mostrar/esconder o dropdown
}

// Função para filtrar cupons por categoria e atualizar o título
function filterByCategory(category) {
    const cupons = document.querySelectorAll('.cupom');
    const categoriaTitulo = document.getElementById('categoria-titulo'); 

    // Atualiza o título com base na categoria selecionada
    if (category === 'todos') {
        categoriaTitulo.innerText = 'Todos os Cupons'; // Exibe 'Todos os Cupons' se a categoria for "todos"
    } else if (category === 'viagens') {
        categoriaTitulo.innerText = 'Viagens e Turismo';
    } else if (category === 'saude') {
        categoriaTitulo.innerText = 'Saúde e Bem-estar';
    } else if (category === 'moda') {
        categoriaTitulo.innerText = 'Moda e Acessórios';
    } else if (category === 'cosmeticos') {
        categoriaTitulo.innerText = 'Cosméticos e Beleza';
    } else if (category === 'casa') {
        categoriaTitulo.innerText = 'Casa e Decoração';
    } else if (category === 'negocios') {
        categoriaTitulo.innerText = 'Desenvolvimento Pessoal e Negócios';
    }

    // Exibe ou oculta os cupons conforme a categoria
    if (category === 'todos') {
        cupons.forEach(cupom => {
            cupom.style.display = 'block'; // Exibe todos os cupons
        });
    } else {
        cupons.forEach(cupom => {
            if (cupom.classList.contains(category)) {
                cupom.style.display = 'block'; // Exibe os cupons da categoria
            } else {
                cupom.style.display = 'none'; 
            }
        });
    }

    // Fechar o menu de filtro após a seleção de categoria
    const dropdownContent = document.getElementById("categorias");
    dropdownContent.classList.remove('show'); // Remove a classe 'show' para esconder o dropdown após a seleção
}

// Fechar o filtro caso clique fora dele
window.onclick = function(event) {
    const dropdownContent = document.getElementById("categorias");
    if (!event.target.matches('.dropdown, .dropdown *')) {
        dropdownContent.classList.remove('show'); // Remove a classe 'show' ao clicar fora do menu
    }
};
