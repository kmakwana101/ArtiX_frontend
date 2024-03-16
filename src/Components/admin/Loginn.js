import React, { useState } from 'react'
import axios from 'axios';

const Loginn = () => {
  const [error, seterror] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    secret: '',
  });

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const formsubmit1 = async (e) => {
    e.preventDefault()

    try {
      console.log(formData);
      let response = await axios.post('https://difficult-jay-waders.cyclic.app/api/login', formData)
      if (response.status === 200) {
        seterror('')
        window.location.href = "/AdminPanel"
      }
      setFormData({
        username: '',
        password: '',
      })
    } catch (error) {
      seterror('Please Enter valid UserName or Password')
    }
  }

  return (
    <>
      <div className="container mt-5 font">
        <div className="row">
          <div className="col-4 mx-auto shadow p-3">
            <form onSubmit={formsubmit1}>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <h4 className="mx-auto d-inline">Login</h4>
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Username</label>
                <input type="text" className="form-control" name="username" onChange={handlechange} value={formData.username} />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Password</label>
                <input type="password" className="form-control" name="password" onChange={handlechange} value={formData.password} />
              </div>
              <p>
                Don't have an account? <a href="/register">SignUp</a>
              </p>
              {error &&  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>{error}</strong>

              </div>
}
              <button type="submit" className="mt-3 col-12 btn btn-success">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Loginn