const http = require("node:http");
const os = require("node:os");
const fs = require("node:fs");

let osOptionsList = [];

//collect functions node:os
for (const property in os) {
  if (typeof os[property] === "function") {
    osOptionsList.push(property);
  }
}

//fill options for select
const optionsHtml = osOptionsList.reduce((acc, item) => {
  acc += `<option value="${item}">${item}</option>`;
  return acc;
}, "");

//base html template
const rootTemplate = `
<!DOCTYPE html>
<head>
    <title>Server Info</title>
    <link href="https://cdn.jsdelivr.net/npm/water.css@2.1.1/out/water.min.css" rel="stylesheet">
</head>
<body>
    <h1>nodeinfo in ASYNC style</h1>
    <label for="op-list">node:os </label>
    <select id="op-list">
        <option value="" selected disabled></option>
        ${optionsHtml}
    </select>
    <input type="checkbox" id="style" style="margin-left: 3rem"/>
    <label for="style">Use Custom style</label>
    <div id="content"></div>
    <script>
        const select = document.querySelector('select');
        select.addEventListener('change', (event) => {
            //console.log(event.target.value);
            fetch('/' + event.target.value)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                })
        })

        const checkbox = document.querySelector('#style');
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                //set link
                const link = document.createElement('link');
                link.type = 'text/css';
                link.rel = 'stylesheet';
                link.href = './style.css';
                document.head.appendChild(link);
            } else {
                //remove link
                const style = document.querySelector('link');
                style.parentNode.removeChild(style);
            }
        })
    </script>
</body>
</!DOCTYPE>
`;

//extract data from object
function getObject(obj) {
  let result = "<ul>";
  for (const key in obj) {
    if (Array.isArray(obj)) {
      result += `<li># ${Number(key) + 1}: `;
    } else {
      result += `<li><key>${key}</key>: `;
    }

    if (typeof obj[key] === "object") {
      result += getObject(obj[key]);
    } else {
      result += ` <value>${obj[key]}</value></li>`;
    }
  }
  return result + "</ul>";
}

//read property from node:os
function getProperty(option) {
  let data = "";
  if (typeof os[option] === "function") {
    try {
      data = os[option]();
      console.log(option, data);
    } catch {
      data = "Error";
    }
  }
  if (typeof data === "object") {
    data = getObject(data);
  }

  //converted memory values to GB
  if (option === "freemem" || option === "totalmem") {
    data = (data / 1024 / 1024 / 1024).toFixed(2) + " GB";
  }

  return data;
}

//start server
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} by method ${req.method}`);

  if (req.method === "GET") {
    if (req.url === "/") {
      //show start page
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(rootTemplate);
    } else if (req.url === "/style.css") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      fs.readFile("./style.css", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("new style received...");
          res.end(data);
        }
      });
    } else {
      //return content for options
      const url = req.url.split("/");
      const option = url[1];
      const data = getProperty(option);
      const result = option + ": " + data.toString();
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/txt");
      res.end(result);
    }
  }
});

if (os.hostname() === "DEVELOP-PC") {
  //start local server
  server.listen(port, hostname, () => {
    console.log(`Local server running at http://${hostname}:${port}/`);
  });
} else {
  //start replit server
  server.listen(port, () => {
    console.log(`Replit server running at port:${port}`);
  });
}
