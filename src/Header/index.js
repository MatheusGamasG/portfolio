import React from "react";
import styled from 'styled-components';


function Header() {


    return (
        <HeaderContainer>
            <h2 className="header__logo">MTH</h2>
            <nav className="header__navigation">
                <a className="header__navigation-anchor">Home</a>
                <a className="header__navigation-anchor">Sobre</a>
                <a className="header__navigation-anchor">Habilidades</a>
                <a className="header__navigation-anchor">Formação</a>
                <a className="header__navigation-anchor">Projetos</a>
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

    .header__logo {
        font-famiy:roboto, sans-serif;
        letter-spacing: 4px;
        font-size: 2rem;
        color: white;
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
    }

    .header__navigation-anchor:hover {
        cursor: pointer;
        opacity: .8;
        border-bottom: .3rem solid #ff7b00;
    }
`