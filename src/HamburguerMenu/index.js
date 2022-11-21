import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import './index.css';

function HamburguerMenu() {

    return (
        <HamburguerContainer>
        
        <Menu>
            <a className="menu-item" href="#inicio">
            Início
            </a>
            <a className="menu-item" href="#sobre">
            Sobre
            </a>
            <a className="menu-item" href="#formacao-habilidades">
            Formação e Habilidades
            </a>
            <a className="menu-item" href="#projetos">
            Projetos
            </a>
        </Menu>    
        <h2 className="header__logo">MTH</h2>
    </HamburguerContainer>
    );
}

export default HamburguerMenu;

const HamburguerContainer = styled.section`
    background: #000;
    display:flex;
    justify-content: space-between;
    padding: 0 3rem;
    align-items: center;
    min-height: 7vh;
    position: fixed;
    width:100%;

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

    
    @media screen and (min-width: 480px) {
        display:none;
    }
`;
