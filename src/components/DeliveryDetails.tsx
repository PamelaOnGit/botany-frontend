import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { IDeliveryAddress } from "../interfaces/delieveryAddress"


function DeliveryDetails() { 

  const navigate = useNavigate()

  const [deliveryAddressData, setDeliveryAddressData ] = useState({
    name: '', 
    street_address: '', 
    city: '', 
    postcode: '', 
    region: ''    
  })

  async function handleSubmit(event:SyntheticEvent) { 
    event.preventDefault()
    console.log(deliveryAddressData)
    try { 
      const { data } = await axios.post('/api/order/delivery_address', deliveryAddressData)
      console.log(data.message)
      console.log(data.id)
      localStorage.setItem("deliveryAddressId", data.id)
      navigate('/delivery-options')
    } catch(err: any) { 
      console.log(err.response.data.errors)
    }
  }

  function handleChange(event:any) { 
    event.preventDefault()
    setDeliveryAddressData({
      ...deliveryAddressData,
      [event.target.name]: event.target.value
    })
  }



  return <>
      <div className="section">
<div className="container">
  <form onSubmit={handleSubmit}>

  <div className="field">
          <label className="label">Name of recipient</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'name'}
            onChange={handleChange}
            value={deliveryAddressData.name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">House number and street Name</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'street_address'}
            onChange={handleChange}
            value={deliveryAddressData.street_address}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">City or town</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'city'}
            onChange={handleChange}
            value={deliveryAddressData.city}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Postcode</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'postcode'}
            onChange={handleChange}
            value={deliveryAddressData.postcode}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Region (optional)</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'region'}
            onChange={handleChange}
            value={deliveryAddressData.region}
            />
          </div>
        </div>



    <button className="button">Proceed to delivery options</button>
  </form>
</div>
</div>
  </>
}

export default DeliveryDetails