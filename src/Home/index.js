import React from "react";
import styled from "styled-components";
import background from '../resources/img.png'
import foto from '../resources/foto.jpg'
import background2 from '../resources/background2.png'
import resilience from '../resources/resilience.png'
import mission from '../resources/work.png'
import proativity from '../resources/commitment.png'

function Home() {
    

    return (
        <HomeContainer>
            <section className="home__title-photo-section">
                <div className="home__textos">
                    <p className="home__frase-principal">Ser proativo, ser consistente.</p>
                    <h1 className="home__titulo">Matheus Gamas Guimarães.</h1>
                    <div className="home__subtitulo-container">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 className="home__subtitulo">Desenvolvedor Front-End</h3>  
                    </div>                    
                </div>
                <figure className="home__foto-container">
                    <img className="home__foto-principal" src={foto} alt="Foto de Matheus Gamas Guimarães" />
                    <figcaption className="home__legenda-foto">26 Anos. Londrina - Paraná.</figcaption>
                </figure>
            </section>
            <section className="home__softskills">
                <article className="home__softskills-card">
                    <img />
                    <h2>Fazer, fazer, fazer</h2>
                    <p>Falar sobre Proatividade</p>
                </article>
                <article className="home__softskills-card">
                    <img />
                    <h2>Missão dada é missão cumprida</h2>
                    <p>Falar sobre comprometimento</p>
                </article>
                <article className="home__softskills-card">
                    <img />
                    <h2>Adaptar-se é preciso</h2>
                    <p>Falar sobre resiliência</p>
                </article>
            </section>            
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.main`
    background-image: url(${background});
    height: 90vh;
    color: #FFF;
    padding: 3rem;

    .home__title-photo-section {
        display:flex;
        justify-content: space-between;
    }

    .home__textos {
        margin-left: 4rem;
        width:40%;
    }

    .home__titulo {
        margin: 1rem;
        font-size: 4rem;
        text-wrap:wrap;
    }

    .home__subtitulo-container {
        position:relative;   
        padding:1rem;
        overflow:hidden;
    }

    .home__subtitulo-container div {
        position:absolute;
    }

    .home__subtitulo-container div:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background:linear-gradient(90deg, transparent, #ff7b00);
        animation: cargo1 2s linear infinite;
    }

    .home__subtitulo-container div:nth-child(2) {
        right: 0;
        top: -100%;
        width: 2px;
        height: 100%;
        background:linear-gradient(180deg, transparent, #ff7b00);
        animation: cargo2 2s linear infinite;
        animation-delay: 0.5s;
    }

    .home__subtitulo-container div:nth-child(3) {
        bottom: 0;
        height: 2px;
        width: 100%;
        right: -100%;
        background:linear-gradient(270deg, transparent, #ff7b00);
        animation: cargo3 2s linear infinite;
        animation-delay: 1s;
    }

    .home__subtitulo-container div:nth-child(4) {
        bottom: -100%;
        width: 2px;
        height:100%;
        left: 0;
        background:linear-gradient(360deg, transparent, #ff7b00);
        animation: cargo4 2s linear infinite;
        animation-delay: 1.5s; 
    }

    .home__subtitulo {
        text-align:center;
        font-size: 2rem;
        color: #ff7b00;   
    }

    .home__frase-principal {
        font-size:1.3rem;
        color: #ff7b00;
        text-transform: uppercase;
        margin-left:1.5rem;
    }

    @keyframes cargo1 {
        0% {
            left: -100%;
        }

        50%, 100% {
            left: 100%;
        }
    }

    @keyframes cargo2 {
        0% {
            top: -100%;
        }

        50%, 100% {
            top: 100%;
        }
    }

    @keyframes cargo3 {
        0% {
            right: -100%;
        }

        50%, 100% {
            right: 100%;
        }
    }

    @keyframes cargo4 {
        0% {
            bottom: -100%;
        }

        50%, 100% {
            bottom: 100%;
        }
    }

    .home__foto-container {
        width: 50%;
        height:100%;
        object-fit: scale-down;
    }

    .home__foto-principal {
        display:block;
        width:20rem;
        height: 20rem;
        object-fit: cover;        
        margin: 0 auto;
        border: .5rem solid #ff7b00;
        border-radius:100%;
    }

    .home__legenda-foto {
        text-align:center;
        padding-top: 1.5rem;
        font-size: 1.2rem;
    }

    .home__softskills {
        display:flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1.5rem;
    }

    .home__softskills-card {
        background: url(${background2});
        text-align:center;
        padding: 1rem;
        width: 21%;
    }

    .home__softskills-card h2 {
        font-weight: bolder;
    }
`;

