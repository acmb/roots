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
  const [showCards, setShowCards] = useState(false)
  const [userLatestOrder, setUserLatestOrder] = useState<CartItem[]>([])

  return (
    <>
      <PageBanner label="Checkout" />
      <Breadcrumbs label="Checkout" />
      {cartItems.length > 0 ? (
        <CheckoutProductPayment
          setShowCards={setShowCards}
          cartItems={cartItems}
          setUserLatestOrder={setUserLatestOrder}
        />
      ) : showCards ? (
        <div>
          <div
            className="cart-table"
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              padding: "20px"
            }}
          >
            <div
              className="cart-table-content"
              style={{
                width: "80%",
                margin: "auto",
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
              }}
            >
              {userLatestOrder?.map((cartItem, index) => (
                <div
                  className="cart-table-header"
                  key={index+1}
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "10px"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "10px"
                    }}
                  >
                    <div
                      className="cart-table-seventh"
                      style={{
                        fontWeight: "bold",
                        color: "#333"
                      }}
                    >
                      Product Name
                    </div>
                    <div>{cartItem.name}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "10px"
                    }}
                  >
                    <div
                      className="cart-table-seventh"
                      style={{
                        fontWeight: "bold",
                        color: "#333"
                      }}
                    >
                      Product Quantity
                    </div>
                    <div>{cartItem.quantity}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "10px"
                    }}
                  >
                    <div
                      className="cart-table-seventh"
                      style={{
                        fontWeight: "bold",
                        color: "#333"
                      }}
                    >
                      Product Price
                    </div>
                    <div>{cartItem.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <EmptyCheckout />
      )}
    </>
  )
}

export default Checkout