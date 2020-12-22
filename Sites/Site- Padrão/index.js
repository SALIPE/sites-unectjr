
//controle do modal
function mostramodal(){
    var modal = document.getElementById('modal');
        modal.style.display = "block";
    
}
function sair(){
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
//efeitos ilustrativos modal
function mostraEnvio(){
  window.alert("Pergunta enviada com sucesso!");
  modal.style.display = "none";
}

//controle de imagens
let time = 5000,
    currentImage = 0,
    images = document.querySelectorAll('#slider img')
    max = images.length;

function proximaImagem(){
  images[currentImage].classList.remove("selected");
  currentImage++;
  if(currentImage >= max){
    currentImage = 0;
  }
  images[currentImage].classList.add("selected");
}
function imagemAnterior(){
  images[currentImage].classList.remove("selected");
  currentImage--;
  if(currentImage < 0){
    currentImage = max-1;
  }
  images[currentImage].classList.add("selected");
}

function start(){
  setInterval(()=>{
    //troca de imagens
    proximaImagem();
  }, time);

}

window.addEventListener("load", start);