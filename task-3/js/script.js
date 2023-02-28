import { Product } from "./product.js";

const products = [
  new Product("Xiaomi Redmi 10C", 11000, 10, "смартфон"),
  new Product("Apple iPhone 13", 70000, 4, "смартфон"),
  new Product("Honor 70 256 ГБ", 40000, 8, "смартфон"),
  new Product("Apple iPhone 14 Pro", 122000, 2, "телефон"),
  new Product("Xiaomi Redmi Note 11S", 20000, 9, "телефон"),

  new Product("тетрадь", 50, 50, "канцтовар"),
  new Product("линейка", 40, 30, "канцтовар"),
  new Product("фломастеры", 200, 3, "канцтовар"),
  new Product("синяя ручка", 45, 50, "канцтовар"),
  new Product("ручка красная", 45, 50, "канцтовар"),
  new Product("ручка чёрная", 45, 40, "канцтовар"),
  new Product("гелевая ручка чёрная", 45, 50, "канцтовар"),
  new Product("гелевая ручка красная", 40, 50, "канцтовар"),
  new Product("ножницы", 80, 10, "канцтовар"),
];

let condition1 = "price->=50&price-<15000";
let condition2 = "price-<=40000&description-ends-фон";
let condition3 = "name-contains-ручка&quantity-=50&price-=45";
let condition4 = "name-starts-Xiaomi";

console.log(Product.selectByCondition(products, condition1));
console.log(Product.selectByCondition(products, condition2));
console.log(Product.selectByCondition(products, condition3));
console.log(Product.selectByCondition(products, condition4));
