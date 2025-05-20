const calcTotalPrice = (price:number) =>{

  const tax = price * 0.25; // 1.25 price+tax in one go
  const total = price + tax;
  return total;
}

export default calcTotalPrice; 