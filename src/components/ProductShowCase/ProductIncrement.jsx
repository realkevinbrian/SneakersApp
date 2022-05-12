import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cartIcon from "../../assets/images/icon-cart.svg";
import MinuIcon from "../../assets/images/icon-minus.svg";
import AddIcon from "../../assets/images/icon-plus.svg";
import { Icon } from "../NavigationBar/styled";
import * as S from "./styled";
import { addCart } from '../../features/postSlice';


/***
 * CartCount Component
 * Increment the numbers of product
 */
 export const CartCount = ({data}) => {

    const [Amount, setAmount] = useState(1);
    const dispatch = useDispatch();

    //=> function to increment
    function IncrementAmount (){
        setAmount(Amount + 1)
    }

    //=>Function to decrement
    function DecrementAmount(){
        
        //Make some conditions
        (Amount === 0) ? setAmount(Amount)
        : setAmount(Amount - 1)
    }

    // console.log("Updated Object : =>", )

    /***
     * handle Cart
     */
    function handleAddCart (){
        //here we merge our server data with selected 
        //amount to be able to catch in our store
        dispatch(addCart(Object.assign({Count : Amount },...data)))
    }

    return(
        <>
            <S.ProductPriceIncrement>
                <S.MinusBtn src={MinuIcon} onClick={DecrementAmount}/>
                <span>{Amount}</span>
                <S.AddBtn src={AddIcon} onClick={IncrementAmount}/>
            </S.ProductPriceIncrement>
            <S.BuyBtn onClick={handleAddCart}>
                <Icon src={cartIcon}/>Add to cart
            </S.BuyBtn>
        </>
        
    )
}
