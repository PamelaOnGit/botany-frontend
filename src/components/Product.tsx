import { Link } from "react-router-dom"
import { IProduct } from "../interfaces/product"

function Product({ alt_name, category_id, name, image, in_stock, long_description, short_description, id }: IProduct) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{name}</div>
      </div>
      <div className="card-image">
        <figure className="image image-is-1by1">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-content">Category: {category_id.toString()}</div>
      <div className="card-content">Alternative name: {alt_name}</div>
      <div className="card-content">Number in stock: {in_stock.toString()}</div>
      <div className="card-content">Long description: {long_description}</div>
      <div className="card-content">Short description: {short_description}</div>
      <div className="card-content">Product ID: {id}</div>
      <Link to={`/all-products/update-product/${id}`}><button className="button">Update this product</button></Link>
    </div>
  </div>
}

export default Product