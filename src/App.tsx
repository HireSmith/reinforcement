import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage'
import LoginPage from './routes/LoginPage'
import UserPage from './routes/UserPage'
import SignupPage from './routes/SignupPage';
import CreatePage from './routes/CreatePage'
import { Fragment } from 'react'

export default () => {
  return (
    <Fragment>
      <BrowserRouter>
		    <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="create" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
   </Fragment>
  )
}
