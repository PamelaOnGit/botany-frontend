import React from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from "../config"

function UpdateProduct() { 

  const [product, updateProduct] = React.useState()

  const { productId } = useParams()
  console.log(productId)
  
  return <>
  <div>TODO - update product by id</div>
  </>
}

export default UpdateProduct