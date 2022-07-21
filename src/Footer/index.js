import styled from "styled-components";
import React from "react";
import background from "../resources/img.png"


export default function Footer() {

    return (
        <FooterDiv>
            <p>Desenvolvimento com React por <a href="https://www.linkedin.com/in/matheus-gamas-g/">Matheus Guimarães</a></p>
        </FooterDiv>
    );
}

const FooterDiv = styled.div`
        background-image: url(${background});
        padding: 3rem;
        text-align: center;
        color: #FFFFFF;
        font-size: 1.2rem;
        
        a {
            text-decoration: none;
        }
    `;

