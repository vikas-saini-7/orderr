import React from 'react';
import { styled } from 'styled-components';
import { DUMMY_DATA } from '../DUMMY_DATA.js';

import Hero from '../components/Hero.jsx'
import AllRestourants from '../components/AllRestourants.jsx'


const HomePage = () => {
    return (
        <HomePageStyled>
            <Hero/>
            <div className="panel"></div>
            <div className="custom-container" style={{textAlign: 'right'}}>
                <button>Sort By</button>
            </div>
            <div className="panel"></div>
            {/* ALL Restaurants  */}
            <div className="custom-container all-restaurants">
                {DUMMY_DATA.map((item) => (
                    <AllRestourants
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        category={item.category}
                        orders={item.orders}
                        price={item.price}
                    />
                ))}
            </div>
            <div className="panel"></div>
        </HomePageStyled>
    );
}

const HomePageStyled = styled.div`
// padding: 16px
.all-restaurants{
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
`;

export default HomePage;
