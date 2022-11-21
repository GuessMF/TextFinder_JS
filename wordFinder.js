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
// let url = new URL("https://ru.wikipedia.org/?l=");
// console.log(url.body.innerHTML);

// poisk = document.querySelector(".poisk");

// poisk.addEventListener("click", () => {
//   console.log("poisk click");
// });

// linka = document.querySelector(".linka");

// console.log(linka);

// function makeRequest(url) {
//   var httpRequest = false;

//   if (window.XMLHttpRequest) {
//     // Mozilla, Safari, ...
//     httpRequest = new XMLHttpRequest();
//     if (httpRequest.overrideMimeType) {
//       httpRequest.overrideMimeType("text/xml");
//       // Читайте ниже об этой строке
//     }
//   } else if (window.ActiveXObject) {
//     // IE
//     try {
//       httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
//     } catch (e) {
//       try {
//         httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
//       } catch (e) {}
//     }
//   }

//   if (!httpRequest) {
//     alert("Не вышло :( Невозможно создать экземпляр класса XMLHTTP ");
//     return false;
//   }
//   httpRequest.onreadystatechange = function () {
//     alertContents(httpRequest);
//   };
//   httpRequest.open("GET", url, true);
//   httpRequest.send(null);
// }

// function alertContents(httpRequest) {
//   if (httpRequest.readyState == 4) {
//     if (httpRequest.status == 200) {
//       alert(httpRequest.responseText);
//     } else {
//       alert("С запросом возникла проблема.");
//     }
//   }
// }

function makeHttpObject() {
  try {
    return new XMLHttpRequest();
  } catch (error) {}
  try {
    return new ActiveXObject("Msxml2.XMLHTTP");
  } catch (error) {}
  try {
    return new ActiveXObject("Microsoft.XMLHTTP");
  } catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

var request = makeHttpObject();
request.open(
  "GET",
  "https://www.delftstack.com/howto/javascript/javascript-get-html-from-url/",
  true
);
request.send(null);
request.onreadystatechange = function () {
  if (request.readyState == 4) console.log(request.responseText);
};
