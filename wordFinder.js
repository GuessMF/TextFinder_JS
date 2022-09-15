const DIV = content.innerHTML;
stat = false;

newPage = () => {
  content.innerHTML = DIV;
  changeMe.innerHTML = " ";
};
found.addEventListener("click", () => {
  newCheck();
});

input.addEventListener("click", () => {
  stat == true ? newPage() : console.log("no");
});

function newCheck() {
  massives = [];
  spansLength = document.getElementsByTagName("span").length; // колличество спанов в документе
  words = []; //для отслеживания колличества изменений
  for (i = 1; i < spansLength + 1; i++) {
    body = document.getElementById(i); //все имеющиеся спаны (в скобках айди)
    mass = body.innerHTML.split(""); // посимвольное добавление в массив каждого спана
    massives.push(mass);
    for (i = 0; i < massives.length; i++) {
      for (n = 0; n < massives[i].length; n++) {
        if (massives[i][n] == input.value) {
          massives[i][n] = "<font color=red>" + massives[i][n] + "</font>"; //добавление цвета
          body.innerHTML = mass.join(""); // новая html с измененным цветом
          words.push(massives[i][n]); // добавление в массив измененных символов
        }
      }
    }
  }
  changeMe.innerHTML = words.length;
  stat = true;
  input.value = "";
}
