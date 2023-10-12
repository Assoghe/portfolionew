import React from 'react'
import { styled } from 'styled-components'

function AboutSection() {
  return (
    <AboutSectionStyled>
      <h2> A propos </h2>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet vel beatae, minus ea veniam molestias odit laborum facere voluptas ipsa non, delectus est cum repudiandae nostrum, laudantium architecto omnis!
      Consectetur a dicta molestias quibusdam placeat cum veniam odio eaque. Distinctio, id! Mollitia iusto delectus eligendi quas debitis ut atque aperiam facilis rerum, architecto aut dicta? Assumenda, similique blanditiis? Reprehenderit!
      Corrupti vel distinctio, explicabo quam quia a accusantium. Sapiente, ex nam quidem, nostrum veniam deserunt eum architecto at enim cupiditate quasi rerum totam eveniet, fuga sunt quo adipisci ipsam magni.
      Repellat odit provident quisquam voluptatum fugit ducimus quidem dolorum, animi veniam sint rem tenetur quas soluta dolor nam magni ipsum recusandae ex, natus minus quos minima facere eum obcaecati. Quisquam.</p>

      <a href=""> <span> En savoir plus </span></a>
    </AboutSectionStyled>
  )
}

const AboutSectionStyled = styled.div`
    padding: 2em;
    background: #4050DB;
    border-radius: 1em;
    margin: 0 8%;

    h2 {
        font-family: 'Spartan';
        line-height: 1.5;
        font-weight: 500;
    }

    p {
        font-family: 'Mulish';
        line-height: 1.5;
        margin-bottom: 2em;
    }

    a span {
        background: white;
        padding: 12px 24px;
        color: #4050DB;
        border-radius: 0.5em;
        margin-top: 2em;
        font-family: 'Mulish';
        font-weight: 600;
    }
`

export default AboutSection
