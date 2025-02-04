
import { getCardFromLs } from "./getCardfromLs"
import { showToast } from "./toast"





export  const addToCard = (event ,stock,id)=>{
  
const cardId = document.querySelector(`#card${id}`)
console.log(cardId)

let price = cardId.querySelector(".productPrice").innerText

let productQuantity = cardId.querySelector(".productQuantity ").innerText
price = price.replace("₹","")

price = Number(price)
productQuantity = Number(productQuantity)



const localStorageCard =getCardFromLs()


 const existing = localStorageCard.find((sameIteam)=> sameIteam.id === id
)

if( existing && productQuantity >1){
     
    
    productQuantity = Number(existing.productQuantity + productQuantity)
 
    price =  Number(price * productQuantity)
    let updateCart = {id, productQuantity, price}

    updateCart = localStorageCard.map((card)=>{
        return card.id === id ? updateCart : card
    })

    localStorage.setItem("cardProductsLs",JSON.stringify(updateCart))

    showToast("add", id)

} 
else{
    localStorageCard
}

price = price *productQuantity

if( existing){
    return false
}

localStorageCard.push({price, productQuantity,id})


localStorage.setItem("cardProductsLs",JSON.stringify(localStorageCard))



showToast("add", id)


console.log(localStorage)



}