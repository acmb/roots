import {
  FC,
  useState
} from "react"
import { useSelector } from "react-redux"

import { selectCartItems } from "../../store/cart/cart.selector"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import CheckoutProductPayment from "./CheckoutProductPayment/CheckoutProductPayment.component"
import EmptyCheckout from "./EmptyCheckout/EmptyCheckout.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"

import emptyBasket from "../../../assets/images/basket-icon.png"

interface CartItem {
  calories: number
  diet: string[]
  id: number
  imageUrl: string
  ingredients: string[]
  name: string
  notes: string
  price: number
  quantity: number
}

const Checkout: FC = () => {
  const cartItems = useSelector(selectCartItems) as CartItem[]
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [userLatestOrder, setUserLatestOrder] = useState<CartItem[]>([])

  return (
    <>
      <PageBanner label="Checkout" />
      <Breadcrumbs label="Checkout" />
      {cartItems.length > 0 ? (
        <CheckoutProductPayment
          setShowConfirmation={setShowConfirmation}
          cartItems={cartItems}
          setUserLatestOrder={setUserLatestOrder}
        />
      ) : showConfirmation ? (
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
      ) : (
        <EmptyCheckout />
      )}
    </>
  )
}

export default Checkout
