import { getOrders, getMetals, getJewelryType} from "./database.js"

const buildOrderListItem = (order) => {
    const metals = getMetals()
    const types = getJewelryType()
    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )

    const foundType = types.find(
        (type) => { 
            return type.id === order.jewelryTypeId
        }
    )

    let totalCost = foundMetal.price
    totalCost = totalCost * foundType.priceMultiplier
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString} and was place on ${order.timestamp}
    </li>`
    
    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
    
    

    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    return html
}


