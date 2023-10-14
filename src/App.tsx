import { useEffect } from 'react'
import { Auth } from './compornents/Auth'
import { Todo } from './compornents/Todo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { CsrfToken } from './types/types'

function App() {
  // useEffect(() => {
  //   axios.defaults.withCredentials = true
  //   const getCsrfToken = async () => {
  //     const { data } = await axios.get<CsrfToken>(
  //       `${process.env.REACT_APP_API_URL}/csrf`
  //     )
  //     axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
  //   }
  //   getCsrfToken()
  // }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
