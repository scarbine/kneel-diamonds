import { getStyles , setStyle, getOrderBuilder } from "./dataAccess.js"

import { renderAllHTML} from "./main.js"


document.addEventListener(
    "change",
    (event) => {  
        if (event.target.name === "styles") {
            setStyle(parseInt(event.target.value))
            window.alert(`User chose style ${event.target.value}`)
            renderAllHTML()
            return setStyle
        }
    }
    )
    
    const styles = getStyles()
export const JewelryStyles = () => {
    let html = "<ul>"
   
    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        
        const orders = getOrderBuilder()
        if (style.id === orders.styleId){
             return `<li>
            <input type="radio" name="styles" value="${style.id}" checked="checked"/> ${style.style}
            </li>`
            }
            else {
                return `<li>
                <input type="radio" name="styles" value="${style.id}"/> ${style.style}
                </li>`
                }
            })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}




