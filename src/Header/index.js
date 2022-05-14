import React from "react";
import styled from 'styled-components';


function Header() {


    return (
        <HeaderContainer>
            <h2 className="header__logo">MTH</h2>
            <nav className="header__navigation">
                <a className="header__navigation-anchor" href="#inicio">Início</a>
                <a className="header__navigation-anchor" href="#sobre">Sobre</a>
                <a className="header__navigation-anchor" href="#formacao-habilidades">Formação e Habilidades</a>
                <a className="header__navigation-anchor" href="#projetos">Projetos</a>
            </nav>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.section`
    background: #000;
    display:flex;
    justify-content: space-between;
    padding: 0 3rem;
    align-items: center;
    min-height: 7vh;

    .header__logo {
        font-famiy:roboto, sans-serif;
        letter-spacing: 4px;
        font-size: 2rem;
        color: white;
        transition: .3s;
    }

    .header__logo:hover {
        color: var(--default-color);
    }

    .header__logo:hover {
        cursor: pointer;
    }

    .header__navigation {
        color: white;
    }

    .header__navigation-anchor {
        font-size: 1.1rem;
        text-transform:uppercase;
        padding: 1rem;
        font-weight:bold;
        transition: .3s;
        color: #FFF;
        text-decoration:none;
    }

    .header__navigation-anchor:hover {
        cursor: pointer;
        opacity: .8;
        border-bottom: .3rem solid var(--default-color);
        color: var(--default-color);
    }
`