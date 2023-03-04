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
      console.log(basketItems)
    }   

    // ? change the local storage so that it stores an array of objects
    // ? instead of an array of integers.  
    // ? then display the localStorage objects in the summmary page


// // ! create a GET for filter by product ID and use this route in the fetch below
// // ! takes an array of integers 
// // ! returns an array of the corresponding products
//     async function fetch_details() { 
//       const resp = await fetch (`${baseUrl}/kokedamas`)
//       const data = await resp.json()
//       setBasketItemsPlus(data)
//     }
//     fetch_details()


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
    return <div>There are no items in your basket</div>
  }

  return <>
    <section className="basket-item">

      <div>{basketItems.map((item) => { 
        return <div 
        className="basket-item"
        key={item.id + Math.random()}>
          <p>{item.name}</p>
          <p>£{item.price}</p>
        </div>
      })}</div>

      <div className="total-price"></div>
    </section>

    <Link to={`/customer-details`}><button className="button">Make my order</button></Link>
    <button className="button" onClick={handleClearBasket}>Clear my basket</button>
  </>

}

export default Basket