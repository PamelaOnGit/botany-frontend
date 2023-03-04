import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { IProduct } from "../interfaces/product"
import { IBasketItem } from "../interfaces/basketItem"
import Kokedama from "./Kokedama"
import { baseUrl } from "../config"

// ! change 'number' to 'IBasketItem'
// ! add the interface
// interface IBasketItem { 
//   id: number, 
//   name: string
// }

type IBasket = Array<IBasketItem>

function ShowProduct() {

  const navigate = useNavigate()

  const [product, setProduct] = React.useState<IProduct | null>(null)
  const { productId } = useParams()

  const [basketItems, setBasketItems] = React.useState<IBasket>([])

  React.useEffect(() => {
    async function fetchProducts() {
      const resp = await fetch(`${baseUrl}/kokedamas/${productId}`)
      const ProductData = await resp.json()
      setProduct(ProductData)
    }
    fetchProducts()
  }, [])


  //get any existing basket items for localStorage and setBasketItems to include these
  React.useEffect(() => { 
    const savedBasketItems = localStorage.getItem('basketItems')
    // console.log("saved Basket items", savedBasketItems)
    if (savedBasketItems) { 
      setBasketItems(JSON.parse(savedBasketItems))
    }
  },[])

// if the addToBasket button is clicked, use the spread operator to add 
// the current item to the basket.

function handleAddToBasket() { 
  // ! const _basketItems  = [...basketItems, product!.id]
  const _basketItems = [...basketItems, { 
    id: product!.id, 
    name: product!.name, 
    price: product!.price
  }]
  localStorage.setItem("basketItems", JSON.stringify(_basketItems))
  console.log(_basketItems)
  navigate('/basket')
}

// create const with new array with new Item as the value



if (!product) { 
  return <div>Something went wrong</div>
}

  return <section className="section show-product is-full-height">

    <div className="card is-one-quarter-desktop is-one-third-tablet">
      <div className="card-image">
        <figure className="image image-is-1by1">
          <img src={product.image} alt={product.name} />
        </figure>
      </div>
      <div className="card-content">
      <p>{product.name} <br /> <span className="Japanese-text">{product.alt_name}</span></p>
      <p className="price">{`£${product.price}`}</p>
      <p >
        {product.short_description}
      </p>
      </div>
      <div>
        <button className="button" onClick={handleAddToBasket}>Add to basket</button>
      </div>
    </div>

  </section>
}

export default ShowProduct