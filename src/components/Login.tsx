import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login({ setUser }: { setUser: Function }) { 
  // for redirecting in your code, not in your jsx
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username:'', 
    password:''
  })

  const [errorMessage, setErrorMessage] = useState('')
  console.log(formData)

  async function handleSubmit(e: SyntheticEvent) { 
    e.preventDefault()
    console.log(formData)
    try { 
      const { data } = await axios.post('/api/login', formData)
   
      // after user has logged in, redirect
      // you can't use a link here
      // (becuase this func is not returning jsx)
      // (because it is NOT a component)
      console.log(data.message, data.token)
      const token: string = data.token
      localStorage.setItem('token', token)
      navigate('/admin-menu')
    } catch (err:any) { 
      console.log(err.response.data.errors)
    }

  }

  function handleChange(e: any) { 
    e.preventDefault()
    console.log("name", e.target.name)
    console.log("value", e.target.value)
    setFormData({
      ...formData,
      //the spread operator will copy all the values 
      // from the formData
      // the following line will update
      // only the one I have changed
      [e.target.name]:e.target.value
    })

  }

  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'username'}
            onChange={handleChange}
            value={formData.username}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input 
            type="text"
            className="input"
            name={'password'}
            onChange={handleChange}
            value={formData.password}
            />
          </div>
        </div>
        <button className="button">Submit</button>
      </form>

    </div>
  </div>
}

export default Login