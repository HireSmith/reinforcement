import { Link } from 'react-router-dom'
// import LoginPage from '../routes/LoginPage'

export default function NavBar() : JSX.Element {
	return (
		<nav className='navbar' style={{display: 'flex', justifyContent: 'space-around', fontSize: '20px'}}>
			<Link to='/'>Home</Link>
			<Link to='/create'>Create</Link>
			{/* <Link to='/user'>Profile</Link> */}
      {/* set state.loggedin to false here */}
			<Link to='/login'>Logout</Link> 
		</nav>
	)
}

