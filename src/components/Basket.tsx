import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

type IBasket = Array<number>

function Basket() {


  const [basketItems, setBasketItems] = React.useState([])

  useEffect(() => {
    const savedBasketItems = localStorage.getItem("basketItems")
    if (savedBasketItems) {
      setBasketItems(JSON.parse(savedBasketItems))
    }

    const handleStorageChange = (event: any) => {
      if (event.key === "basketItems") {
        const savedBasketItems = event.newValue
        if (savedBasketItems) {
          setBasketItems(JSON.parse(savedBasketItems))
        }
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }

  }, [])



  return <>
    <section className="basket-item">
      <div>This is the basket</div>
      <h1>Basket Items</h1>
      <div>{basketItems}</div>
    </section>

    <Link to={`/customer-details`}><button className="button">Complete My Order</button></Link>
  </>

}

export default Basket