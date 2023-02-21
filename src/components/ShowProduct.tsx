import React from "react"
import { useParams } from "react-router-dom"
import { IProduct } from "../interfaces/product"
import Product from "./Kokedama"

function ShowProduct() { 
  const [product, setProduct] = React.useState<IProduct | null> (null)
  const { productId } = useParams()

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
  },[])

  return <section className="section">
    <div className="container">
      <div className="columns is-multiline">
        { product && <Product
          key={product.id}
          {...product}
        />}

      </div>

    </div>
  </section>
}

export default ShowProduct