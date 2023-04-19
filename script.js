function getDayHour() {
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  var sec = data.getSeconds();
  var img = document.getElementById("imagem");

  if (hora < 12 && hora > 0) {
    document.querySelector(
      ".p-h2"
    ).innerHTML = `<p>São ${hora} horas <br>Bom dia! </p>`;
    img.src = "imagens/manha.jpg";
    document.body.style.background = "#4c1c05";
  } else if (hora > 12 && hora < 18) {
    document.querySelector(
      ".p-h2"
    ).innerHTML = `<p>São ${hora} horas <br>Boa tarde! </p>`;
    img.src = "imagens/tarde.jpg";
  } else {
    document.querySelector(
      ".p-h2"
    ).innerHTML = `<p>São ${hora} horas <br>Boa noite! </p>`;
    img.src = "imagens/night.jpg";
  }
}
