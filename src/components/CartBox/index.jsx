import React from 'react';
import { BuyBtn, H1 } from "../../components/ProductShowCase/styled";
import CartItem from './CartItem';
import * as S from "./styled";
import {SelectAll} from "../../features/menuSlice"
import { useSelector } from 'react-redux';




function CartBox ({increment}){

    const cartState = useSelector(SelectAll).cartState;
    const cartList = useSelector(state => state.post.cartItemList);
    
    return(
        <S.CartWrapper cartState ={cartState}>
            <S.CartHeader>
                <h1>Cart</h1>
            </S.CartHeader>

            <S.CartBody>
                {
                    (cartList.length === 0) ? <S.CartEmpty><H1>Your cart is empty</H1></S.CartEmpty> 
                    :<S.CartData><CartItem data={cartList} increVal = {increment}/><BuyBtn>Check out</BuyBtn></S.CartData>   
                }
            </S.CartBody>
        </S.CartWrapper>
    )
}

export default CartBox;