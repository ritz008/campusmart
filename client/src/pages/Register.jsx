import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api'
import styles from './Register.module.css'
import toast from 'react-hot-toast'

function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: ''
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { data } = await API.post('/auth/register', formData)
      localStorage.setItem('user', JSON.stringify(data))
      toast.success('Account created successfully!')
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
          Join <span className={styles.span}>CampusMart</span>
        </h2>
        <p className={styles.subtitle}>Buy and sell within your college</p>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Full Name</label>
            <input
              type='text'
              name='name'
              placeholder='Rahul Singh'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

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
              placeholder='Min 6 characters'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>College Name</label>
            <input
              type='text'
              name='college'
              placeholder='IET Lucknow'
              value={formData.college}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type='submit'
            className={styles.btn}
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        <p className={styles.loginText}>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register