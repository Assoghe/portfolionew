import { styled } from 'styled-components'
import data from '../../data/portfolio.json'

function PortfolioSection() {

  return (
    <PortfolioSectionStyle>

    {
        data.map((portfolio, i) => (
            <div className="portfoliocard" style={{backgroundColor: portfolio.background}}>
            <div className="bloc-image">
                <img src={portfolio.image} alt={portfolio.name}/>
            </div>
            
            <div className="bloc-text">
                <h5>{portfolio.type}</h5>
                <h3>{portfolio.name}</h3>
                <p> {portfolio.description}</p>
                <a href="">Voir étude de cas</a>
            </div>
        </div>
        ))
    }



       
    </PortfolioSectionStyle>
  )
}

const PortfolioSectionStyle = styled.div`
    display: grid;
    grid-template-columns : 1fr 1fr;
    height: auto;
    gap: 54px;
    padding: 0 8%;
    margin-bottom: 15em;

    .bloc-image {
        width: 100%;
    }

    .bloc-image img {
        width: 100%;
    }


    .portfoliocard {
        background-color:#EE64F0;
        border-radius: 1.5em;
        width: 100%;
        margin-bottom: 36px;
    }

    .bloc-image {
        width: 100%;
        height: auto;
    }

    .bloc-text {
        padding: 36px;
        box-shadow: 0px -12px 12px 0px rgba(0, 0, 0, 0.04);
    }


    .bloc-text h5 {
        font-size: 12px;
        font-family: 'Mulish';
        margin-bottom: 20px;
    }

    .bloc-text h3{
        font-size:24px;
        margin-bottom: 20px;
        font-family: 'Spartan';
        font-weight: 600;
    }

    .bloc-text p {
        font-size: 15px;
        line-height: 1.5;
        font-family: 'Mulish';
        margin-bottom: 36px;
    }

    .bloc-text a {
        font-family: 'Spartan';
        font-size: 18px;
    }



`

export default PortfolioSection
