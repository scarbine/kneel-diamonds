
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals} from "./Metals.js"
import { addCustomerOrder} from "./dataAccess.js"
import { Orders } from "./Orders.js"
import { Type } from "./JewelryType.js"

// const diamondSize = DiamondSizes()
// const jewelryStyle = JewelryStyles()
// const metal = Metals()   
// const orderList = Orders()



document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === "orderButton"){
           addCustomerOrder()
        }
    }
       
)


export const KneelDiamonds = () => {
    return `
        <h1 class="title">Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
            <section class="choices__type options">
            <h2>Jewelry Type</h2>
            ${Type()}
        </section>
        </article>

        <article class="order-button">
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

