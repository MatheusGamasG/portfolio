import styled from "styled-components";
import background from "../resources/background2.png"

function Sobre() {

    return (
        <SobreContainer>
            <section className="sobre__apresentacao ">
                <h2 className="sobre__titulo">Sobre.</h2>
                
                <p className="sobre__paragrafo-principal"><span>Oi,</span>Meu nome é <span>Matheus</span> e sou estudante de Análise e Desenvolvimento de Sistemas e, atualmente, trabalho como professor. Venho me especializando em Desenvolvimento Front-End com diversos cursos livres em plataformas como Alura e Digital Innovation One. Meu objetivo atual é transicionar para a área de tecnologia. Possuo experiência acadêmica, sei como estudar com afinco e possuo facilidade com tecnologia e com comunicação. Além disso, acredito que posso agregar muito com as soft skills adquiridas em minha carreira pregressa.</p>
            </section>
            <section className="sobre__contatos">

            </section>
        </SobreContainer>
    )
}

export default Sobre;

const SobreContainer = styled.section`
    background-image: url(${background});
    min-height: 40vh;
    padding: 3rem 3rem 3rem 4rem;

    .sobre__apresentacao {
        width: 50%;
    }

    .sobre__titulo {
        color: #FFF;
        margin: 0;
        padding: 2rem;
        font-size: 2.8rem;
    }

    .sobre__titulo::before {
        content: '';
        width: 3.5rem;
        background-color: var(--default-color);
        height: .15rem;
        display:inline-block;
        margin-right: 2rem;
        vertical-align:middle;
    }

    .sobre__paragrafo-principal {
        padding: 2rem;
        font-size: 1.5rem;
        line-height: 2.5rem;
        color: #FFF;
    }

    .sobre__paragrafo-principal span:nth-child(1) {
        display: block;
        color: var(--default-color);
        text-shadow: -1px -1px 4px var(--default-color);
        font-size: 2rem;
    }

    .sobre__paragrafo-principal span:nth-child(2) {
        color: var(--default-color);
        text-shadow: -1px -1px 4px var(--default-color);
    }
`;