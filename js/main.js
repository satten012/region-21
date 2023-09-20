const header = document.querySelector(".header")
let lastScrollTop = 0; 

/* hide/show header */
window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Текущая позиция скролла
  let subMenu = document.querySelector(".sub-menu")
  const subMenuLinks = document.querySelectorAll('.sub-menu > li > a');
  if (scrollTop == 0) {
    header.classList.remove("active");
    subMenu.classList.remove("sub-menu-scroll");
    subMenu.classList.remove('scrolled');
  } 
  else {
    header.classList.add("active");
    subMenu.classList.add("sub-menu-scroll");
    subMenu.classList.add('scrolled');
  
  lastScrollTop = scrollTop; 
  }
});
    
  



/* добавление атрибута checked в инпут */

const confidentiality = document.querySelector("#confidentiality")
const agree = document.querySelector("#agree")
confidentiality.addEventListener("click", function(){
    if(agree.hasAttribute("checked")){
        agree.removeAttribute("checked")
    }
    else{
        agree.setAttribute("checked", "checked")
    }
})

/* убрать перезагрузку страницы */

document.addEventListener("DOMContentLoaded", function () {
  let formSecond = document.getElementById("form-2");
  let formFirst = document.getElementById("form-1")


  function blockPage(elem){
    elem.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(elem);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", elem.getAttribute("action"), true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert("Форма успешно отправлена!");
            } else {
                console.error("Произошла ошибка при отправке формы.");
            }
        };
        xhr.send(formData);
    })
  };

  formSecond.addEventListener("click", blockPage(formSecond))
  formFirst.addEventListener("click", blockPage(formFirst))
});

/* mask phone */

const inputBoxLabelPhone = document.querySelectorAll(".input-box__input-phone")


const maskOptions = {
  mask: '+{38}-({0}00)-000-00-00'
};


inputBoxLabelPhone.forEach(input => {
  if (input.tagName === "INPUT") { // Проверяем, что элемент является input
    const mask = IMask(input, maskOptions);
  }
});

const headerBurger = document.querySelector(".header__burger span")
let headerNav = document.querySelector(".header__nav")
let headerList = document.querySelector(".header__list")

headerBurger.addEventListener("click", function(){
  let headerNav = document.querySelector(".header__nav")
  let headerList = document.querySelector(".header__list")
  headerNav.classList.toggle("header__nav-active")
  headerList.classList.toggle("header__list-active")
})


