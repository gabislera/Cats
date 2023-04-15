import { createContext, useState } from 'react'
import { TOKEN_POST, USER_GET } from './api'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
    console.log(json)
  }

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password })
    const tokenRes = await fetch(url, options)
    const json = await tokenRes.json()
    window.localStorage.setItem('token', json.token)
    getUser(json.token)
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  )
}
