import React from 'react';
import { styled } from 'styled-components';
import { cartItems } from '../DUMMY_DATA';
import CartItems from '../components/CartItems.jsx'


const CartPage = () => {

    // const calcTotalAmount = cartItems.reduce(function(prev, curr){
    //     return prev.price + curr.price;
    // }, 0)
    // console.log( "Value " + calcTotalAmount)
    const totalAmount = () => {  
        const Amounts = cartItems.map((item) => item.price * item.quantity);
        const amountSum = Amounts.reduce((prev, curr) => prev + curr, 0) ;
        return amountSum.toFixed(2);
    }
    
    
    return (
        <CartPageStyled className='custom-container'>
            <h1>Your Food Cart</h1>
            {/* CART ITEMS  */}
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItems
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </div>
            <div className="total-amount-card">Total Amount to be paid: <span>&#8377; {totalAmount()}</span></div>
            <div className='text-right mt-4'>
                <button className='mr-2 clear'>Clear Cart</button>
                <button className=''>Proceed to Pay</button>
            </div>
        </CartPageStyled>
    );
}

const CartPageStyled = styled.div`
width: 100%;
max-width: 800px;
margin: 0 auto;
padding: 16px;
    h1{
        font-size: 1.5rem;
        font-weight: bold;
    }
    .cart-items{}
    .total-amount-card{
        width: 100%;
        text-align: right;
        padding: 16px;
        font-size: 1.15rem;
        // font-weight: bold;
        // text-transform: uppercase;
        span{
            font-weight: bold;
            font-size: 1.5rem;
        }
    }
    .clear{
        background-color: gray;
        color: white;
    }
`;

export default CartPage;
