import { Link } from "react-router-dom"
import { IProduct } from "../interfaces/product"


function Kokedama({ alt_name, category_id, name, image, in_stock, long_description, short_description, id, price }: IProduct) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">
    <Link to={`/kokedamas/${id}`}>
      <div className="card">
        <div className="card-image">
            <figure className="image">
              <img src={image} alt={name} />
            </figure>
        </div>
        <div className="card-content">
          <p>{name} <br /> <span className="Japanese-text">{alt_name}</span></p>
      
          <p className="price">{`£${price}`}</p>
        </div>
      </div>
    
    </Link>
  </div>
}

export default Kokedama

