const header = document.querySelector(".header")
const body = document.querySelector("body")
const headerItem = document.querySelectorAll (".header__item")
const headerItemMedia = document.querySelector(".header__itemMedia")
let lastScrollTop = 0; 
let subMenu = document.querySelector(".sub-menu")

document.cookie = "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// Пример заголовка Cache-Control




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
if (document.body.dataset.page === 'index') {

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
}
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
    headerItemMedia.children[0].style.transform = "rotate(90deg)";
    headerNav.classList.remove("header__nav-active")
    headerList.classList.remove("header__list-active")
    headerBurger.classList.remove("show")
    headerBurger.classList.remove("active")
    body.style.overflow = "inherit"
    headerItemMedia.style.color = ""
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
          
          headerItemMedia.children[0].style.transform = ""
          headerItemMedia.nextElementSibling.style.marginBlockStart = "0px"

          headerItemMedia.children[0].style.transform = "";
          headerItemMedia.children[1].style.opacity = "0"
          headerItemMedia.children[1].style.transform = "scale(0) translateY(0)"
          headerItemMedia.style.color = "white"
          headerItemMedia.children[0].style.transform = "rotate(90deg)"


         
          
          /* aaaaaaaaaaaa */
          




      if (headerItemMedia.children[1].style.display =="none" || headerItemMedia.children[1].style.display ==""){
        headerItemMedia.style.color = "white"
        headerItemMedia.children[0].style.transform = "rotate(90deg)"
/*         headerItemMedia.children[1].style.opacity = "0"
        headerItemMedia.children[1].style.display = ""; */
     
      }
      headerItemMedia.children[1].style.display = ""
  /*     headerItemMedia.children[1].style.display = ""; */
      
  }
/* ффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффф */


  else if (headerBurger.classList.contains("show") && screenWidth <768) {
    headerBurger.addEventListener("click", function(){
      if (headerBurger.classList.contains("show")){
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
      headerItemMedia.children[0].style.transform = "";
      headerItemMedia.children[1].style.opacity = "0"
      headerItemMedia.children[1].style.transform = "scale(0) translateY(0)"
      headerItemMedia.style.color = "white"
      headerItemMedia.children[0].style.transform = "rotate(90deg)"
          if (headerItem[4].children[0].style.transform == "rotate(90deg)"){
            headerItem[5].style.marginBlockStart = "0px";
          }
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
    })
  }

  if (headerItemMedia.nextElementSibling.style.marginBlockStart == "0px"){
    headerItemMedia.children[1].style.display = ""
    isMenuVisible = false;
    
    if (window.innerWidth < 769){
      headerItemMedia.children[1].style.display = "none"
      headerItemMedia.nextElementSibling.style.marginBlockStart = "0px"
      headerItemMedia.style.color = "white"
      headerItemMedia.nextElementSibling.style.transition = "all 0s"
      headerItemMedia.children[0].style.transform = "rotate(90deg)"
      isMenuVisible = false;
    }
    else{
      headerItemMedia.children[0].style.transform = ""
      
    }

  }




  if (window.innerWidth < 768 && window.innerHeight < 600) {
    headerNav.style.overflowY = 'scroll'
  }


  
  
  

}
window.addEventListener("resize", handleResize);
handleResize();


headerItemMedia.addEventListener("click", function(){
  if (window.innerWidth < 769 && isMenuVisible == false) {
    headerItemMedia.children[1].style.display = "block";
    headerItemMedia.nextElementSibling.style.marginBlockStart = "63px";
    isMenuVisible = true;
    headerItemMedia.nextElementSibling.style.transition = "all 0s";
    headerItemMedia.children[0].style.transform = "rotate(270deg)";
    headerItemMedia.style.color = "#ed6703";
    headerItemMedia.children[1].style.opacity = "1"
    headerItemMedia.children[1].style.transform = "scale(1) translateY(0)"
 
  }
  else if (window.innerWidth < 769){
    headerItemMedia.children[1].style.opacity = "1"
    headerItemMedia.children[1].style.display = "none";
    headerItemMedia.nextElementSibling.style.marginBlockStart = "0px";
    headerItemMedia.style.color = "white";
    headerItemMedia.nextElementSibling.style.transition = "all 0s";
    headerItemMedia.children[0].style.transform = "rotate(90deg)";
    headerItemMedia.children[1].style.transform = "scale(1) translateY(0)"
    isMenuVisible = false;
  }
  else {
    headerItemMedia.children[1].style.display = "";
  headerItemMedia.nextElementSibling.style.marginBlockStart = "";
  headerItemMedia.style.color = "";
  headerItemMedia.nextElementSibling.style.transition = "all .3s";
  headerItemMedia.children[0].style.transform = "";
  headerItemMedia.children[1].style.opacity = "1"
  headerItemMedia.children[1].style.transform = "scale(1) translateY(0)"
  isMenuVisible = false;
  }
})

