import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const navigate = useNavigate()
	const users = {
		email: 'test@example.com',
		password: 'test',
	}

	const [formData, setFormData] = useState({ email: '', password: '' })
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)

		setTimeout(() => {
			if (users.email === formData.email) {
				setError(false)
				navigate('/')
			} else setError(true)

			setLoading(false)
		}, 5000)
	}

	return (
		<section className='login'>
			<header>
				<h2>Login Form</h2>
			</header>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					required
					placeholder='Email'
					onChange={handleChange}
					value={formData.email}
				/>
				<input
					required
					type='password'
					name='password'
					placeholder='Password'
					onChange={handleChange}
					value={formData.password}
				/>
				{error ? <p className='error'>Incorrect details please try again</p> : null}
				<button disabled={loading ? true : false} type='submit'>
					{loading ? 'Loading' : 'Submit'}
				</button>
			</form>
		</section>
	)
}

export default Login
