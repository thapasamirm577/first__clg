var menuBar = document.querySelector(".menu__bar");
var menuList = document.getElementById('small_menu_list');

menuBar.addEventListener("click",function(){
  if(menuList.style.display === "block"){
    menuList.style.display = "none";
  }else{
    menuList.style.display = "block";
  }
})

/****Careers */

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let chief = document.querySelector('.chief');
let upBtn = document.querySelector('.up');
const windowP = window.innerHeight /2.5;

window.addEventListener("scroll", function(){

  const chiefP = chief.getBoundingClientRect().top;
  if( chiefP < windowP){
    upBtn.classList.add("active_upBtn");
  }else{
    upBtn.classList.remove("active_upBtn");
  }
})

