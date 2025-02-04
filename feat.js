import { getCardFromLs } from "./getCardfromLs"

let lsCard = getCardFromLs()





export const fetchLs = (id ,price)=>{

   

    
  let exsinting=   lsCard.find((card)=>card.id === id)

let quantity = 1;

  if(exsinting){
quantity = exsinting.productQuantity;
price = exsinting.price

  }




  return { quantity, price}

}