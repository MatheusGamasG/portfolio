import styled from "styled-components";
import background from "../resources/background2.png";
import iconLkdin from "../resources/logotipo-do-linkedin.png";
import iconGithub from "../resources/github.png";
import iconInsta from "../resources/instagram.png";
import iconGmail from "../resources/logotipo-do-gmail.png";

function Sobre() {
 
    return (
        <>
            <SobreContainer id="sobre">
                <section className="sobre__apresentacao ">
                    <h2 className="sobre__titulo">Sobre.</h2>
                    
                    <p className="sobre__paragrafo-principal"><span>Olá,</span>Meu nome é <span>Matheus</span>, sou estudante de Análise e Desenvolvimento de Sistemas e trabalho como <span>Desenvolvedor Java</span>. Venho me especializando em Desenvolvimento com diversos cursos livres em plataformas como Alura, Udemy e na prática do dia a dia, meu objetivo é que, com o tempo, possa andar em direção ao Desenvolvimento FullStack. Meu objetivo atual é ganhar mais experiência profissional na área de desenvolvimento. Possuo experiência acadêmica, sei como estudar com afinco e possuo facilidade com tecnologia e com comunicação. Além disso, acredito que posso agregar muito com as soft skills adquiridas em minha carreira pregressa (professor).</p>
                </section>
                <section className="sobre__contatos">
                    <p className="sobre__contato-paragrafo">Quer conversar comigo?</p>
                    <p className="sobre__contato-paragrafo">Entre em <span>contato</span> !</p>
                    <a href="https://www.linkedin.com/in/matheus-gamas-g/" rel="noreferrer" target="_blank"><img src={iconLkdin} alt="Icone do LinkedIn" className="sobre__contato-icone" /></a>
                    <a href="https://github.com/MatheusGamasG" rel="noreferrer" target="_blank"><img src={iconGithub} alt="Icone do Github" className="sobre__contato-icone" /></a>
                    <a href="mailto:matheusgamasg@gmail.com" rel="noreferrer"><img src={iconGmail} alt="Icone do Gmail" className="sobre__contato-icone" /></a>
                    <a href="https://www.instagram.com/matheus.guimaraes_/" rel="noreferrer" target="_blank"><img src={iconInsta} alt="Icone do Instagram" className="sobre__contato-icone" /></a>
                </section>                
            </SobreContainer>
        </>
    )
}

export default Sobre;

const SobreContainer = styled.section`
    background-image: url(${background});
    min-height: 25vh;
    padding: 3rem 3rem 3rem 4rem;
    display:flex;
    align-items: center;

    .sobre__apresentacao {
        width: 50%;
    }

    .sobre__titulo {
        color: #FFF;
        margin: 0;
        padding: 2rem;
        font-size: 2.5rem;
        font-weight: 700;
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
        font-size: 1.2rem;
        line-height: 2.5rem;
        color: #FFF;
    }

    .sobre__paragrafo-principal span:nth-child(1) {
        display: block;
        color: var(--default-color);
        font-size: 2.2rem;
        font-weight: bold;
    }

    .sobre__paragrafo-principal span:nth-child(2) {
        color: var(--default-color);
        font-weight: bold;
    }

    .sobre__contatos {
        color: #FFF;
        font-size: 1.5rem;
        width: 50%;
        text-align: center;
    }

    .sobre__contatos p:nth-child(2) {
        margin-bottom: 5rem;
    }

    .sobre__contatos p span {
        color: var(--default-color);
        font-weight:bold;
    }

    .sobre__contato-icone {
        filter: invert(0.9);
        width: 6rem;
        height: 6rem;
        margin: 1rem;
    }

    .sobre__contato-icone:hover {
        opacity: 0.6;
    }
`;