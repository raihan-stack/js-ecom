import { updateCard } from "./js-project-2/updateCard"

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
return cardProducts 
}