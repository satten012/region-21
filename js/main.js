const header = document.querySelector(".header")
const body = document.querySelector("body")
const headerItemMedia = document.querySelector(".header__itemMedia")
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


/* -------------------- */
const headerBurger = document.querySelector(".header__burger")
let headerNav = document.querySelector(".header__nav")
let headerList = document.querySelector(".header__list")

 headerBurger.addEventListener("click", function(e){
  e.stopPropagation()


  function showHideMenu (){
  if (window.innerWidth < 768 && window.innerHeight < 600) {
    headerNav.style.overflowY = 'scroll'
  }

  headerNav.addEventListener("click", function(e){
    e.stopPropagation()
  })

  headerNav.classList.toggle("header__nav-active")
  headerList.classList.toggle("header__list-active")
  let styleElement = document.createElement("style");
  const headerLogoImg = document.querySelector(".header__logo img")
  const headerBurger = document.querySelector(".header__burger")
  headerBurger.classList.toggle("active")
  headerBurger.classList.toggle("show")
  if (headerNav.classList.toggle("show")){
    body.style.overflow = "hidden"
  styleElement.innerHTML = `
    body::before {
    content: "";
    position: fixed;
    background-color: black;
    height: 100%;
    width: 100vw;
    z-index: 10;
    opacity: 0.8;
    transition:all 0s;
    display:block;
    right:0;
    z-index:9
    }`;
  document.head.appendChild(styleElement);
  headerLogoImg.style.opacity = "0.4"
  body.style.position = "static"
  headerLogoImg.style.transition = "all 0s"
  }

  else{

    body.style.overflow = "inherit"
    styleElement.innerHTML = `
    body::before {
    content: "";
    transition:all 1s;
    opacity:0;
    z-index:-1;
  }
`
  document.head.appendChild(styleElement);
  headerLogoImg.style.opacity = "1"
  headerLogoImg.style.transition = "all 1s"
  body.style.position ="static"
  }


  const headerItem = document.querySelectorAll (".header__item")
  headerItem.forEach((elem, index) => {

  elem.addEventListener("click", function(){
    if(index != 4){
    headerNav.classList.remove("header__nav-active")
    headerList.classList.remove("header__list-active")
    let styleElement = document.createElement("style");
    const headerLogoImg = document.querySelector(".header__logo img")
    const headerBurger = document.querySelector(".header__burger")
    headerBurger.classList.remove("active")
    headerBurger.classList.remove("show")
          if (headerNav.classList.remove("show")){
            body.style.overflow = "hidden";
          styleElement.innerHTML = `
          body::before {
            content: "";
            position: fixed;
            background-color: black;
            height: 100%;
            width: 100vw;
            z-index: 10;
            opacity: 0.8;
            transition:all 0s;
            display:block;
            right:0;
            z-index:9
            }`;
          document.head.appendChild(styleElement);
          headerLogoImg.style.opacity = "0.4"
          body.style.position = "static"
          headerLogoImg.style.transition = "all 0s"
          }
        
          else{
            body.style.overflow = "inherit"
            styleElement.innerHTML = `
            body::before {
            content: "";
            transition:all 1s;
            opacity:0;
            z-index:-1;
          }
        `
          document.head.appendChild(styleElement);
          headerLogoImg.style.opacity = "1"
          headerLogoImg.style.transition = "all 1s"
          body.style.position ="static"
          }
  }
  else{
/*     this.classList.remove("submenuSmall")
    console.log(this.children[1])
    this.children[1].classList.remove("submenuSmall")
 */
    
  }
})


  })

  }

  showHideMenu()

  

  
})




/* ---------------------------- */

/* hide/show header (width) */

// Функция, которая будет выполняться при изменении размера окна
let isMenuVisible = false;
function handleResize() {
  const screenWidth = window.innerWidth;
  const headerLogoImg = document.querySelector(".header__logo img")
  let styleElement = document.createElement("style");
  if (screenWidth >768){
    headerNav.classList.remove("header__nav-active")
    headerList.classList.remove("header__list-active")
    headerBurger.classList.remove("show")
    headerBurger.classList.remove("active")
    body.style.overflow = "inherit"
            styleElement.innerHTML = `
            body::before {
            content: "";
            transition:all 1s;
            opacity:0;
            z-index:-1;
          }
        `
          document.head.appendChild(styleElement);
          headerLogoImg.style.opacity = "1"
          headerLogoImg.style.transition = "all 1s"
          body.style.position ="static"

          /* -----00 */
          headerItemMedia.nextElementSibling.style.marginBlockStart = "0px"
          headerItemMedia.children[0].style.transform = "rotate(90deg)"
/* 
    headerItemMedia.nextElementSibling.style.marginBlockStart = "0px"
    headerItemMedia.nextElementSibling.style.transition = "all 0s"
    headerItemMedia.children[0].style.transform = "rotate(90deg)" */
  }


  /* TYT !!!sa */
/*   if (screenWidth <=768){
    headerItemMedia.children[1].style.display = "none"
    headerItemMedia.style.color = "white"
    isMenuVisible = false; 
  } */

  if (headerNav.classList.remove("show")){
    body.style.overflow = "hidden";
  styleElement.innerHTML = `
  body::before {
    content: "";
    position: fixed;
    background-color: black;
    height: 100%;
    width: 100vw;
    z-index: 10;
    opacity: 0.8;
    transition:all 0s;
    display:block;
    right:0;
    z-index:9
    }`;
  document.head.appendChild(styleElement);
  headerLogoImg.style.opacity = "0.4"
  body.style.position = "static"
  headerLogoImg.style.transition = "all 0s"
  }


}
window.addEventListener("resize", handleResize);
handleResize();


headerItemMedia.addEventListener("click", function(){
  if (window.innerWidth < 769 && isMenuVisible == false) {
    headerItemMedia.children[1].style.display = "block"
    headerItemMedia.nextElementSibling.style.marginBlockStart = "63px"
    isMenuVisible = true;
    headerItemMedia.nextElementSibling.style.transition = "all 0s"
    headerItemMedia.children[0].style.transform = "rotate(270deg)"
    headerItemMedia.style.color = "#ed6703"
  }
  else if (window.innerWidth < 769){
    headerItemMedia.children[1].style.display = "none"
    headerItemMedia.nextElementSibling.style.marginBlockStart = "0px"
    headerItemMedia.style.color = "white"
    headerItemMedia.nextElementSibling.style.transition = "all 0s"
    headerItemMedia.children[0].style.transform = "rotate(90deg)"
    isMenuVisible = false;
  }
})



/* ---- */

// Функция для плавной прокрутки к элементу

