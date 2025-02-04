import { getCardFromLs } from "./getCardfromLs";
import { total } from "./totat";


total() 




export const incrementDecrement=(event, id,  price,stoke)=>{
    const cardElmId =document.querySelector( `#card${id}`)
    console.log(cardElmId)
    total()

const productPrice = cardElmId.querySelector(".productPrice")
    const productQuantity = cardElmId.querySelector(".productQuantity")

 let quantity = parseInt(cardElmId.querySelector(".productQuantity").innerText);
 let localStoragePrice = 0;
 


 let localCards = getCardFromLs()



 let exsinting = localCards.find((card)=>{
    card.id === id 
 })


if(exsinting){

    quantity =exsinting.productQuantity

    localStoragePrice ==exsinting.price
}else {
    localStoragePrice = price;
    price = price
}




if(event.target.className == "cardIncrement"){
    if(quantity < stoke){
     quantity +=1;
    }else if (quantity == stoke){
        quantity == stoke

        localStoragePrice = price*stoke
    }
}

if(event.target.className == "cardDecrement"){
    if(quantity > 1){
        quantity-=1
    }
}
console.log(quantity)
productQuantity.setAttribute("data-quantity",quantity)
productQuantity.innerText = quantity;
console.log(productQuantity)


localStoragePrice = Number(price * quantity)


let updateCart = {id, productQuantity:quantity, price:localStoragePrice}

updateCart = localCards.map((card)=>{
    return card.id === id ? updateCart : card
})
productPrice.inn = localStoragePrice


localStorage.setItem("cardProductsLs",JSON.stringify(updateCart))



}