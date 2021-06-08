/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    // This is the current state of the user choices
    orderBuilder: {
        metalId : 0,
        sizeId : 0,
        styleId : 0,
        jewelryTypeId :0        
    },
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            jewelryTypeId:2,
            timestamp: 1614659931693
        },
        {
            id: 2,
            metalId: 4,
            sizeId: 4,
            styleId: 2,
            jewelryTypeId:1,
            timestamp: 1614659931693
        }
    ],
    jewelryType: [
        {id: 1, type:"ring", priceMultiplier: 1},
        {id:2, type: "earring", priceMultiplier: 2},
        {id:3, type: "necklace", priceMultiplier: 4}
    ]
}


export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const getJewelryType = () => {
    return database.jewelryType.map( type => ({...type}))
}

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const setType = (id) => {
    database.orderBuilder.jewelryTypeId = id
}

export const addCustomerOrder = () => {
    // Copy the current state of the user choice
    const newOrder = {...database.orderBuilder}

    //  Add new primary key to the object
    const lastIndex = database.customOrders.length -1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add timestamp to the order
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    newOrder.timestamp = today
   

    // Add new order to the custom orders state
    database.customOrders.push(newOrder)

    // Reset Temp state choices
    database.orderBuilder = {}

    //  Broadcast a notification the state has been changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}