headerItemMedia.addEventListener("mouseover", function(){
  if (window.innerWidth > 769){
  headerItemMedia.children[1].style.display = "";
  headerItemMedia.nextElementSibling.style.marginBlockStart = "";
  headerItemMedia.style.color = "";
  headerItemMedia.nextElementSibling.style.transition = "all .2s";
  headerItemMedia.children[0].style.transform = "";
  headerItemMedia.children[1].style.opacity = "1"
  headerItemMedia.children[1].style.transform = "scale(1) translateY(0)"
  isMenuVisible = false;
  }
})


headerItemMedia.addEventListener("mouseleave", function(){
  if (window.innerWidth > 769){
  headerItemMedia.children[1].style.display = "";
  headerItemMedia.nextElementSibling.style.marginBlockStart = "";
  headerItemMedia.style.color = "";
  headerItemMedia.nextElementSibling.style.transition = "all .2s";
  headerItemMedia.children[0].style.transform = "";
  headerItemMedia.children[1].style.opacity = "1"
  headerItemMedia.children[1].style.transform = "scale(0) translateY(0)"
  isMenuVisible = false;
  }
})

/* headerItemMedia.addEventListener("click", function(){
  if (window.innerWidth > 769){
    headerItemMedia.children[1].style.position ="fixed"
  }
  else{
    headerItemMedia.children[1].style.position ="absolute"
  }

})
 */

if (document.body.dataset.page == 'tournament') {

   // Получить ссылку на таблицу
   const table = document.querySelector('.statistics-table');

   // Получить строки таблицы
   const rows = Array.from(table.querySelectorAll('tbody tr'));

   // Сортировка строк на основе данных в 10-й колонке
   rows.sort((a, b) => {
       const valueA = parseInt(a.cells[9].textContent);
       const valueB = parseInt(b.cells[9].textContent);

       return valueB - valueA; // Сортировка по убыванию
   });

   // Очистить таблицу
   const tbody = table.querySelector('tbody');
   tbody.innerHTML = '';

   // Переберите отсортированные строки и добавьте их в таблицу
   rows.forEach(row => {
       tbody.appendChild(row);
   });

   const teamposition = document.querySelectorAll("tr > td:nth-child(1)")

    let positionCoubn = 1   
   teamposition.forEach((e)=>{
    
    e.innerText = positionCoubn
    positionCoubn++
   })

   /*  */

   const btnStatisticsTable = document.querySelector(".btn-statistics-table")
   const btnStatisticsChess = document.querySelector(".btn-statistics-chess")
   const statisticsTable = document.querySelector(".statistics-table")
   const chess = document.querySelector(".chess")

   btnStatisticsChess.addEventListener("click", function(){
    chess.style.display = "grid"
    statisticsTable.style.display = "none"
    btnStatisticsChess.classList.add("btn-statistics-active")
    btnStatisticsTable.classList.remove("btn-statistics-active")


   })

   btnStatisticsTable.addEventListener("click", function(){
    chess.style.display = "none"
    statisticsTable.style.display = "table"
    btnStatisticsChess.classList.remove("btn-statistics-active")
    btnStatisticsTable.classList.add("btn-statistics-active")
   })

   const stournamentStatistics = document.querySelectorAll(".stournament-statistics > div")
   stournamentStatistics.forEach((elem, index) => {
    elem.addEventListener("click", function(){


      for(i=0; i< stournamentStatistics.length; i++){
        if(i != stournamentStatistics[index]){
          stournamentStatistics[i].classList.add("hide-color")
          stournamentStatistics[i].classList.remove("active-color")
      
        }
      }

      const tournamentInformations = document.querySelectorAll(".container-statistics > div")
      const regionLeagueStatistics = document.querySelectorAll(".regionLeagueStatistics > div")
      tournamentInformations[index].style.display = "none"
      stournamentStatistics[index].classList.add("active-color")

  

      tournamentInformations.forEach((e, indx)=>{
        
        if(index == indx){
          tournamentInformations[indx].style.display = "block"
          regionLeagueStatistics[indx].style.display = "flex"
          
        }
        else{
          tournamentInformations[indx].style.display = "none"
          regionLeagueStatistics[indx].style.display = "none"
          stournamentStatistics[index].classList.remove("hide-color")
  
        }
      })

      


    })
   })

   const gravtsStatisticsScoreGames = document.querySelectorAll(".gravtsStatistics-scoreGames")
   const gravtsStatisticsScoreGals = document.querySelectorAll(".gravtsStatistics-scoreGals")
   const gravtsStatisticsScoreAverage = document.querySelectorAll(".gravtsStatistics-scoreAverage")


   gravtsStatisticsScoreGames.forEach((elem, index) => {
   const avRate = (Number( gravtsStatisticsScoreGals[index].textContent) / Number( gravtsStatisticsScoreGames[index].textContent)).toFixed(2)
   gravtsStatisticsScoreAverage[index].innerHTML = avRate
  })



  }



  const gravtsStatisticsScorers = document.querySelectorAll(".gravtsStatistics-scorers > div")
  const gravtsStatisticsScorersAsisstants = document.querySelectorAll(".gravtsStatistics-assistants > div")
  const gravtsStatisticsGoalPass = document.querySelectorAll(".gravtsStatistics-goalPass > div")



  const sortByGoals = Array.from(gravtsStatisticsScorers)
  const sortbyAssuist = Array.from(gravtsStatisticsScorersAsisstants)

  let outerArray = [];
  let count = 0

  for (let i = 0; i < 11; i++) {
      let innerArray = [];

      outerArray.push(innerArray); 
      for (let j = 0; j < 6; j++) {
        outerArray[i].push(sortByGoals[count].textContent);
        count ++
  }
  
}

