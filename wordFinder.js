//Подсчет убрал так как на некоторых сайтах есть русские буквы в тегах HTML и функция их тоже считает

let DIV = content.innerHTML;
stat = false;

// url.addEventListener("input", () => {
//   url.value = url.value.replace(/[а-я]/gi, "");
// });

input.addEventListener("input", () => {
  input.value = input.value.replace(/[a-z]/gi, "");
});

newPage = () => {
  content.innerHTML = DIV;
  //changeMe.innerHTML = " ";
};
found.addEventListener("click", () => {
  newCheck();
});

input.addEventListener("click", () => {
  stat == true ? newPage() : console.log("");
});

function newCheck() {
  changed = []; //для отслеживания колличества изменений
  content = document.getElementById("content");
  mass = content.innerHTML.split("");
  for (n = 0; n < mass.length; n++) {
    if (mass[n] == input.value) {
      mass[n] = "<font color=red>" + mass[n] + "</font>"; //добавление цвета
      content.innerHTML = mass.join(""); // новая html с измененным цветом
      changed.push(mass[n]); // добавление в массив измененных символов
    }
  }
  //changeMe.innerHTML = changed.length;
  stat = true;
  input.value = "";
}
//Без прокси работает только с Allow CORS: Access-Control-Allow-Origin расширение Chrome
urlSearchButt.addEventListener("click", () => {
  loadStat = false; //Статус загрузки страницы
  fetch("http://cors-anywhere.herokuapp.com/" + url.value) //обход CORS через прокси
    .then((resp) => {
      if (resp.status === 200) {
        loadStat = true; //Придание статусу Тру
        console.log(resp.status);
        return resp.text(); // Возвращаем текст страницы
      }
    })
    .then((resBody) => {
      //str = resBody;
      if (loadStat === true) {
        content.innerHTML = resBody.slice(
          resBody.indexOf("<body"),
          resBody.indexOf("</body")
        );
        // Меняет свой текст на загруженный отсекая все кроме body
        DIV = resBody.slice(
          resBody.indexOf("<body"),
          resBody.indexOf("</body")
        ); // Сохраняем в исходник загруженные текст без измененных букв
      } else {
        alert(
          "Введите корректную ссылку или пройдите по ссылке в консоли для отключения CORS"
        );
      }
    });
});

let ffff;
