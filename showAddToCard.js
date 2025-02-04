import { getCardFromLs } from "./getCardfromLs"
import products from "./src/api/product.json"



let lsCards = getCardFromLs()

let productFilter = products.filter((card)=>{

 return lsCards.some((lsCard)=> lsCard.id === card.id)
})

console.log(productFilter)