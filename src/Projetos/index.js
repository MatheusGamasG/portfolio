import React from "react";
import styled from "styled-components";
import background from "../resources/background2.png";
import cardBackground from "../resources/img.png"


function Projetos() {

    return (
        <ProjetosContainer id="projetos">
            <h2 className="projetos__titulo">Projetos.</h2>
            <section className="projetos__cards">
                <article className="projetos__card">
                    {/* <img src={proativity} alt="Imagem de ferramentas de trabalho" className="card__photo"/> */}
                    <h2>DSMeta</h2>
                    <p>Projeto envolvendo o backend e o frontend de uma aplicação, o objetivo é a junção de um Web Service de simulação de vendas e a possibilidade de enviar SMS de avisos.</p>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>Twilio</li>
                        <li>React</li>
                    </ul>
                    <p>Código no Github: <a href="">DSMeta</a></p>
                </article>
                <article className="projetos__card">
                    {/* <img src={commitment} alt="Imagem de um aperto de duas mãos" className="card__photo"/> */}
                    <h2>Parking Lot API</h2>
                    <p>Projeto envolvendo a elaboração de um web service em modelo de microsserviços. O objetivo é a reserva de espaços de um estacionamento imaginário.</p>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                    </ul>
                    <p>Código no Github: <a href="">Parking Lot API</a></p>
                </article>
                <article className="projetos__card">
                    {/* <img src={resilience} alt="Imagem de uma escada sendo dobrada sem quebrar" className="card__photo"/> */}
                    <h2>ConFusion</h2>
                    <p>Projeto envolvendo a elaboração de um front-end para um restaurante hipotético. O objetivo é o aprendizado de formulários, validações e outras APIs importantes do Angular.</p>
                    <ul>
                        <li>Angular</li>
                        <li>Angular Material</li>
                    </ul>
                    <p>Código no Github: <a href="">ConFusion</a></p>
                </article>
            </section>
        </ProjetosContainer>
    );
}

export default Projetos;

const ProjetosContainer = styled.section`
    background-image: url(${background});
    min-height: 25vh;
    padding: 3rem 3rem 3rem 4rem;

    .projetos__titulo {
        color: #FFF;
        margin: 0;
        padding: 2rem;
        font-size: 2.5rem;
        font-weight: 700;
    }

    .projetos__titulo::before {
        content: '';
        width: 3.5rem;
        background-color: var(--default-color);
        height: .15rem;
        display:inline-block;
        margin-right: 2rem;
        vertical-align:middle;
    }

    .projetos__cards {
        margin: 0 2rem;
        display:flex;
        justify-content:space-around;
    }

    .projetos__card {
        background-image: url(${cardBackground});
        margin: 2rem;
        padding: 1rem;
        min-height: 20rem;
        text-align: center;
        color: #FFFFFF;
        border: .1rem solid var(--default-color);

    }

    .projetos__card:hover {
        border: .3rem solid var(--default-color);
        cursor:pointer;
        transform: scale(1.05)
    }

    .projetos__card a {
        text-decoration: none;
    }

    @media screen and (max-width: 1024px) {
        .projetos__card {
            min-width: 30%;
        }
    }

    @media screen and (max-width: 768px) {
        .projetos__cards {
            flex-direction: column;
        }

        .projetos__card {
            min-width: 90%;
        }
    }

    @media screen and (max-width: 480px) {
        padding: 1.5rem 0;
    }
`