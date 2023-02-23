import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { IProduct } from "../interfaces/product"
import Kokedama from "./Kokedama"

type IBasket = Array<number>

function ShowProduct() {

  const navigate = useNavigate()

  const [product, setProduct] = React.useState<IProduct | null>(null)
  console.log(product)
  const { productId } = useParams()

  const [basketItems, setBasketItems] = React.useState<IBasket>([])
  console.log(basketItems, localStorage.getItem('basketItems'))

  React.useEffect(() => {
    console.log("the ShowProduct page has mounted")
  }, [])

  React.useEffect(() => {
    async function fetchProducts() {
      const resp = await fetch(`/api/kokedamas/${productId}`)
      const ProductData = await resp.json()
      setProduct(ProductData)
    }
    fetchProducts()
  }, [])

  React.useEffect(() => { 
    const savedBasketItems = localStorage.getItem('basketItems')
    console.log("saved Basket items", savedBasketItems)
    if (savedBasketItems) { 
      setBasketItems(JSON.parse(savedBasketItems))
    }
  },[])

function handleAddToBasket() { 
  const _basketItems  = [...basketItems, product!.id]
  localStorage.setItem("basketItems", JSON.stringify(_basketItems))

  navigate('/basket')
}

// create const with new array with new Item as the value



if (!product) { 
  return <div>Something went wrong</div>
}

  return <section className="section">

    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{product && product.name}</div>
      </div>
      <div className="card-image">
        <figure className="image image-is-1by1">
          <img src={product.image} alt={product.name} />
        </figure>
      </div>
      <div className="card-content">
        {product.price}
      </div>
      <div className="card-content">
        {product.long_description}
      </div>
      <div>
        <button className="button" onClick={handleAddToBasket}>Add to basket</button>
      </div>
    </div>

  </section>
}

export default ShowProduct