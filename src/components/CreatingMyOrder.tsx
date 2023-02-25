import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from "../config"



function CreatingMyOrder() { 
  

  const [ orderLineData, setOrderLineData ] = useState({ 
    product_id: 1, 
    quantity: 1, 
    gift: "true", 
    message: '', 
    option: '',
    order_id:localStorage.getItem('orderId')
  })




  React.useEffect(() => { 
    async function postOrderLines() { 
      try { 
        const { data } = await axios.post(`${baseUrl}/order/orderline`, orderLineData )
        console.log('the function ran')
      }catch(err:any) { 
        console.log(err.message)
      }
      }
      postOrderLines()
    },[])

  


  return <>
    <div>creating your order... </div>
  </>
}

export default CreatingMyOrder