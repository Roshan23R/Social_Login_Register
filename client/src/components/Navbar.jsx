import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({ user }) {
  return (
    <div className='navbar'>
      <span className='logo'>
        <Link className="link" to="/">India Speaks</Link>
      </span>{
        user ? (
      
          <ul className='list'>
            <li className='listItem'>
              <img src='https://images.pexels.com/photos/10049576/pexels-photo-10049576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='avatar'></img>
            </li>
            <li className='listItem'>Rakesh Roushan</li>
            <li className='listItem'>Logout</li>
          </ul>
        ) : (
            <Link className="link" to="login">
              Login
            </Link>
        )}
    </div>
  )
}
