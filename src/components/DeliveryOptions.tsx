import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DeliveryOptions() {
  const navigate = useNavigate()

  const [deliveryOption, setDeliveryOption] = useState(1)
  // const [buttonClass, setButtonClass] = useState("button is-light")

  console.log(deliveryOption)

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    try {
      localStorage.setItem("deliveryOptionId", JSON.stringify(deliveryOption))
      navigate('/review-order')
       } catch (err) {
      console.log(err)
    }
  }


  return <>
    <div className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            Select your preferred delivery option: 
          </div>


          <div className="field">
            <div className="control">
              <button
              type="button"
              className={ 
                deliveryOption === 1
                ? "button is-success"
                : "button is-light"
              }
              onClick={ () => setDeliveryOption(1)}>3-5 working days £4</button>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button
              type="button"
              className={ 
                deliveryOption === 2
                ? "button is-success"
                : "button is-light"
              }
              onClick={ () => setDeliveryOption(2)}>Next day delivery £6</button>
            </div>
          </div>



          <div className="field">
            <div className="control">
              <button
              type="button"
              className={ 
                deliveryOption === 3
                ? "button is-success"
                : "button is-light"
              }
              onClick={ () => setDeliveryOption(3)}>Collect in person (free)</button>
            </div>
          </div>

          <button className="button">Review My Order</button>
        </form>
      </div>
    </div>
  </>
}

export default DeliveryOptions