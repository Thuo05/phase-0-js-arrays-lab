const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct () {
  console.log(products [0]);


}
function addProduct(name) {
  products.push(name);
}


function updateProductName(index, newName) {
  products[index] = newName;
}
const removeLastProduct = ()=>{

  products.pop([3])
}

module.exports ={
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct,
  products
}

