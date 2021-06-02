
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals} from "./Metals.js"

const diamondSize = DiamondSizes()
const jewelryStyle = JewelryStyles()
const metal = Metals()

document.addEventListener(
    "click",
    (event) => {
    }
)

export const KneelDiamonds = () => {
    return `
        <h1 class="title">Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metal}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${diamondSize}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${jewelryStyle}
                
            </section>
        </article>

        <article class="order-button">
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
        </article>
    `
}

