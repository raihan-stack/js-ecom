import { getCardFromLs } from "./getCardfromLs"
import { showToast } from "./toast"
import { total } from "./totat"
import { updateCard } from "./updateCard"



export const removeProduct= (id)=>{

    let card = getCardFromLs()
  card =  card.filter((c)=> c.id !== id)
  localStorage.setItem("cardProductsLs",JSON.stringify(card))
  let remove = document.querySelector(`#card${id}`)
console.log(id)
  console.log(remove)
  if(remove){
    remove.remove()
    total()
    showToast("delete", id)
  }

  updateCard(card)

}