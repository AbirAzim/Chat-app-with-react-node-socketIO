import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const authObject = {
      'Project-ID' : '6505dbeb-2277-4402-96fb-891359f80192',
      'User-Name' : username,
      'User-Secret': password,
    }

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      window.location.reload()
    } catch(err) {
      setError('Sorry! Wrong Pasword')
    }
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Our Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={e => setUserName(e.target.value)} className="input" placeholder="UserName" required />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              Start
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
