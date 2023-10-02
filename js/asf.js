
/* скролл и убрать меню при клике на навигацию */

const headerItem = document.querySelectorAll (".header__item")
headerItem.forEach((elem, index) => {
elem.addEventListener("click", function(){
  headerNav.classList.remove("header__nav-active")
headerList.classList.remove("header__list-active")
let styleElement = document.createElement("style");
const headerLogoImg = document.querySelector(".header__logo img")
const headerBurger = document.querySelector(".header__burger")
headerBurger.classList.remove("active")
headerBurger.classList.remove("show")
if (headerNav.classList.remove("show")){

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

  styleElement.innerHTML = `
  body::before {
  content: "";
  transition:all 1s;
  opacity:0
}
`
document.head.appendChild(styleElement);
headerLogoImg.style.opacity = "1"
headerLogoImg.style.transition = "all 1s"
body.style.position ="static"
}




})
})



/*  */


function showHideMenu (){
  

    headerNav.classList.toggle("header__nav-active")
    headerList.classList.toggle("header__list-active")
    let styleElement = document.createElement("style");
    const headerLogoImg = document.querySelector(".header__logo img")
    const headerBurger = document.querySelector(".header__burger")
    headerBurger.classList.toggle("active")
    headerBurger.classList.toggle("show")
    if (headerNav.classList.toggle("show")){
   
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
  
      styleElement.innerHTML = `
      body::before {
      content: "";
      transition:all 1s;
      opacity:0
    }
  `
    document.head.appendChild(styleElement);
    headerLogoImg.style.opacity = "1"
    headerLogoImg.style.transition = "all 1s"
    body.style.position ="static"
    }
  }
  
  headerBurger.addEventListener("click", function(){
    showHideMenu()
  
  /* скролл и убрать меню при клике на навигацию */
  
    const headerItem = document.querySelectorAll (".header__item")
    headerItem.forEach((elem, index) => {
    elem.addEventListener("click", function(){
      headerNav.classList.remove("header__nav-active")
    headerList.classList.remove("header__list-active")
    let styleElement = document.createElement("style");
    const headerLogoImg = document.querySelector(".header__logo img")
    const headerBurger = document.querySelector(".header__burger")
    headerBurger.classList.remove("active")
    headerBurger.classList.remove("show")
    if (headerNav.classList.remove("show")){
   
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
  
      styleElement.innerHTML = `
      body::before {
      content: "";
      transition:all 1s;
      opacity:0
    }
  `
    document.head.appendChild(styleElement);
    headerLogoImg.style.opacity = "1"
    headerLogoImg.style.transition = "all 1s"
    body.style.position ="static"
    }
  
  
  
  
    })
  })
})







/* фф */


const headerBurger = document.querySelector(".header__burger span")
let headerNav = document.querySelector(".header__nav")
let headerList = document.querySelector(".header__list")

headerBurger.addEventListener("click", function(){
  headerNav.classList.toggle("header__nav-active")
  headerList.classList.toggle("header__list-active")
  let styleElement = document.createElement("style");
  const headerLogoImg = document.querySelector(".header__logo img")
  const headerBurger = document.querySelector(".header__burger")
  headerBurger.classList.toggle("active")
  headerBurger.classList.toggle("show")
  if (headerNav.classList.toggle("show")){
 
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

    styleElement.innerHTML = `
    body::before {
    content: "";
    transition:all 1s;
    opacity:0
  }
`
  document.head.appendChild(styleElement);
  headerLogoImg.style.opacity = "1"
  headerLogoImg.style.transition = "all 1s"
  body.style.position ="static"
  }

/* скролл и убрать меню при клике на навигацию */

  const headerItem = document.querySelectorAll (".header__item")
  headerItem.forEach((elem, index) => {
    console.log(index)
  elem.addEventListener("click", function(){
    headerNav.classList.remove("header__nav-active")
    headerList.classList.remove("header__list-active")
    let styleElement = document.createElement("style");
    const headerLogoImg = document.querySelector(".header__logo img")
    const headerBurger = document.querySelector(".header__burger")
    headerBurger.classList.remove("active")
    headerBurger.classList.remove("show")
    if (headerNav.classList.remove("show")){
   
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
  
      styleElement.innerHTML = `
      body::before {
      content: "";
      transition:all 1s;
      opacity:0
    }
  `
    document.head.appendChild(styleElement);
    headerLogoImg.style.opacity = "1"
    headerLogoImg.style.transition = "all 1s"
    body.style.position ="static"
    }
})


  })

})
