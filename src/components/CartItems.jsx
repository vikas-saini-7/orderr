import React from 'react';
import { styled } from 'styled-components';

const CartItems = ({id, img, name, price, quantity}) => {
    return (
        <CartItemStyled className="bg-white p-4 rounded-lg shadow-md flex items-center mb-2">
            <div className='flex items-center'>
                <img src={img} alt="" />
                <div className='flex flex-col'>
                    <p className='ml-2 name'>{name}</p>
                    <p className='ml-2 price'>&#8377; {price}</p>
                </div>
            </div>
            <div>
                <button class=" text-white px-3 py-1 rounded-md">-</button>
                    <input type="number" class="w-12 text-center" defaultValue={quantity}/>
                <button class="text-white px-3 py-1 rounded-md">+</button>
            </div>
            <p className='total'>&#8377; {price * quantity}</p>
        </CartItemStyled>
    );
}

const CartItemStyled = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
    img{
        width: 50px;
    }
    .name{
        font-size: 1.15rem;
    }
    .price{
        color: black;
        font-weight: bold;
    }
    .total{
        font-weight: bold;
    }
`;

export default CartItems;
