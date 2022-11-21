import styled from "styled-components";
import React from "react";
import background from "../resources/img.png"


function FormacaoHabilidades() {

    const habilidades = ["Java, Spring Boot, JPA/Hibernate", "Maven", "Angular (básico)", "React (básico)", "HTML, CSS, Javascript e Typescript", "PostgreSQL e mySQL", "Fundamentos de API REST", "Versionamento com Git", "Docker"];

    return (
        <FormacaoHabilidadesContainer id="formacao-habilidades">
            <section className="formacao-habilidades__formacao">
                <h2>Formação.</h2>
                <div className="formacao-habilidades__container--universidades">
                    <div>
                        <h3>UNICESUMAR</h3>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                        <p>2022 - Atualmente</p>
                    </div>
                    <div>
                        <h3>Universidade Estadual de Londrina</h3>
                        <p>Graduação, Especialização e Mestrado em Geografia</p>
                        <p>2013 - 2021</p>
                    </div>
                </div>
            </section>
            <section className="formacao-habilidades__habilidades">
                <h2>Habilidades.</h2>
                <div className="formacao-habilidades__container--lista-habilidades">
                    <ul>
                        {habilidades.map(skill => <li key={habilidades.indexOf(skill)}>{skill}</li>)}
                    </ul>
                </div>
            </section>
        </FormacaoHabilidadesContainer>
    )
}

export default FormacaoHabilidades;

const FormacaoHabilidadesContainer = styled.section`
    background: url(${background});
    min-height: 30vh;
    padding: 3rem;
    display: flex;
    justify-content: space-around; 

    .formacao-habilidades__formacao, .formacao-habilidades__habilidades {
        width: 50%;
        color: #FFF;
    }

    .formacao-habilidades__formacao h2, .formacao-habilidades__habilidades h2 {
        font-size: 2.5rem;
        padding: 3rem 3rem 0 3rem;
        margin: 0;
        font-weight: 700;
    }


    .formacao-habilidades__formacao h2::before, .formacao-habilidades__habilidades h2::before {
        content: '';
        width: 3.5rem;
        background-color: var(--default-color);
        height: .15rem;
        display:inline-block;
        margin-right: 2rem;
        vertical-align:middle;
    }

    .formacao-habilidades__container--universidades, .formacao-habilidades__container--lista-habilidades {
        font-size: 1.2rem;
        padding: 3rem;
    }
`