import {getJewelryType, setType, getOrderBuilder} from "./dataAccess.js"
import {renderAllHTML} from "./main.js"

document.addEventListener(
    "change",
    (event) => {  
        if (event.target.name === "type") {
            setType(parseInt(event.target.id))
            window.alert(`User chose Jewelry Type: ${event.target.value}`)
            renderAllHTML()
            return setType
        }
    }
)
const types = getJewelryType()

export const Type = () => {
    
    let html = '<ul>'

    const listItemsArray = types.map(type => {
        const orders = getOrderBuilder()
        if (type.id === parseInt(orders.jewelryTypeId)){
            return `<li>
           <input type="radio" name="type" value="${type.type}" checked="checked" id="${type.id}"/> ${type.type}
           </li>`
           }
           else {
               return `<li>
               <input type="radio" name="type" value="${type.type}" id="${type.id}"/> ${type.type}
               </li>`
               }
           })
           html += listItemsArray.join("")
           html += "</ul>"
           return html
        }
        
        
        
        //     return `<li>
        //         <input type="radio" name="type" value="${type.type}" id="${type.id}"/> ${type.type}</li>`
        // }) 