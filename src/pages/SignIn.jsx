import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import OAuth from '../components/OAuth'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      console.log(userCredential.user)

      if (userCredential.user) {
        navigate('/profile')
      }
    } catch (error) {
      toast.error('Invalid Credentials')
    }
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome back</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? 'text' : 'password'}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              className="showPassword"
              src={visibilityIcon}
              alt="show password"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>

          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot password
          </Link>

          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button type="submit" className="button signInButton">
              <ArrowRightIcon fill="white" width="34px" height="34px" />
            </button>
          </div>
        </form>

        <OAuth />

        <Link to="/sign-up" className="registerLink">
          Sign Up
        </Link>
      </main>
    </div>
  )
}

export default SignIn
