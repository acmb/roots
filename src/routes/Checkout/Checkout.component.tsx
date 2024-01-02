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
import CheckoutOrder from "./CheckoutOrder/CheckoutOrder.component"

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
        <CheckoutOrder
          userLatestOrder={userLatestOrder}
        />
      ) : (
        <EmptyCheckout />
      )}
    </>
  )
}

export default Checkout