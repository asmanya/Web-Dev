const product = {
    itemName:'Flower',
    price: 50,
    discount: 5,
    itemCode: 'f40'
};

//factory function

function myProduct(item,price,discount,itemCode){
    
    return {
        itemName:item,
        price: price,
        discount: discount,
        itemCode: itemCode
    }
}

const Football = myProduct("Football",1000,50,"F30");

//Constructor function

function Product(item,price,discount,itemCode){
    this.itemName = item;
    this.price = price;
    this.discountValue = function(){
        return  price * discount/100;
    }
    this.itemCode = itemCode;
}

const Mobile = new Product("Apple",50000,1000,"iPhone11");