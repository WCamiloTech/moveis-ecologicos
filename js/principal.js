var banners = [
    "Do lixo ao luxo!", "Reaproveitar é aproveitar"
];

var bannersAtual = 0;

function trocaBanner(){
    bannersAtual = (bannersAtual + 1) % 2;
    document.querySelector('h2#mensagem').textContent = banners[bannersAtual];
}

setInterval(trocaBanner, 1000);