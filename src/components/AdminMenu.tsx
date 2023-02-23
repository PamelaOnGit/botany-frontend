import React from "react"
import { Link } from "react-router-dom"

function AdminMenu() { 
  
  return <>
    <div>The admin menu has mounted</div>
    <Link to="/all-products">Products</Link>


    <button className="button">Orders</button>
    <br />
  </>
}

export default AdminMenu