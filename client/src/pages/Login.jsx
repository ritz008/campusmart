import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api'
import styles from './Login.module.css'
import toast from 'react-hot-toast'

function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted', formData) 
    setLoading(true)
    setError('')

    try {
      const { data } = await API.post('/auth/login', formData)
      localStorage.setItem('user', JSON.stringify(data))
      toast.success('Welcome back!')
      setTimeout(() => {
        window.location.href = '/'
      }, 1000)
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong')
      setError(err.response?.data?.message || 'Something went wrong')
    }

    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Welcome back to <span className={styles.span}>CampusMart</span>
        </h2>
        <p className={styles.subtitle}>Login to buy and sell</p>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='rahul@college.com'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Your password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type='submit'
            className={styles.btn}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className={styles.loginText}>
          New here? <Link to='/register'>Create an account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login