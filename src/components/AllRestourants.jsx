import React from 'react';
import { styled } from 'styled-components';

const AllRestourants = ({id, name, img, category, orders, price}) => {
    return (
        <AllRestourantsStyled>
            <div className="image-con">
                <img src={img} alt="Not Found" />
            </div>
            <div className="details-con">
                <p className='name'>{name}</p>
                <p className="category">{category}</p>
                <p className="orders">{orders} orders in last 24 hours!</p>
                <div className="price-con">
                    <p className="price">&#8377; {price}</p>
                    <p></p>
                </div>
            </div>
        </AllRestourantsStyled>
    );
}

const AllRestourantsStyled = styled.div`
// display: flex;
.image-con{

    img{
        width: 100%;
    }
}
.details-con{
    .name{
        margin-top: 16px;
        font-weight: bold;
        font-size: 1.5rem;
    }
    .category{
        text-transform: uppercase;
        font-size: 0.7rem;
        color: tomato;
        font-weight: bold;
    }
    .orders{
        font-size: 0.7rem;
        // color: green;
    }
    .price-con{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .price{
            font-weight: bold;
            font-size: 1.5rem;
            // color: #c73c00;
        }
    }
}
`;

export default AllRestourants;
