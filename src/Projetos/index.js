import React from "react";
import styled from "styled-components";
import background from "../resources/background2.png";
import SimpleSlider from "../Carousel";

function Projetos() {

    return (
        <ProjetosContainer>
            <h2 className="projetos__titulo">Projetos.</h2>
            <div className="projetos__slider">
                <SimpleSlider />
            </div>
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

    .projetos__slider {
        margin: 0 25rem;
    }
`