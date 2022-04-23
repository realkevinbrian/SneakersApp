import AddIcon from "../../assets/images/icon-plus.svg";
import MinuIcon from "../../assets/images/icon-minus.svg";
import { Icon } from "../NavigationBar/styled";
import React, { useRef, useState } from 'react';
import * as S from "./styled";
import cartIcon from "../../assets/images/icon-cart.svg"


/***
 * CartCount Component
 * Increment the numbers of product
 */
 export const CartCount = ({getAmount}) => {

    const [Amount, setAmount] = useState(0);

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
    return(
        <>
            <S.ProductPriceIncrement>
                <S.MinusBtn src={MinuIcon} onClick={DecrementAmount}/>
                <span>{Amount}</span>
                <S.AddBtn src={AddIcon} onClick={IncrementAmount}/>
            </S.ProductPriceIncrement>
            <S.BuyBtn onClick={()=>getAmount(Amount)}>
                <Icon src={cartIcon}/>Add to cart
            </S.BuyBtn>
        </>
        
    )
}
