import { fetchLs } from "./feat"
import { getCardFromLs } from "./getCardfromLs"
import { incrementDecrement } from "./inde"
import { removeProduct } from "./removeProduct"

import products from "./src/api/product.json"


const cartElement = document.querySelector("#productCartContainer")

const templeteContainer = document.querySelector("#productCartsTemplate")
let lsCards = getCardFromLs()

let  filterProduct = products.filter((card)=>{

 return lsCards.some((lsCard)=> lsCard.id === card.id)
})


const ShowProductContainer = ()=>{

    filterProduct.forEach ((cardProd)=>{

        const{ category, id, image,name, price,stock }= cardProd 

        let productClone =  document.importNode(templeteContainer.content ,true)

        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
        productClone.querySelector(".productName").textContent = name;
        
        productClone.querySelector(".productImage").src = image
        
        productClone.querySelector(".productImage").alt = name
        
        productClone.querySelector(".category").textContent = category

        const lsCard = fetchLs( id , price)

  productClone.querySelector(".productPrice").textContent =lsCard.price;
  productClone.querySelector(".productQuantity").textContent = lsCard.quantity
 
  productClone.querySelector(".remove-to-card-button").addEventListener("click",()=> removeProduct(id))
  console.log(  productClone.querySelector(".productQuantity").innerText , lsCard.quantity)



  productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
        
  incrementDecrement(event, id,  price,stock)
})

  
        cartElement.append(productClone)
    })

   
}
ShowProductContainer()