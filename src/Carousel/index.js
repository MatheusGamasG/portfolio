import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <SliderItem>
            <h2>DSMeta</h2>
            <p><span>Descrição:</span> Projeto envolvendo o backend e o frontend de uma aplicação, o objetivo é a junção de um Web Service de simulação de vendas e a possibilidade de enviar SMS de avisos.</p>
            <p>Ferramentas Utilizadas:</p>
            <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Twilio</li>
                <li>React</li>
            </ul>
            <p>Link do <a href="https://github.com/MatheusGamasG/DSMeta">Github</a></p>
        </SliderItem>
        <SliderItem>
            <h2>Parking Lot API</h2>
            <p><span>Descrição:</span> Projeto envolvendo a elaboração de um web service em modelo de microsserviços. O objetivo é a reserva de espaços de um estacionamento imaginário.</p>
            <p>Ferramentas Utilizadas:</p>
            <ul>
                <li>Java</li>
                <li>Spring Boot</li>
            </ul>
            <p>Link do <a href="https://github.com/MatheusGamasG/parking-control">Github</a></p>
        </SliderItem>
        <SliderItem>
            <h2>ConFusion</h2>
            <p><span>Descrição:</span> Projeto envolvendo a elaboração de um front-end para um restaurante hipotético. O objetivo é o aprendizado de formulários, validações e outras APIs importantes do Angular.</p>
            <p>Ferramentas Utilizadas:</p>
            <ul>
                <li>Angular</li>
                <li>Angular Material</li>
            </ul>
            <p>Link do <a href="https://github.com/MatheusGamasG/conFusion">GitHub</a> </p>
        </SliderItem>
      </Slider>
    );
  }

  const SliderItem = styled.div`
    background: #020202;
    padding: 2rem;
    min-height: 20rem;
    text-align: center;
    color: #FFFFFF;
    border-radius: 3rem;

    a {
        text-decoration: none;
    }
  `;