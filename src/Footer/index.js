import styled from "styled-components";
import React from "react";
import background from "../resources/img.png"


export default function Footer() {

    return (
        <FooterDiv>
            <p>Desenvolvido com React</p>
            <p><a href="https://www.linkedin.com/in/matheus-gamas-g/">Matheus Guimarães</a> - 2022</p>
        </FooterDiv>
    );
}

const FooterDiv = styled.div`
        background-image: url(${background});
        padding: 1.5rem 3rem;
        text-align: center;
        color: #FFFFFF;
        font-size: 1.2rem;
        
        a {
            text-decoration: none;
        }
    `;

