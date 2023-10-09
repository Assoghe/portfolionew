import React from 'react'
import { styled } from 'styled-components'

function PortfolioSection() {
  return (
    <PortfolioSectionStyle>
        <div className="portfoliocard">
            <div className="bloc-image">
                <img src=''/>
            </div>
            
            <div className="bloc-text">
                <h5>Application mobile - UX - UI</h5>
                <h3>Nom de la carte</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi totam necessitatibus eveniet omnis, deleniti aliquid laboriosam, quisquam, facere at quam earum in neque iusto officia incidunt natus consequatur libero!</p>
                <a href="">Voir étude de cas</a>
            </div>
        </div>
    </PortfolioSectionStyle>
  )
}

const PortfolioSectionStyle = styled.div`
    display: grid;
    grid-template-columns : 1fr 1fr;
    height: auto;
    gap: 54px;
    padding: 0 10%;
    border-radius: 20px;

    .bloc-image {
        height: 535px;
        background-color: blue;

    }

    .bloc-text {
        padding: 54px;
        background-color: red;
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
    }

    .bloc-text p {
        font-size: 15px;
        line-height: 1.5;
        font-family: 'Mulish';
        margin-bottom: 54px;
    }

    .bloc-text a {
        font-family: 'Spartan';
        font-size: 18px;
    }



`

export default PortfolioSection
