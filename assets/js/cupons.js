
//mensagem de cupom copiado
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        event.preventDefault(); // Previne o comportamento padrão do link
                
        const couponCode = this.previousElementSibling.innerText; // Pega o código
        const message = `Código do cupom "${couponCode}" copiado com sucesso!`; // Mensagem personalizada
        const notification = document.getElementById('notification');

        navigator.clipboard.writeText(couponCode).then(() => {
            notification.innerText = message; // Atualiza a mensagem
            notification.style.display = 'block'; // Mostra a notificação
            setTimeout(() => {
                notification.style.opacity = '0'; // Adiciona efeito de fade-out
                setTimeout(() => {
                    notification.style.display = 'none'; // Oculta após o fade-out
                    notification.style.opacity = '1'; // Reseta a opacidade
                }, 500);
            }, 2000); // Mostra a notificação por 2 segundos
        }).catch(err => {
            console.error('Erro ao copiar o código: ', err);
            notification.innerText = 'Ocorreu um erro ao copiar o código.'; // Mensagem de erro
            notification.style.display = 'block'; // Mostra a notificação
            setTimeout(() => {
                notification.style.opacity = '0'; // Fade-out
                setTimeout(() => {
                    notification.style.display = 'none'; // Oculta após o fade-out
                    notification.style.opacity = '1'; // Reseta a opacidade
                }, 500);
            }, 2000); // Mostra a notificação de erro por 2 segundos
        });
    });
});

//apenas um alerta para o console do navegador, para carregamento em resoluções menores
document.addEventListener('DOMContentLoaded', function(){
    console.log("Página carregada")
})


//função para filtrar cupons
function filterCoupons() {
    let searchTerm = document.getElementById('input-busca').value.toLowerCase();
    
    let coupons = document.querySelectorAll('.cupom');
    
    coupons.forEach(function(coupon) {
        let textContent = coupon.textContent.toLowerCase();
        
        if (textContent.includes(searchTerm)) {
            coupon.style.display = ''; // Exibe o cupom
        } else {
            coupon.style.display = 'none'; 
        }
    });
}