let assArr = [];
let assCount = 0

for (let i = 0; i < 11; i++) {
  let innerArrayAssist = [];

  assArr.push(innerArrayAssist); 
  for (let j = 0; j < 6; j++) {
    assArr[i].push(sortbyAssuist[assCount].textContent);
    assCount ++
}

}



/* от 1 до 10  */

const gravtsStatisticsScorersNumber = document.querySelectorAll(".gravtsStatistics-scorers > .gravtsStatistics-scorersNumber")

for(let i = 0; i <gravtsStatisticsScorers.length; i++){
  gravtsStatisticsScorers[i].innerText = outerArray.flat()[i]
}

let countNumber = 1
gravtsStatisticsScorersNumber.forEach(function(e, index){
  gravtsStatisticsScorersNumber[index].innerText = countNumber
  countNumber ++
})



/* фильтр таблицы */
outerArray.sort((a,b) => b[4] - a [4])
assArr.sort((a,b) => b[4] - a [4])


/* отрисовка таблицы */
const gravtsStatisticsScorersId = document.querySelector(".gravtsStatistics-scorers")

const filterTables = function (arr, newArr){
let countContent = 0 
for (let i = 0; i <11; i++){
  for (let b =0; b <6; b++ ){
    arr[countContent].innerText = newArr[i][b]
    countContent ++
  }
}
}


filterTables(sortByGoals, outerArray)
filterTables(sortbyAssuist, assArr)





const StatisticsOfAllPlayers  = document.querySelectorAll(".StatisticsOfAllPlayers  > button")
const gravtsStatistics = document.querySelectorAll(".gravtsStatistics > div");




StatisticsOfAllPlayers.forEach((e,inx)=>{
  

  e.addEventListener("click", function(eb, idd){
    gravtsStatistics[inx].style.display = "grid"
    StatisticsOfAllPlayers[inx].classList.add("btn-statistics-active")
    gravtsStatistics.forEach((eb,dd)=>{
      if (inx != dd){
        gravtsStatistics[dd].style.display = "none"
        StatisticsOfAllPlayers[dd].classList.remove("btn-statistics-active")
      }
    
    })
  })
})


const HallOfFameStatistics = document.querySelectorAll(".HallOfFameStatistics > button")
const HallOfFameWinners = document.querySelectorAll(".HallOfFame > div")


