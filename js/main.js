let fullscrin__burger = document.querySelector('.fullscrin__burger')

fullscrin__burger.onclick = function(){
    document.querySelector('.fullscrin__burgerMeny').classList.toggle('active');
    fullscrin__burger.classList.toggle('close');
}
function  clickLi(){
    document.querySelector('.fullscrin__burgerMeny').classList.toggle('active');
    fullscrin__burger.classList.toggle('close');
}

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector("img")) {
        ibg[i].style.backgroundImage =
          "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }
  
  ibg();