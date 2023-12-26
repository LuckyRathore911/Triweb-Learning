function product(pName, price) {
  this.prod = pName;
  this.price = price;
}

//-------------------------------------
p1 = new product("Laptop", 80000);
console.log(p1);
console.log(p1.prod);
console.log(p1.pName);

p2 = new product("Mouse", 5000);
console.log(p2);
//-------------------------------------

function customer(cName, pr_name, price) {
  this.customerName = cName;
  product.call(this, pr_name, price); // passes "this" of "customer" and other values to "product"
}
const c1 = new customer("Lucky", "Keyboard", 8000);
console.log(c1);
