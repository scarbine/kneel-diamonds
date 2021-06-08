import { getStyles , setStyle} from "./dataAccess.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {  
        if (event.target.name === "styles") {
            setStyle(parseInt(event.target.value))
            window.alert(`User chose style ${event.target.value}`)
            return setStyle
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        return `<li>
        <input type="radio" name="styles" value="${style.id}"> ${style.style}</input>
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

