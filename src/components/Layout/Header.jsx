import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
            <p>React Challenge Github</p>
            <div className="header-nav">
                <h5>
                    <Link className='link' to="/">Home</Link>
                </h5>
                <h5>
                    <Link className='link' to="/About">About</Link>
                </h5>
            </div>
        </div>
  )
}
