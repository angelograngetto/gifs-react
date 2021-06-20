import React from 'react'
import {Link} from 'wouter'

export default function notFound(){
    return (
        <div className="notFound">
            <h3>¡OOPS!</h3>
            <p>Error 404 - Page not found</p>
            <img src="https://media3.giphy.com/media/Q61LJj43H48z1FIK4X/giphy-downsized-medium.gif?cid=9b28d16a9005atew5nsbvrj6q26dnpnaqd0c3xzwnnkelsqi&rid=giphy-downsized-medium.gif&ct=g" alt="error" />
            <Link to="/"><button>Go home</button></Link>
        </div>
    )
}