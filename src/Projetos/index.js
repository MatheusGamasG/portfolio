import React from "react";
import styled from "styled-components";
import background from "../resources/background2.png";

function Projetos() {

    return (
        <ProjetosContainer>
            <h2 className="projetos__titulo">Projetos.</h2>
            
        </ProjetosContainer>
    );
}

export default Projetos;

const ProjetosContainer = styled.section`
    background-image: url(${background});
    min-height: 25vh;
    padding: 3rem 3rem 3rem 4rem;
    display:flex;
    align-items: center;

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
`