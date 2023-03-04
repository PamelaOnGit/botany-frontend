import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { baseUrl } from "../config"
import { IProduct } from "../interfaces/product"
import { IBasketItem } from "../interfaces/basketItem"

//! change from array of numbers
type IBasket = Array<IBasketItem>



function Basket() {


  const [basketItems, setBasketItems] = React.useState<IBasket>([])



  useEffect(() => {
    // get the array of objects from localStorage and set basketItems to this array of objects
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

  function handleClearBasket(event:any) {
    setBasketItems([])
    localStorage.clear() 
  }

  if (!basketItems) { 
    return <div>Your basket is empty</div>
  }

  return <div className="basket-page">
    <section className="basket">

      <h1>My basket contents:</h1>

{basketItems.length == 0 &&       <h2>Empty basket waits,<br />
Kokedama store serene and still,<br />
Nature's artistry.</h2>}


      <div>{basketItems.map((item) => {

        return <div 

        className="basket-item"
        key={item.id + Math.random()}>
          <p>{item.name}</p>
          <p>£{item.price}</p>
        </div>
        

      })}</div>


    </section>
<div className="button-container">
{basketItems.length != 0 &&  <Link to={`/customer-details`}><button className="button">Make my order</button></Link>}

    
    {basketItems.length != 0 &&  <button className="button" onClick={handleClearBasket}>Clear my basket</button>}

    </div>
  </div>

}

export default Basket