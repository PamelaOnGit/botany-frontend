import React from "react"
import { IProduct } from "../interfaces/product"
import { baseUrl } from "../config"

type Products = null | Array<IProduct>

function Home() {
  const [Products, setProducts] = React.useState<Products>(null)
  console.log(Products)

  React.useEffect(() => {
    console.log("The home page has mounted")
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
    <div className="home">
      <div className="home-text">
        <p className="title">O'Kedama <br />
          <span className="sub-title">
            Bound by moss and string,<br />
            Roots embrace the earth within,<br />
            Kokedama blooms bright.
          </span>
        </p>
      </div>
      <div className="special-selection">
        <div>

        </div>
      </div>
    </div>
  </>

}

export default Home