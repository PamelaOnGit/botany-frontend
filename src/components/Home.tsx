import React from "react"
import { IProduct } from "../interfaces/product"

type Products = null | Array<IProduct>

function Home() { 
  const [Products, setProducts] = React.useState<Products>(null)
  console.log(Products)

  React.useEffect(() => { 
    console.log("The home page has mounted")
  }, [])

  React.useEffect(() => { 
    async function fetchProducts() { 
      const resp = await fetch("/api/kokedamas")
      const ProductsData = await resp.json()
      setProducts(ProductsData)
    }
    fetchProducts()
  }, [])

return <>
  <div>the home page has mounted</div>
</>

}

export default Home