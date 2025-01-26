"use strict";


let products = [
  {
    name: "macbook pro",
    category: "laptop",
    price: 1200,
    brand: "Apple",
    image: ""
  },
  {
    name: "iPhone 13 Pro Max",
    category: "smartphone",
    price: 1000,
    brand: "Apple",
    image: "https://external.webstorage.gr/mmimages/image/51/65/7/93/1641088-264x264-800x800-96x96-560x560.jpg"
  },
  {
    name: "Logitech MX Keys",
    category: "gadget",
    price: 120,
    brand: "Logitech",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-keys-s/product-gallery/graphite/mx-keys-s-keyboard-top-view-graphite-us-intl.png?v=1"
  }]


consol.log(document.getElementById("products"))
// document.getElementById("products").innerHTML = products.map(product => `

// <div class="product">

// <img src="${product.image}" alt="${product.name}">
// <h3>${product.name}</h3>
// <p>${product.category}</p>
// <p>${product.price}</p>
// <p>${product.brand}</p>
// `)
