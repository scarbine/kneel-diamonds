import { getSizes, setSize ,getOrderBuilder} from "./dataAccess.js"
import { renderAllHTML} from "./main.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            window.alert(`User chose size ${event.target.value}`)
            renderAllHTML()
            return setSize
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"
    
    const listItems = sizes.map(size => { 
       const orders = getOrderBuilder()
       if (size.id === orders.sizeId){
            return `<li>
            <input type="radio" name="size" value="${size.id}" checked="checked"/> ${size.carets}
            </li>`
        }
        else {
            return `<li>
            <input type="radio" name="size" value="${size.id}"/> ${size.carets}
            </li>`
            }
        })
    html += listItems.join("")
    html += "</ul>"

    return html
        
    }

  
   