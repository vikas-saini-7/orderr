import React from 'react';
import { styled } from 'styled-components';

const Hero = () => {
    return (
        <HeroStyled className='custom-container'>
            <div className="left">
                <h1>Discover &#x2022; Order &#x2022; Eat</h1>
                <p>Find the best food near by, Read reviews and get order placed and enjoy the food.</p>
                <button className='mt-8'>Let's Start</button>
            
            </div>
            <div className="right"></div>
        </HeroStyled>
    );
}

const HeroStyled = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
// background-image: url("https://img.freepik.com/free-photo/crop-plate-with-salad_23-2147753678.jpg");
background-size: cover;
color: white;
background: rgb(18,12,12);
background: linear-gradient(318deg, rgba(18,12,12,1) 0%, rgba(44,18,18,1) 100%);
min-height: 60vh;
    .left{
        h1{
            font-size: 3rem;
            font-weight: bold;
        }
        p{
            font-size: 1.15rem;
            max-width: 700px;
        }
    }
`;

export default Hero;
