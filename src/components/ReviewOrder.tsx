import axios from 'axios'
import React, { useState, SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { IOrder } from "../interfaces/order"



function ReviewOrder() { 

  const navigate = useNavigate()

  const [orderData, setOrderData] = useState<IOrder>({
    customer_id: localStorage.getItem('customer_id'),
    delivery_address_id: localStorage.getItem('deliveryAddressId'), 
    delivery_option_id: localStorage.getItem('deliveryOptionId'),
    
    total_amount:0, 
    order_status_id:1
  })

  console.log(orderData)

  const [ orderLineData, setOrderLineData ] = useState({ 
    product_id: localStorage.getItem('basketItems'), 
    quantity: 1, 
    gift: "true", 
    message: '', 
    option: '',
    order_id:'' 
  })

  console.log(orderData, orderLineData)

  async function handleSubmit(event: SyntheticEvent) { 
    event.preventDefault()
    try { 
      const { data } = await axios.post('/api/order', orderData)
      console.log(data.message)
      console.log(data)
      setOrderLineData({
        ...orderLineData,
        order_id: data.id
      })
      localStorage.setItem('orderId', data.id)
      navigate('/creating-my-order')
    } catch(err:any) { 
      console.log(err.message)
    }
  }

  return <>

<div className="section">
  <div className="container">



    <h1>Order Summary</h1>
    <div>customer_id: {orderData.customer_id}</div>
    <div>delivery_address_id: {orderData.delivery_address_id}</div>
    <div>delivery_option_id: {orderData.delivery_option_id}</div>
    <div>total_amount: {orderData.total_amount}</div>
    <div>order_status_id: {orderData.order_status_id}</div>

    <div>product_id: {orderLineData.product_id}</div>
    <div>quantity: {orderLineData.quantity}</div>

    <button className="button" onClick={handleSubmit}>Submit my order</button>
    </div>
</div>

  </>
}

export default ReviewOrder

