---
title: Bitcoin Wallet
---

# Bitcoin Wallet

  A Bitcoin wallet includes a specially crafted address (e.g. `13hQVEstgo4iPQZv9C7VELnLWF7UWtF4Q3`) which can be found somewhere on the Bitcoin Blockchain network. Through an API provided by `blockchain.info` we are able to get the number of bitcoins found in every available address. Also through the same API, we are able to get the price of Bitcoin in US dollars and other world currencies.

  Follow the instructions found in the `index.js` file to complete this exercise.

  <details markdown="1">
  <summary><h2>HTML</h2></summary>

  Copy the code below in a file called: `index.html`

  ```html
  <div class="js"></div>
  <div class="wallet">
    <p class="address">
      <strong>Address:</strong>
      <span>13hQVEstgo4iPQZv9C7VELnLWF7UWtF4Q3</span>
    </p>
    <p class="balance">
      <strong>Balance:</strong>
      <span>0</span> BTC
    </p>
    <p class="btcprice">
      <strong>BTC/USD: </strong>
      <span>0</span>
    </p>
    <p class="usd">
      <strong>USD: </strong>
      <span>0</span>
    </p>
    <button id="getBalance">Get Balance</button>
  </div>
  <div class="apis">
    <h3>APIs</h3>
    <p>
    <span>
      Get Bitcoin Address Information (Balance, etc.)
      <a target="_blank" href="https://www.blockchain.com/api/blockchain_api">Blockchain.info</a>
      <br>
      <strong>https://blockchain.info/balance?active=[ADDRESS]&cors=true</strong>
      <br>
      <a target="_blank" href="https://blockchain.info/balance?active=13hQVEstgo4iPQZv9C7VELnLWF7UWtF4Q3&cors=true">Example</a>
    </span>
    </p>

    <p>
    <span>
      Get Bitcoin Price
      <a target="_blank" href="https://www.blockchain.com/explorer/api/exchange_rates_api">Exchange Rates API</a>
      <strong><a href="https://blockchain.info/ticker" target="_blank">https://blockchain.info/ticker</a></strong>
      </span>
    </p>
  </div>
  ```
  </details>

  <details markdown="1">
  <summary><h2>CSS</h2></summary>

  Copy the code below in a file called: `styles.css`

  ```css
  body {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    background-color: #ffcc66;
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .wallet {
    width: 400px;
    border: 2px solid gray;
    border-radius: 16px;
    box-shadow: 0px 0px 32px rgba(0,0,0,0.2);
    background: #f2f2f2;
    padding: 20px;
  }
  #getBalance {
    padding: 10px;
    background: black;
    color: white;
    float: right;
    font-size: 1em;
    border-radius: 10px;
    cursor: pointer;
  }
  .apis {
    width: 400px;
  }
  a {
    text-decoration: none;
    color: black;
    font-style:italic;
  }
  .js:before{
    z-index:-1;
    background: black;
    content: "";
    display: block;
    position: absolute;
    transform: rotate(45deg);
    top:0;
    left:0;
    width: 100%;
    height:100%;
  }
  .js {
    width:200px;
    height:200px;
    color: white;
    top:-100px;
    left:-100px;
    position: fixed;
    z-index:10;
    font-size:2em;
  }
  .js:after{
    content: "JS";
    position:absolute;
    bottom:45px;
    right:45px;
    font-weight:100;
  }

  ```
  </details>

  <details markdown="1">
  <summary><h2>JavaScript</h2></summary>

  Copy the code below in a file called: `index.js`

  ```js
  /* SETUP */
  const $address = document.querySelector(".address span");
  const $balance = document.querySelector(".balance span");
  const $btcPrice = document.querySelector(".btcprice span");
  const $usd = document.querySelector(".usd span");
  const $button = document.getElementById("getBalance");
  let balance = 0;
  // console.log( $address.textContent );

  /* USING PROMISES */
  $button.addEventListener("click", function(event){

    fetch(`https://blockchain.info/balance?active=${$address.textContent}&cors=true `)
    .then((result)=> result.json())
    .then((data)=>{
      
      // console.log( data );
      // 1 BTC === 100000000 Satoshi
      balance = data[ $address.textContent ].final_balance / 100000000; 
      $balance.textContent = balance.toFixed(2);
      return fetch("https://blockchain.info/ticker");
      
    })
    .then((result)=> result.json())
    .then((result)=> {
      
        // 1) Get the USD value for BTC (last) and display the conversion inside the "BTC/USD" section
        // 2) along with the total amount of USD dollars in the "USD" section of the UI
        // 3) Make sure to handle any errors
      })
    });
    
  /* 4) USING ASYNC/AWAIT: Refactor the callback function above into an async/await syntax: */
  $button.addEventListener("click", async function(event){

    
  });  
  ```
  </details>