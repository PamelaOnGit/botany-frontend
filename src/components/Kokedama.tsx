import { Link } from "react-router-dom"
import { IProduct } from "../interfaces/product"


function Kokedama({ alt_name, category_id, name, image, in_stock, long_description, short_description, id }: IProduct) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">
    <Link to={`/kokedamas/${id}`}>
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{name}</div>
      </div>
      <div className="card-image">
        <figure className="image image-is-1by1">
          <img src={image} alt={name} />
        </figure>
      </div>
    </div>
    </Link>
  </div>
}

export default Kokedama

