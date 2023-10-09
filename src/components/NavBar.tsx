import { Link } from 'react-router-dom'
import {BsLinkedin, BsBehance, BsGithub} from 'react-icons/bs';
import { styled } from 'styled-components';


export default function NavBar() {
  return (
    <NavigationStyled>
       <div className='navigation-left'>    
         <p>Soraya Gherras</p>
      </div>

    <div className="navigation-right">
     <Link to="/"> Portfolio </Link>
     <Link to="/about"> A propos  </Link>
     <Link to="/contact"> Contactez-moi ! </Link>
     <div className="navigation-icon">
     <BsLinkedin/>
    <BsBehance/>
    <BsGithub/>
     </div>
    </div>
  </NavigationStyled>

  )
}

const NavigationStyled = styled.div`
width: 100%;
padding: 1.5em 0;
display: flex;
justify-content: space-between;
font-size: 1em;
text-decoration: none !important;



.navigation-right {
  display: flex;
  text-decoration: none;
}
`
