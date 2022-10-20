 let products = [
     {product: "Gummy Worms", price: 5.79},
     {product: "Plain M&Ms", price: 2.89},
     {product: "Peanut M&Ms", price: 2.89},
     {product: "Swedish Fish", price: 3.79},
     {product: "Whatchumacallit", price: 5.00},
     {product: "Snickers", price: 3.00},
     {product: "Sour Patch Kids", price: 2.57}
 ]

 //let cheaperProducts = products.filter((product) => product.price < 4.0);
 //console.log(cheaperProducts);

 let mmCandies = products.filter((product) => product.product.ind ("M&M") !== -1);
console.log(mmCandies);