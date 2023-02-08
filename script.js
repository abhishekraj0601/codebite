const sections = document.querySelectorAll("section");      
const navLi = document.querySelectorAll("nav .container1 ul li");
var nav = document.getElementById("navbar")
var menu = document.getElementById("menu")
var menu_icon = menu.querySelector(".fa-bars")
var menu_content = document.getElementById("menu-content")


window.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  
  
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      nav.style.background="white";
      nav.style.boxShadow=" 0px 2px 1px 0px #f2f2ff";
      nav.style.position="fixed";
    } else {
      nav.style.background="transparent";
      nav.style.position="absolute";
      nav.style.boxShadow="none";
    }
  };
  

  var list = document.querySelectorAll(".list")
list.forEach(function(elem){
  if(checkSize()){
    elem.addEventListener("click",()=>{
      menu_icon.classList.replace("fa-x","fa-bars")
      menu_content.style.width="0px"
      // menu_content.style.boxShadow="none";
    })
  }
})

function checkSize(){
  var x = window.matchMedia("(max-width:800px)")
  if(x.matches){
      return true;
  }else{
      return false;
  }
}


menu.addEventListener("click",function(){
  if(menu_icon.classList.contains("fa-bars")){
    menu_icon.classList.replace("fa-bars" ,"fa-x")
    menu_content.style.width="300px"  
    // menu_content.style.boxShadow=" 0px 2px 10px 2px rgb(221, 221, 221)";
  }else{
    menu_icon.classList.replace("fa-x","fa-bars")
    menu_content.style.width="0px"
    // menu_content.style.boxShadow="none";

  }
})




function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}