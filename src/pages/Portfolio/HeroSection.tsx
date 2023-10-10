import { styled } from 'styled-components'

function HeroSection() {
  return (
    <HeroStyled>
    <div className='bloc-title'>
      <h4>Je suis </h4>
      <h1> UX UI Designer <br/> Integrateur web</h1>
    </div>

    <div className="bloc-paragraph">
        <p> Entre design et développement, je donne vie à des interfaces réalistes. Chaque projet est une occasion pour moi d'apprendre, d'innover et de créer des expériences uniques pour les utilisateurs.</p>
        <a href="/about"> En savoir plus </a>
    </div>
    </HeroStyled>
  )
}

const HeroStyled = styled.div`
    max-width: 100%;
    height: 90vh;
    font-family: 'Spartan';
    align-items: center;
    display: flex;
    padding: 0 8%;
    justify-content: space-between;



    .bloc-title {
        width: 45%;
    }

    .bloc-title h1{
      font-weight: normal;
      font-size: 2em;
      line-height: 1.5;
    }

    .bloc-title h4{
      margin-bottom: 0.5em;
    }

    .bloc-paragraph {
        width: 45%;
    }

    .bloc-paragraph p  {
      line-height: 1.5;
      font-weight: 500;
      font-family: 'Mulish';
      margin-bottom: 2em;
    }

    .bloc-paragraph a {
      color: #3C67FD;
    }
`

export default HeroSection;
