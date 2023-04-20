function getDayHour() {
  var data = new Date();
  var hora = data.getHours();
  var img = document.getElementById("imagem");
  var frases = document.querySelector(".frases-col");
  var frase = document.querySelector(".p-h2");

  if (hora < 12 && hora > 0) {
    document.querySelector(
      ".p-h2"
    ).innerHTML = `<p>São ${hora} horas <br>Bom dia! </p>`;
    img.src = "imagens/manha.jpg";
    frases.innerHTML = `Bom dia a todos! Está na hora de acordar, respirar fundo e
    aproveitar a beleza das pequenas coisas. Bom dia pra você! Não
    importa se o dia de ontem foi difícil, hoje você pode começar de
    novo, por isso acredite em si mesmo e corra atrás dos seus sonhos!`;
    frase.style.backgroundColor = "#FFD700";
  } else if (hora >= 12 && hora < 18) {
    document.querySelector(
      ".p-h2"
    ).innerHTML = `<p>São ${hora} horas <br>Boa tarde! </p>`;
    img.src = "imagens/tarde.jpg";
    frases.innerHTML = `Boa tarde, pessoal! Que o dia seja produtivo e satisfatório para todos vocês.
    `;
    frase.style.backgroundColor = "	#D2B48C	";
  } else {
    document.querySelector(
      ".p-h2"
    ).innerHTML = `<p>São ${hora} horas <br>Boa noite! </p>`;
    img.src = "imagens/night.jpg";
    frases.innerHTML = `Boa noite! Chegou a hora de suas preocupações se perderem na escuridão e a esperança encontrar o brilho das estrelas. Amanhã será um novo dia! Que todos os sonhos bons que você tiver esta noite logo possam tornar-se realidade.`;
    frase.style.backgroundColor = "rgb(39, 245, 245)	";
  }
}
