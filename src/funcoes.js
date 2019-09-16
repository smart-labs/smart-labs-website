var intervalo = 2000;

function mudaFoto(foto) {
  document.getElementById("icone").src = foto;
}

function slide1() {
  document.getElementById("banner").src = "fotos/cesar.png";
  setTimeout("slide2()", intervalo);
}

function slide2() {
  document.getElementById("banner").src = "fotos/armazem.png";
  setTimeout("slide3()", intervalo);
}

function slide3() {
  document.getElementById("banner").src = "fotos/difusora.png";
  setTimeout("slide4()", intervalo);
}

function slide4() {
  document.getElementById("banner").src = "fotos/prefeitura.png";
  setTimeout("slide5()", intervalo);
}

function slide5() {
  document.getElementById("banner").src = "fotos/porto.png";
  setTimeout("slide6()", intervalo);
}
function slide6() {
  document.getElementById("banner").src = "fotos/react.png";
  setTimeout("slide1()", intervalo);
}
function alteraFoto1() {
  document.getElementById("Caruaru").src = "fotos/caruaru3.jpg";
  setTimeout("alteraFoto2()", intervalo);
}

function alteraFoto2() {
  document.getElementById("Caruaru").src = "fotos/armazem3.jpeg";
  setTimeout("alteraFoto3()", intervalo);
}

function alteraFoto3() {
  document.getElementById("Caruaru").src = "fotos/difusora2.jpg";
  setTimeout("alteraFoto1()", intervalo);
}
