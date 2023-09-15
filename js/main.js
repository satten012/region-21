const header = document.querySelector(".header")
let lastScrollTop = 0; 

/* hide/show header */
window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Текущая позиция скролла

  if (scrollTop == 0) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }

  lastScrollTop = scrollTop; 
});

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

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault();
      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", form.getAttribute("action"), true);
      xhr.onload = function () {
          if (xhr.status === 200) {
              alert("Форма успешно отправлена!");
          } else {
              console.error("Произошла ошибка при отправке формы.");
          }
      };
      xhr.send(formData);
  });
});