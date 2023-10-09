import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
       <div className='navigation-left'>    
         <p>Soraya Gherras</p>
      </div>

    <div className="navigation-right">
     <Link to="/"> Portfolio </Link>
     <Link to="/about"> A propos  </Link>
     <Link to="/contact"> Contactez-moi ! </Link>
     <div className="navigation-icon">
     </div>
    </div>
    


  </>
  )
}
