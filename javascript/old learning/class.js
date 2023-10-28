//Declaring a class
class Product {
    constructor(itemName){
        this.itemName = itemName;
    }
    getItemNamwe(){
        return this.itemName + " is a Product."
    }
} 

class furniture extends Product{
    constructor(itemName){
        super(itemName);
    }
    getItemNamwe(){
        return this.itemName + " is a furniture."
    }
}

let pencil = new Product("Pencil",20, 2 , "P10");
let chair = new Product("chair",499,15,"C10");

// const Product1 = class {
//     constructor(itemName, price, discount, productCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
//     get getDiscountValue(){
//         return this.discount
//     }
//     set setDiscountValue(value){
//         this.discount = value;
//     }
//     discountValue(){
//         return this.discount*this.price/100;
//     }
// };
