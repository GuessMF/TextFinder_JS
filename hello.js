//const {exec} = require("child_process");

// exec("mk dir 123", (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

app.get("/", function (req, res) {
  request.post(
    {
      url: "https://ru.wikipedia.org/",
      form: {key: "value"},
    },
    function (err, httpResponse, body) {
      console.log(body);
      res.json(JSON.parse(body));
    }
  );
});

let btn = document.getElementById("test");
let res = document.getElementById("res");

btn.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/");
  xhr.send();

  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let data = JSON.parse(xhr.response);
      console.log(data);
      res.innerHTML = data.token;
    }
  });
});
