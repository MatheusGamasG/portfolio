import styled from "styled-components";
import React from "react";
import background from "../resources/img.png"


function FormacaoHabilidades() {

    return (
        <FormacaoHabilidadesContainer id="formacao-habilidades">
            <section className="formacao-habilidades__formacao">
                <h2>Formação.</h2>
                <div>
                    <h3>UNICESUMAR</h3>
                    <p>Análise e Desenvolvimento de Sistemas</p>
                    <p>2022 - 2024</p>
                </div>
                <div>
                    <h3>Universidade Estadual de Londrina</h3>
                    <p>Mestrado em Geografia</p>
                    <p>2019 - 2021</p>
                </div>
                <div>
                    <h3>Universidade Estadual de Londrina</h3>
                    <p>Licenciatura em Geografia</p>
                    <p>2013 - 2017</p>
                </div>
            </section>
            <section className="formacao-habilidades__habilidades">
                <h2>Habilidades.</h2>
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

    .formacao-habilidades__formacao, .formacao-habilidades__habilidades {
        width: 50%;
        color: #FFF;
    }

    .formacao-habilidades__formacao h2, .formacao-habilidades__habilidades h2 {
        font-size: 2.5rem;
        padding: 3rem;
        margin: 0;
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
`