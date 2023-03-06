import React from "react"
import { IProduct } from "../interfaces/product"
import { baseUrl } from "../config"

import Logo from "../styles/resources/logo.png"

// type Products = null | Array<IProduct>

function Home() {
  const [product, setProduct] = React.useState<IProduct | null>(null)
  const [randomNum, setRandomNum] = React.useState<any>(0)
  console.log(randomNum)

  const haikuArray = [
    <p>A sphere of green life,<br />
    Kokedama for mother's love,<br />
    Growing bond in earth.</p>, 
    <p>Soft petals falling,<br />
    Spring breeze carries sweet perfume,<br />
    Mother's Day delight.</p>,
    <p>A mother's embrace,<br />
    Warm and tender like the sun,<br />
    Endless love abounds.</p>,
    <p>Bound by moss and twine,<br />
    A kokedama for mother,<br />
    Love grows with the plant.</p>
  ]


  React.useEffect(() => {
  }, [randomNum])

  React.useEffect(() => {
    async function fetchProducts() {
      const resp = await fetch(`${baseUrl}/kokedamas/2`)
      const ProductData = await resp.json()
      setProduct(ProductData)
    }
    fetchProducts()
  }, [])

  function handleClick() { 
    setRandomNum(Math.floor(Math.random() * 4))
  }

  return <>
    <div className="home">

        <div className="title">
        <img src={Logo} alt="" />
        </div>



<div className="promotion">

  <section>
    <h2>Mother's Day</h2>
    <h3>Sunday 26th March </h3>
  </section>

<div className="haiku-container">
  <div>{haikuArray[randomNum]}</div>

<button onClick={handleClick}>Compose a haiku</button>
</div>
<div className="show-product">
        {product && <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={product.image} alt={product.name} />
            </figure>
          </div >
          <div className="product-name"> {product.name}</div> 
          <div className="price">£{product.price}</div>
        </div>}
        </div>
</div>


      </div>


  </>

}

export default Home


        {/* <span className="sub-title">
            Bound by moss and string,<br />
            Roots embrace the earth within,<br />
            Kokedama blooms bright.
          </span> */}    