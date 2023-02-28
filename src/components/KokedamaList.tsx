import React from "react"
import { IProduct } from "../interfaces/product"
import Kokedama from "./Kokedama"
import { baseUrl } from "../config"

type Products = null | Array<IProduct>

function KokedamaList() { 
  const [Products, setProducts] = React.useState<Products>(null)
  console.log(Products)

  React.useEffect(() => { 
    console.log("The kokedamas page has mounted")
  }, [])

  React.useEffect(() => { 
    async function fetchProducts() { 
      const resp = await fetch(`${baseUrl}/kokedamas`)
      const ProductsData = await resp.json()
      setProducts(ProductsData)
    }
    fetchProducts()
  }, [])

return <>
<div className="kokedama-list section">
  <div className="container">
    <div className="columns is-multiline">
      {Products?.map((product: IProduct) => {
        return <Kokedama
          key={product.id}
          {...product}
        />
      })}
    </div>

  </div>

</div>
</>

}

export default KokedamaList