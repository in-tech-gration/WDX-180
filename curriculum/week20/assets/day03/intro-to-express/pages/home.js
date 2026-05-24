const menu = require("../components/menu");

const home = (request, response) => {
  response.send(`
    ${menu}
    <h1>Home</h1>
  `)
}

module.exports = home;