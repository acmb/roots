import React, { FC, Suspense, lazy } from "react"
import { useSelector } from "react-redux"

import { selectCartTotal } from "../../../store/cart/cart.selector"

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.component"

import "../Checkout.styles.scss"

const PaymentForm = lazy(() => import("../../../components/PaymentForm/PaymentForm.component"))

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

type CheckoutProductPaymentProps = {
  cartItems: CartItem[],
  setOrderNumber?: (value: string) => void,
  setShowConfirmation?: (value: boolean) => void,
  setUserLatestOrder?: (value: any) => void
}

const CheckoutProductPayment: FC<CheckoutProductPaymentProps> = ({
  cartItems,
  setOrderNumber,
  setShowConfirmation,
  setUserLatestOrder
}) => {
  const cartTotal = useSelector(selectCartTotal)

  const formattedPrice = `£${cartTotal.toFixed(2)}`

  return (
    <div className="cart-container container">
      <div className="cart-table">
        <div className="cart-table-header">
          <div className="cart-table-half cart-table-left">
            <div className="cart-table-third">&nbsp;</div>
            <div className="cart-table-seventh">Product Name</div>
          </div>
          <div className="cart-table-sixth">Price</div>
          <div className="cart-table-sixth">Quantity</div>
          <div className="cart-table-sixth">Remove</div>
        </div>
        <div className="cart-table-content">
          {cartItems.map((cartItem, index) => (
            <CheckoutProduct
              cartItem={cartItem}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="total">Total: {formattedPrice}</div>
      <Suspense>
        <PaymentForm
          setOrderNumber={setOrderNumber}
          setShowConfirmation={setShowConfirmation}
          setUserLatestOrder={setUserLatestOrder}
        />
      </Suspense>
    </div>
  )
}

export default CheckoutProductPayment
