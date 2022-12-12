let DIV = content.innerHTML;
stat = false;

newPage = () => {
  content.innerHTML = DIV;
  changeMe.innerHTML = " ";
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
  changeMe.innerHTML = changed.length;
  stat = true;
  input.value = "";
}

let url = document.querySelector(".urlInput");
let tess = document.querySelector(".founted");
let poiskButt = document.querySelector(".poisk");

function one() {}

poiskButt.addEventListener("click", () => {
  fetch(url.value)
    .then((resp) => {
      return resp.text();
    })
    .then((resBody) => {
      content.innerHTML = resBody;
      DIV = resBody;
      console.log(DIV);
    });
});

// poiskButt.addEventListener(
//   "click",
//   () => {
//     let http = new XMLHttpRequest();
//     http.open("GET", url.value);
//     http.onreadystatechange = function () {
//       if (this.readyState == 2) {
//         input.disabled = true;
//       }
//       if (this.readyState == 4 && this.status == 200) {
//         content.innerHTML = this.response;
//         input.disabled = false;
//         console.log(tess);
//       }
//     };
//     http.send(null);
//   },
//   false
// );
