export const homeQuantityToggle=(event,id, stoke)=>{

    const cardElmId =document.querySelector( `#card${id}`)
    console.log(cardElmId)


    const productQuantity = cardElmId.querySelector(".productQuantity")


   let quantity = parseInt(productQuantity.getAttribute("data-quantity"))||1


    if(event.target.className == "cardIncrement"){
        if(quantity < stoke){
         quantity +=1;
        }else if (quantity == stoke){
            quantity == stoke
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
  

    console.log(event.target)
    return quantity
}