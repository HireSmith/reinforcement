import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage'
import LoginPage from './routes/LoginPage'
import UserPage from './routes/UserPage'
import CreatePage from './routes/CreatePage'
import React, { Fragment } from 'react'

export default () => {
  return (
    <Fragment>
      <BrowserRouter>
		    <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="login" element={<LoginPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="create" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
   </Fragment>
  )
}

// <Router>
  // <Routes>
  //   <Route path="/" element={<Login />} />

  //   <Route path="/main/" element={<Main />}>
  //     <Route path="searchTrips" element={<SearchTrips/>} />
  //     {/* Have a Saved List/Likes Page nested in Main */}``
  //     <Route path="savedTrips" element={<SavedTrips/>} />
  //   </Route>
  //   <Route path='/error' element={<Error/>} />
  //   {/* <Route path="/floppyseal" element={<h1></h1>} >
  //       <Route path="avi" element={<Error />} />
  //   </Route> */}
  // </Routes>
// </Router>