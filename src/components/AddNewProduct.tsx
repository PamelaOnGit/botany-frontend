import React, { SyntheticEvent, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function AddNewProduct() {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({ 
      name: '', 
      category_id: 1, 
      alt_name: '', 
      price: 0, 
      image: '', 
      long_description: '', 
      short_description: '', 
      in_stock: 0
  })

  async function handleSubmit(e: SyntheticEvent) { 
    e.preventDefault()

    try { 
      console.log(formData)
      const token = localStorage.getItem('token')
      console.log(token)
      const { data } = await axios.post('/api/kokedamas', formData, { 
        headers: { Authorization: `Bearer ${token}`}
      })
      console.log(data)
      navigate('/all-products')
    } catch(err) { 
      console.log(err)
    }
    
  }

  function handleChange(e: any) { 
    e.preventDefault()
    console.log(formData)
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }

  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>

        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name={'name'}
            onChange={handleChange}
            value={formData.name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Category ID</label>
          <div className="control">
            <input
              type="number"
              className="input"
              name={'category_id'}
            onChange={handleChange}
            value={formData.category_id}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Alternative Name</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name={'alt_name'}
            onChange={handleChange}
            value={formData.alt_name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              type="number"
              className="input"
              name={'price'}
            onChange={handleChange}
            value={formData.price}
            />
          </div>
        </div>
        
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name={'image'}
            onChange={handleChange}
            value={formData.image}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Long Description</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name={'long_description'}
            onChange={handleChange}
            value={formData.long_description}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Short Description</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name={'short_description'}
            onChange={handleChange}
            value={formData.short_description}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Number in stock</label>
          <div className="control">
            <input
              type="number"
              className="input"
              name={'in_stock'}
            onChange={handleChange}
            value={formData.in_stock}
            />
          </div>
        </div>

        <button className="button">Add this product</button>
      </form>
    </div>
  </div>
}

export default AddNewProduct