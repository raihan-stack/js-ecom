

import { addToCard } from "./add";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");

const productTemplate = document.querySelector("#productTemplate")


export const showProductContainer=(products)=>{

    if(!products){
        return false
    }

products.forEach(currentProduct => {
    const{ brand , category,description, id, image,name, price,stock }= currentProduct
    
    const templeClone = document.importNode(productTemplate.content, true)
 
    templeClone.querySelector(".category").textContent = category;

    templeClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
  
    templeClone.querySelector(".productName").textContent = name;
    
    templeClone.querySelector(".productImage").src = image
    
    templeClone.querySelector(".productImage").alt = name

    templeClone.querySelector(".productStock").textContent = stock;

    templeClone.querySelector(".productDesciption").textContent = description;
    templeClone.querySelector(".productPrice").textContent =` ₹${price}`;
    templeClone.querySelector(".productActualPrice").textContent = ` ₹${price * 4}`;

    templeClone.querySelector(".stockElement").addEventListener("click",(event)=>{
        
        homeQuantityToggle(event, id, stock)
    })

    templeClone.querySelector(".add-to-card-button").addEventListener("click", (event)=>{

        addToCard(event,stock,id)

    })
    productContainer.append(templeClone)

});


}