import { FC } from "react"

import emptyBasket from "../../../assets/images/basket-icon.png"

import "./CheckoutOrder.styles.scss"

interface OrderItem {
  name: string
  price: number
  quantity: number
}

type CheckoutOrderProps = {
  userLatestOrder?: OrderItem[]
}

const CheckoutOrder: FC<CheckoutOrderProps> = ({
  userLatestOrder
}) => {
  return (
    <div className="container">
      <div className="order-stamp">
        <h2
          className="order-stamp-heading"
        >
          Congrats, User
        </h2>
        <img
          alt="Basket Icon"
          className="order-stamp-image"
          src={emptyBasket}
        />
        <p>
          Thank you for your recent order. We are pleased to confirm that we have received your order and it is currently being processed.
        </p>
        <span
          className="order-stamp-number"
        >
          Order Number: 123456789
        </span>
      </div>
      <div className="order-summary">
        <h2
          className="order-summary-heading"
        >
          Order Summary
        </h2>
      </div>
      <div className="cart-container">
        <div className="cart-table">
          <div className="cart-table-header">
            <div className="cart-table-third">Product Name</div>
            <div className="cart-table-third">Quantity</div>
            <div className="cart-table-third">Price</div>
          </div>
          <div className="cart-table-content">
            {userLatestOrder?.map((orderItem, index) => (
              <div
                className="cart-table-item"
                key={index+1}
              >
                <div className="cart-table-third">
                  <h4 className="cart-order-product">
                    {orderItem.name}
                  </h4>
                </div>
                <div
                  className="cart-table-third cart-table-order-qty"
                >
                  {`x${orderItem.quantity}`}
                </div>
                <div
                  className="cart-table-third cart-table-price"
                >
                  {`£${orderItem.price.toFixed(2)}`}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="total">Total: £7.70</div>
      </div>
    </div>
  )
}

export default CheckoutOrder
