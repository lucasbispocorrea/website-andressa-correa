<h1 align="center">WEB-SITE ANDRESSA CORREA</h1>

<h2 align="center">Site desenvolvido para a criadora de conteúdo digital, Andressa Correa</h2>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>
<p align="center">A página foi desenvolvida, para divulgação e postagem de cupons e descontos.</p>

<p align="center">
    <a href="https://andressacorrea.lovestoblog.com">
        <img src=https://img.shields.io/badge/📱Visite_o_Site-000?style=for-the-badge&logo=project />
    </a>
</p>


![print-home](./assets/img/Captura%20de%20tela%202025-02-18%20113205.png)

Utilizei HTML e CSS em todas as funcionalidades e páginas, também como Bootstraps e paralax nas imagens do site

![giff-apresentacao](./assets/videos/gif-readme1.gif)

Na página de cupons, foi nescessário utilizar Java Script para o processo de cópia do código do cupom e mensagem de sucesso, e também no dropdown para filtro das categorias de cupons

```bash
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
```

![giff-apresentacao](./assets/videos/gif-readme2.gif)

Na hospedagem, por ora, utilizo a plataforma [InfinityFree](https://dash.infinityfree.com/), que permite hospedagm gratuita, com certificado SSL como segurança






