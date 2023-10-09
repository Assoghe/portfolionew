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
        <a href="/about"> <button> En savoir plus </button></a>
    </div>
    </HeroStyled>
  )
}

const HeroStyled = styled.div`
    max-width: 100%;
    height: 100vh;
    background: red;
    font-family: 'Spartan';
    align-items: center;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;



    .bloc-title {
        width: 45%;
    }

    .bloc-paragraph {
        width: 45%;
    }
`

export default HeroSection;
