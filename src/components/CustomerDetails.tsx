import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { ICustomer } from "../interfaces/customer"


function CustomerDetails() { 

  const navigate = useNavigate()

  const [customerData, setCustomerData] = useState<ICustomer>({
    email: '', 
    first_name:'', 
    last_name:'', 
    phone:'', 
    title:''
  })
  console.log(customerData)

async function handleSubmit(event: SyntheticEvent) { 
  event.preventDefault()
  console.log(customerData)
  try { 
    const { data } = await axios.post('/api/customer', customerData)
    console.log(data.message)
    console.log(data.id) // save this to localStorage
    // const _customer_id = data.id 
    localStorage.setItem("customer_id", data.id)
    navigate('/delivery-details')
  } catch (err: any) { 
    console.log(err.response.data.errors)
  }

}

function handleChange(event: any){ 
  event.preventDefault()
  setCustomerData({ 
    ...customerData,
    [event.target.name]: event.target.value
  })
}

  return <>
  <div>Customer Enter Details Here</div>
<div className="section">
<div className="container">
  <form onSubmit={handleSubmit}>

  <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'title'}
            onChange={handleChange}
            value={customerData.title}
            />
          </div>
        </div>


  <div className="field">
          <label className="label">First name</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'first_name'}
            onChange={handleChange}
            value={customerData.first_name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Last name</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'last_name'}
            onChange={handleChange}
            value={customerData.last_name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email address</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'email'}
            onChange={handleChange}
            value={customerData.email}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Phone number</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'phone'}
            onChange={handleChange}
            value={customerData.phone}
            />
          </div>
        </div>

    <button className="button">Proceed to delivery details</button>
  </form>
</div>
</div>
</>
}

export default CustomerDetails