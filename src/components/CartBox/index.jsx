import React, { useState } from 'react'
import * as S from "./styled";
import {H1, H2, P, BuyBtn, ShowCaseImage, Paragraph, MainPrice, DiscountPrice} from "../../components/ProductShowCase/styled"
import Product1 from "../../assets/images/image-product-1.jpg";
import { Icon } from '../NavigationBar/styled';
import deleteIcon from "../../assets/images/icon-delete.svg"
import CartItem from './CartItem';


function CartBox ({data,status,increment,isCartOpen}){

    //=>Data prop is for displaying data
    //=>Status is for state
    // const [cartState, setCartState] = useState(false);
    
    return(
        <S.CartWrapper state={status} cartStatus = {isCartOpen}>
            <S.CartHeader>
                <h1>Cart</h1>
            </S.CartHeader>

            <S.CartBody>
                {
                    (data === null) ? <S.CartEmpty><H1>Your cart is empty</H1></S.CartEmpty> 
                    :<S.CartData>
                        <CartItem data={data} increVal = {increment}/>
                        <BuyBtn>Check out</BuyBtn>
                    </S.CartData>   
                }
            </S.CartBody>
        </S.CartWrapper>
    )
}

export default CartBox;