// import { updateCard } from "./js-project-2/updateCard"

import { updateCard } from "./updateCard"


export const getCardFromLs =()=>{
   let cardProducts = localStorage.getItem("cardProductsLs")

    if(!cardProducts){
  return []
    }
    if (typeof cardProducts === "string"){
       try{
        cardProducts =JSON.parse(cardProducts)
       }catch(err){
        console.log(err)
        return []
       }
    }
    updateCard(cardProducts)
//    const fasolid = document.querySelector(".fa-solid")
//  fasolid.innerText = cardProducts.length
   updateCard(cardProducts)
return cardProducts 
}