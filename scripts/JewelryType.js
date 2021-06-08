import {getJewelryType, setType} from "./database.js"


export const Type = () => {
    const types = getJewelryType()
    
    let html = '<ul>'

    // document.addEventListener("change",
    //     (event) => {
    //         const [,typeId] = event.target.id.split("--") 
    //         const clickedItemObj = types.find((type) => {
    //             return type.id === typeId
    //         })
    //     } )
    document.addEventListener(
        "change",
        (event) => {  
            if (event.target.name === "type") {
                setType(parseInt(event.target.id))
                window.alert(`User chose Jewelry Type: ${event.target.value}`)
                return setType
            }
        }
    )


    const listItemsArray = types.map(type => {
        return `<li>
            <input type="radio" name="type" value="${type.type}" id="${type.id}"/> ${type.type}</li>`
    }) 
    html += listItemsArray.join("")
    html += "</ul>"
    return html
}



