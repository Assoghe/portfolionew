import { styled } from 'styled-components'
import {BsLinkedin, BsBehance, BsGithub} from 'react-icons/bs';
import { Link } from 'react-router-dom';


function ContactSection() {
  return (
    <ContactSectionStyle>
        <div className="contact-bloc-text">
            <img src="" alt=""/>
            <h3>Interressée par mon profil ? <br /> N'hésitez pas à me contacter</h3>
        </div>

        <div className="contact-social-network">
     <Link to="https://www.linkedin.com/in/soraya-gherras/" target='_blank'> 
     <BsLinkedin/>
     </Link>


     <Link to="https://www.behance.net/sorayagherras3?tracking_source=search_users%7Csoraya%20gherras" target='_blank'> 
     <BsBehance/>
     </Link>

     <Link to="https://github.com/Assoghe" target='_blank'> <BsGithub/> 
     </Link>

     </div>
    </ContactSectionStyle>
  )
}

const ContactSectionStyle = styled.div`
    padding: 0 8%;
    margin-top: 15em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .contact-bloc-text h3 {
        font-size: 28px;
        font-family: 'Mulish';
        line-height: 1.5;
    }

    .contact-social-network svg{
      font-size: 1.5em;
      margin-right: 0.5em;
    }


`

export default ContactSection
