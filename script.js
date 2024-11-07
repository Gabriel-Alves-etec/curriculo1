
function ativarAudio() {
    document.getElementById('meuAudio').play();
    document.getElementById('welcome').style.display = 'none'; // Esconde a mensagem inicial
}

// abaixo o java script do slide

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });
  