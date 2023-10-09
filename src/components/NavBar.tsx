import { Link } from 'react-router-dom'
import {BsLinkedin, BsBehance, BsGithub} from 'react-icons/bs';
import { styled } from 'styled-components';


export default function NavBar() {
  return (
    <NavigationStyled>
       <div className='navigation-left'>    
         <h4>Soraya Gherras</h4>
      </div>

    <div className="navigation-right">
     <Link to="/"> Portfolio </Link>
     <Link to="/about"> A propos  </Link>
     <Link to="/contact"> Contactez-moi ! </Link>
     <div className="navigation-icon">
     <Link to="https://www.linkedin.com/in/soraya-gherras/" target='_blank'> <BsLinkedin/></Link>
     <Link to="https://www.behance.net/sorayagherras3?tracking_source=search_users%7Csoraya%20gherras" target='_blank'> <BsBehance/></Link>
     <Link to="https://github.com/Assoghe" target='_blank'> <BsGithub/> </Link>
     </div>
    </div>
  </NavigationStyled>

  )
}

const NavigationStyled = styled.div`
max-width: 100%;
height:auto;
padding: 2em;
align-items: center;
display: flex;
justify-content: space-between;
font-size: 1.1em;
text-decoration: none !important;
font-family: 'Spartan';

.navigation-left {
  font-size: 1.2em;
}

.navigation-right {
  display: flex;
  text-decoration: none;
  align-items: center;
}

.navigation-right a, svg {
  margin-right: 1.5em;
}

.navigation-right svg {
  font-size: 1.4em;
}

.navigation-icon {
  margin-right: 1em;
}

.navigation-right a:hover {
  color: #8183FF;
  transition: all 0.2s ease-out;
}

.navigation-right svg:hover {
  cursor: pointer;
  color: #8183FF;
  transition: all 0.2s ease-out;
  
}


`


