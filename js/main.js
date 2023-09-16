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

document.addEventListener('DOMContentLoaded', function () {
    // Обработка отправки формы
    document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Предотвращаем обычное отправление формы

        // Создаем объект FormData для сбора данных формы
        var formData = new FormData(this);

        // Отправка данных формы на сервер с использованием Fetch API
        fetch('telegram.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) // Предполагаем, что сервер возвращает JSON
        .then(data => {
            // Обработка успешного ответа от сервера (если нужно)
            
            // Отобразить модальное окно
            var modal = document.getElementById('myModal');
            modal.style.display = 'block'; // Показать модальное окно
        })
        .catch(error => {
            // Обработка ошибки (если нужно)
        });
    });
});