HallOfFameStatistics.forEach((a,o)=>{
  a.addEventListener("click", function(){
   if (o == 0){
    HallOfFameWinners[0].style.display = "block"
    HallOfFameWinners[1].style.display = "block"
   }
   else if (o == 1){
    HallOfFameWinners[0].style.display = "block"
    HallOfFameWinners[1].style.display = "none"
   }
   else{
    HallOfFameWinners[0].style.display = "none"
    HallOfFameWinners[1].style.display = "block"
   }

    HallOfFameStatistics.forEach((n,m)=>{
      HallOfFameStatistics[m].classList.remove("btn-statistics-active")

    })

    HallOfFameStatistics[o].classList.add("btn-statistics-active")

    

  })
})

/* ГУГЛ ДОК */
/*
function downloadHistoricalData () {

function fetchYahooFinanceDataToGoogleSheet() {
  var symbols = ["^GSPC", "^DJI", "^GDAXI", "^FTSE", "GC=F", "GC=F", "GC=F",  "USDJPY=X", "EURJPY=X", "GBPJPY=X", "CADJPY=X", "NZDJPY=X", "AUDJPY=X", "USDCHF=X", "EURCHF=X", "GBPCHF=X", "CADCHF=X", "NZDCHF=X", "AUDCHF=X", "USDMXN=X", "USO", "EURHUF=X", "UNG", "EURUSD=X", "GBPUSD=X", "AUDUSD=X", "NZDUSD=X", "USDCAD=X"];
  var labels = ["US500", "DJI", "DAX", "FTSE", "XAUUSD", "XAUEUR", "XAUGBP", "USDJPY", "EURJPY", "GBPJPY", "CADJPY", "NZDJPY", "AUDJPY", "USDCHF", "EURCHF", "GBPCHF", "CADCHF", "NZDCHF", "AUDCHF", "USDMXN", "USO", "EURHUF", "UNG", "EURUSD", "GBPUSD", "AUDUSD", "NZDUSD", "USDCAD"];
  var baseURL = "https://query1.finance.yahoo.com/v7/finance/download/";
  var period1 = "0";
  var period2 = "9999999999";
  var interval = "1d";
  var events = "history";
  var queryString = "?period1=" + period1 + "&period2=" + period2 + "&interval=" + interval + "&events=" + events;

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("Data");

  if (sheet == null) {
    sheet = spreadsheet.insertSheet("Data");
  }

  var column = 1;

  for (var i = 0; i < symbols.length; i++) {
    var encodedSymbol = symbols[i].replace("^", "%5E");
    var url = baseURL + encodedSymbol + queryString;
    var response = UrlFetchApp.fetch(url);
    var data = Utilities.parseCsv(response.getContentText());
    var dates = data.map(function (row) {
      return [row[0]];
    });
    var closingPrices = data.map(function (row) {
      return [row[4]]; // Измените 4 на индекс колонки с ценой закрытия
    });

    sheet.getRange(1, column).setValue(labels[i]);
    sheet.getRange(2, column, dates.length, 1).setValues(dates);
    sheet.getRange(2, column + 1, closingPrices.length, 1).setValues(closingPrices);
    column += 2;
  }
}

fetchYahooFinanceDataToGoogleSheet();




fetchYahooFinanceDataToGoogleSheet()
}



function myFunction() {
  function updateData() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('Raw Data');

 //   получение данных о дате 
  let data = sheet.getRange('A8:A').getValues();
  var dataArray = []
  let dataCurrencyletter = ["E", "G", "I","K", "M","O","Q","S","U","W","Y","AA","AC","AE","AG","AI","AK","AM","AO","AQ","AS","AU","AW","AY","BA","BC"]
  let dataHistoricalPrices = ["B","D","F","H","J","L", "N","P","R","T","V","X","Z","AB","AD","AF","AH","AJ","AL","AN","AP","AR","AT","AV","AX","AZ","BB","BD"]
  let dataRanges = ["Data!A:B", "Data!C:D", "Data!E:F", "Data!G:H", "Data!I:J", "Data!K:L", "Data!M:N", "Data!O:P", "Data!Q:R", "Data!S:T", "Data!U:V", "Data!W:X", "Data!Y:Z", "Data!AA:AB", "Data!AC:AD", "Data!AE:AF", "Data!AG:AH", "Data!AI:AJ", "Data!AK:AL", "Data!AM:AN", "Data!AO:AP", "Data!AQ:AR", "Data!AS:AT", "Data!AU:AV","Data!AW:AX","Data!AY:AZ", "Data!BA:BB", "Data!BC:BD"];
  var dataRangesEveryOther = ["Data!A:A", "Data!C:C", "Data!E:E", "Data!G:G", "Data!I:I", "Data!K:K", "Data!M:M", "Data!O:O", "Data!Q:Q", "Data!S:S", "Data!U:U", "Data!W:W", "Data!Y:Y", "Data!AA:AA", "Data!AC:AC", "Data!AE:AE", "Data!AG:AG", "Data!AI:AI", "Data!AK:AK", "Data!AM:AM", "Data!AO:AO", "Data!AQ:AQ", "Data!AS:AS", "Data!AU:AU", "Data!AW:AW", "Data!AY:AY", "Data!BA:BA", "Data!BC:BC"];
  let active = ["USDSPX", "DJI", "DAX", "FTSE", "XAUUSD", "XAUEUR", "XAUGBP", "USDJPY", "EURJPY", "GBPJPY", "CADJPY", "NZDJPY", "AUDJPY", "USDCHF", "EURCHF", "GBPCHF", "CADCHF", "NZDCHF", "AUDCHF", "USDMXN", "USO", "EURHUF", "UNG", "EURUSD", "GBPUSD", "AUDUSD", "NZDUSD", "USDCAD"]




  for (var i = 0; i < data.length; i++) {
  var value = data[i][0]; // Получение значения из каждой строки
  if (value !== "") { // Проверка на пустые ячейки
    dataArray.push(value); // Добавление значения в массив
  }

  }


// Заполнение даты в гугл таблице 
for(let b=0; b<dataCurrencyletter.length; b++ ){
  for (var j = 0; j < dataArray.length; j++) {
    Logger.log('Значение ' + (j + 1) + ': ' + dataArray[j]);
    sheet.getRange(dataCurrencyletter[b]+ (j +8)).setValue(dataArray[j])
  }
}

for(let s=0; s<dataHistoricalPrices.length; s++ ){
  for(let u=0; u<dataArray.length  ; u++){
    if (s == 0   ||  s == 1  ||  s == 2   ||  s == 3  ||  s == 4  ||  s == 20 ||  s == 22 ){
      sheet.getRange(dataHistoricalPrices[s]+ (u +8)).setValue("=iferror (if(A" + (u + 8) + ">0, INDEX(" + dataRanges [s] + ", MATCH(VALUE(A" + (u + 8 )  + "), " + dataRangesEveryOther[s] +",0),2)," + '""),' + dataHistoricalPrices[s]+ (u +8 - 1)  + ")")
    }
     else if (s == 5){

      sheet.getRange(dataHistoricalPrices[s]+ (u +8)).setValue(("= J" + (u+ 8) ) + ("/AV"+ (u + 8)  ))
     }
     else if (s == 6){
      sheet.getRange(dataHistoricalPrices[s]+ (u +8)).setValue(("= J" + (u+ 8) ) + ("/AX"+ (u + 8)  ))
    }
    else {
    sheet.getRange(dataHistoricalPrices[s]+ (u +8)).setValue("=iferror (if(A" + (u + 8) + ">0, INDEX(" + dataRanges [s] + ", MATCH(VALUE(A" + (u + 8 + 1)  + "), " + dataRangesEveryOther[s] +",0),2)," + '""),' + dataHistoricalPrices[s]+ (u +8 - 1)  + ")")
  }
  }
}


}

updateData()

}


function createTable() {
function updateData() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Raw Data');

  /* // получение данных о дате 
  let data = sheet.getRange('A8:A').getValues();
  var dataArray = []
  let dataCurrencyletter = ["E", "G", "I","K", "M","O","Q","S","U","W","Y","AA","AC","AE","AG","AI","AK","AM","AO","AQ","AS","AU","AW","AY","BA","BC"]
  let dataHistoricalPrices = ["B","D","F","H","J","L", "N","P","R","T","V","X","Z","AB","AD","AF","AH","AJ","AL","AN","AP","AR","AT","AV","AX","AZ","BB","BD"]
  let dataRanges = ["Data!A:B", "Data!C:D", "Data!E:F", "Data!G:H", "Data!I:J", "Data!K:L", "Data!M:N", "Data!O:P", "Data!Q:R", "Data!S:T", "Data!U:V", "Data!W:X", "Data!Y:Z", "Data!AA:AB", "Data!AC:AD", "Data!AE:AF", "Data!AG:AH", "Data!AI:AJ", "Data!AK:AL", "Data!AM:AN", "Data!AO:AP", "Data!AQ:AR", "Data!AS:AT", "Data!AU:AV","Data!AW:AX","Data!AY:AZ", "Data!BA:BB", "Data!BC:BD"];
  var dataRangesEveryOther = ["Data!A:A", "Data!C:C", "Data!E:E", "Data!G:G", "Data!I:I", "Data!K:K", "Data!M:M", "Data!O:O", "Data!Q:Q", "Data!S:S", "Data!U:U", "Data!W:W", "Data!Y:Y", "Data!AA:AA", "Data!AC:AC", "Data!AE:AE", "Data!AG:AG", "Data!AI:AI", "Data!AK:AK", "Data!AM:AM", "Data!AO:AO", "Data!AQ:AQ", "Data!AS:AS", "Data!AU:AU", "Data!AW:AW", "Data!AY:AY", "Data!BA:BA", "Data!BC:BC"];
  let active = ["USDSPX", "DJI", "DAX", "FTSE", "XAUUSD", "XAUEUR", "XAUGBP", "USDJPY", "EURJPY", "GBPJPY", "CADJPY", "NZDJPY", "AUDJPY", "USDCHF", "EURCHF", "GBPCHF", "CADCHF", "NZDCHF", "AUDCHF", "USDMXN", "USO", "EURHUF", "UNG", "EURUSD", "GBPUSD", "AUDUSD", "NZDUSD", "USDCAD"]

  var columnRange = ["BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ", "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ"];

      for (var i = 0; i < data.length; i++) {
  var value = data[i][0]; // Получение значения из каждой строки
  if (value !== "") { // Проверка на пустые ячейки
    dataArray.push(value); // Добавление значения в массив
  }

  }

  for(let s=0; s<dataHistoricalPrices.length; s++ ){
  for(let u=0; u<dataArray.length -1 ; u++){
     sheet.getRange(columnRange[s]+ (u +8)).setValue("= ln(" + dataHistoricalPrices[s] + (u + 8) + "/" + dataHistoricalPrices[s] + (u + 9) + ")")
  }
  }

}

updateData()

}



function delateData() {
function updateData() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Raw Data');

   // /* получение данных о дате 
  let data = sheet.getRange('A8:A').getValues();
  var dataArray = []
  let dataCurrencyletter = ["E", "G", "I","K", "M","O","Q","S","U","W","Y","AA","AC","AE","AG","AI","AK","AM","AO","AQ","AS","AU","AW","AY","BA","BC"]
  let dataHistoricalPrices = ["B","D","F","H","J","L", "N","P","R","T","V","X","Z","AB","AD","AF","AH","AJ","AL","AN","AP","AR","AT","AV","AX","AZ","BB","BD"]
  let dataRanges = ["Data!A:B", "Data!C:D", "Data!E:F", "Data!G:H", "Data!I:J", "Data!K:L", "Data!M:N", "Data!O:P", "Data!Q:R", "Data!S:T", "Data!U:V", "Data!W:X", "Data!Y:Z", "Data!AA:AB", "Data!AC:AD", "Data!AE:AF", "Data!AG:AH", "Data!AI:AJ", "Data!AK:AL", "Data!AM:AN", "Data!AO:AP", "Data!AQ:AR", "Data!AS:AT", "Data!AU:AV","Data!AW:AX","Data!AY:AZ", "Data!BA:BB", "Data!BC:BD"];
  var dataRangesEveryOther = ["Data!A:A", "Data!C:C", "Data!E:E", "Data!G:G", "Data!I:I", "Data!K:K", "Data!M:M", "Data!O:O", "Data!Q:Q", "Data!S:S", "Data!U:U", "Data!W:W", "Data!Y:Y", "Data!AA:AA", "Data!AC:AC", "Data!AE:AE", "Data!AG:AG", "Data!AI:AI", "Data!AK:AK", "Data!AM:AM", "Data!AO:AO", "Data!AQ:AQ", "Data!AS:AS", "Data!AU:AU", "Data!AW:AW", "Data!AY:AY", "Data!BA:BA", "Data!BC:BC"];
  let active = ["USDSPX", "DJI", "DAX", "FTSE", "XAUUSD", "XAUEUR", "XAUGBP", "USDJPY", "EURJPY", "GBPJPY", "CADJPY", "NZDJPY", "AUDJPY", "USDCHF", "EURCHF", "GBPCHF", "CADCHF", "NZDCHF", "AUDCHF", "USDMXN", "USO", "EURHUF", "UNG", "EURUSD", "GBPUSD", "AUDUSD", "NZDUSD", "USDCAD"]
var columnRange = ["BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ", "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ"];



  for (var i = 0; i < data.length; i++) {
  var value = data[i][0]; // Получение значения из каждой строки
  if (value !== "") { // Проверка на пустые ячейки
    dataArray.push(value); // Добавление значения в массив
  }

  }
  

// Заполнение даты в гугл таблице 
for(let b=0; b<dataCurrencyletter.length; b++ ){
  for (var j = 0; j < dataArray.length; j++) {
    Logger.log('Значение ' + (j + 1) + ': ' + dataArray[j]);
    sheet.getRange(dataCurrencyletter[b]+ (j +8)).setValue("")
  }
}

for(let s=0; s<dataHistoricalPrices.length; s++ ){
  for(let u=0; u<dataArray.length  ; u++){
     
    sheet.getRange(dataHistoricalPrices[s]+ (u +8)).setValue("")
  
  }
}

    for(let m=0; m<dataHistoricalPrices.length; m++ ){
  for(let f=0; f<dataArray.length -1 ; f++){
     sheet.getRange(columnRange[m]+ (f +9)).setValue("")
  }
  }


}

updateData()

}



  let dataCurrencyletter = ["E", "G", "I","K", "M","O","Q","S","U","W","Y","AA","AC","AE","AG","AI","AK","AM","AO","AQ","AS","AU","AW","AY","BA","BC"]
function matrix() {
function updateData() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Raw Data');

// /* получение данных о дате 
  let data = sheet.getRange('A8:A').getValues();
  var dataArray = []
  let dataHistoricalPrices = ["B","D","F","H","J","L", "N","P","R","T","V","X","Z","AB","AD","AF","AH","AJ","AL","AN","AP","AR","AT","AV","AX","AZ","BB","BD"]
  let dataRanges = ["Data!A:B", "Data!C:D", "Data!E:F", "Data!G:H", "Data!I:J", "Data!K:L", "Data!M:N", "Data!O:P", "Data!Q:R", "Data!S:T", "Data!U:V", "Data!W:X", "Data!Y:Z", "Data!AA:AB", "Data!AC:AD", "Data!AE:AF", "Data!AG:AH", "Data!AI:AJ", "Data!AK:AL", "Data!AM:AN", "Data!AO:AP", "Data!AQ:AR", "Data!AS:AT", "Data!AU:AV","Data!AW:AX","Data!AY:AZ", "Data!BA:BB", "Data!BC:BD"];
  var dataRangesEveryOther = ["Data!A:A", "Data!C:C", "Data!E:E", "Data!G:G", "Data!I:I", "Data!K:K", "Data!M:M", "Data!O:O", "Data!Q:Q", "Data!S:S", "Data!U:U", "Data!W:W", "Data!Y:Y", "Data!AA:AA", "Data!AC:AC", "Data!AE:AE", "Data!AG:AG", "Data!AI:AI", "Data!AK:AK", "Data!AM:AM", "Data!AO:AO", "Data!AQ:AQ", "Data!AS:AS", "Data!AU:AU", "Data!AW:AW", "Data!AY:AY", "Data!BA:BA", "Data!BC:BC"];
  let active = ["USDSPX", "DJI", "DAX", "FTSE", "XAUUSD", "XAUEUR", "XAUGBP", "USDJPY", "EURJPY", "GBPJPY", "CADJPY", "NZDJPY", "AUDJPY", "USDCHF", "EURCHF", "GBPCHF", "CADCHF", "NZDCHF", "AUDCHF", "USDMXN", "USO", "EURHUF", "UNG", "EURUSD", "GBPUSD", "AUDUSD", "NZDUSD", "USDCAD"]
var columnRange = ["BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ", "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ"];


  sheet.getRange("CN8").setValue(dataCurrencyletter[1])
 


}

updateData()

}


*/

