# Slack Messages: Week 19 (26/02/202 - 01/03/2024)

## 26/02/2024

## 27/02/2024

- Here's the plan for today.
  - 1) Create a basic Nodejs Webserver that serves a simple HTML form with an email and password input fields. You must be able to login successfully using the email "admin@gmail.com" and password "1234" and see an admin page (be creative) otherwise an unauthorized page.
  - 2) Try out the fetch API in Node.js: replace kostasx with your GitHub username
```js
const URL = "https://api.github.com/users/kostasx";
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    // console.log the name, company and location from the data
    // In the following format "<name> is currently working at <company> and is based in <location>", example "Kostas Minaidis is working at Intechgration.io and is based in Athens, Greece / Berlin, Germany"

    console.log(data.name, data.company, data.location);
  })
  .catch((error) => console.error("Error:", error));
```
  - 3) Integrate the above code into a [web server](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs#an-example-nodejs-application){:target="_blank"}
  - 4) Create another Nodejs Web server that displays fetches and displays jokes from the following [API 1](https://v2.jokeapi.dev/joke/Programming){:target="_blank"} [API 2](https://sv443.net/jokeapi/v2/){:target="_blank"}
  - 5) Extra: Download [this JSON](https://github.com/dr5hn/countries-states-cities-database/blob/master/countries.json){:target="_blank"} and create a Nodejs webserver that accepts a request through the URL with the name of a country and searches through the JSON to find information for that country. It then sends back the appropriate object to the client in either JSON or HTML format


- :bulb: Remember to always handle errors in a graceful and informative manner: console.log(error) is not enough! :warning:
```js
const result = await fetch(url)
    .then((response) => { return response.json(); })
    .then((data) => { return data; })
    .catch((err) => { console.log(err); }); // <= This one should also return something useful back
```

## 28/02/2024

## 29/02/2024

## 01/03/2024
