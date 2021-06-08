import {database} from "./database.js"


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

export const getOrderBuilder = () => {
    return database.orderBuilder
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