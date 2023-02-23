import React from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import { IProduct } from "../interfaces/product"
import Product from "./Product"

type Products = null | Array<IProduct>

function AllProducts() {

  const [products, setProducts] = React.useState<Products>(null)
  console.log(products)

  React.useEffect(() => {
    async function fetchProducts() {
      const token = localStorage.getItem('token')
      console.log(token)
      const resp = await axios.get('/api/kokedamas/all', {
        headers: { Authorization: `Bearer ${token}` }
      })
      const productsData = await resp.data 
      setProducts(productsData)
    }

    fetchProducts()
  }, [])

  return <>
    <section className="section" >
      <div className="container">
        <div className="columns is-multiline">
          {products?.map((product: IProduct) => { 
            return <Product
              key={product.id}
              {...product}
            />
          })}
        </div>
      </div>
    </section>
    <Link to="add-new-product"><button className="button">Add New Product</button></Link>
    <div>Update a single Product</div>
  </>
}

export default AllProducts