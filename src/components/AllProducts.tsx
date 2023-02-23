import React from "react"
import { Link } from "react-router-dom"

function AllProducts() { 
  
  return <>
    <div>TODO Show all products here</div>
    <Link to="add-new-product"><button className="button">Add New Product</button></Link>
    <div>Add a product</div>
    <div>Update a single Product</div>
  </>
}

export default AllProducts