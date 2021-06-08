import { getMetals, setMetal, getOrderBuilder} from "./dataAccess.js"
import { renderAllHTML} from "./main.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            renderAllHTML()
            window.alert(`User chose metal ${event.target.value}`)
        }
    }
    )
    export const Metals = () => {

        let html = "<ul>"
        const metals = getMetals()
   
        // Use .map() for converting objects to <li> elements
        const listItemsArray = metals.map(metal => {
            
            const orders = getOrderBuilder()
            if (metal.id === orders.metalId){
                return `<li>
                <input type="radio" name="metal" value="${metal.id}" checked="checked"/> ${metal.metal}
                </li>`
                }
                else {
                    return `<li>
                    <input type="radio" name="metal" value="${metal.id}"/> ${metal.metal}
                    </li>`
                    }
                })


        // Join all of the strings in the array into a single string
        html += listItemsArray.join("")

        html += "</ul>"
        return html
        }
