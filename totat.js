import { getCardFromLs } from "./getCardfromLs";

 export const total = ()=>{
  
    let localCards = getCardFromLs()
let sub = document.querySelector(".productsubTotal")

let productFinalTotat =document.querySelector(".productFinalTotat")
let sum =0;
let vat = 0;

localCards.map((val)=>{

   sum += val.price
   console.log(sum)
   sub.innerText =`₹ ${sum}`

   let total = sum ;
   productFinalTotat.innerText = ` ₹${total +50}`

 })
}