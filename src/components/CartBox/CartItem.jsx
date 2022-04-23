import React from 'react'
import {H1, H2, P, BuyBtn, ShowCaseImage, Paragraph, MainPrice, DiscountPrice} from "../../components/ProductShowCase/styled"
import * as S from "./styled";
import { Icon } from '../NavigationBar/styled';
import deleteIcon from "../../assets/images/icon-delete.svg"
import Product1 from "../../assets/images/image-product-1.jpg";

function CartItem({data,increVal}) {
  return (
      <>
      
       { 
            data.map((item) =>{

                /**
                 * We gonna we checking for Increased Val
                 * if the increVal is greater than return increase else 1
                 */
                let Increased = (increVal > 0) ? increVal : 1;
                let total = `${item.currency} ${((item.price * item.discount) / 100) * Increased}`;

                /**
                 * Calculate Discount
                 */
                let discount = `${item.currency} ${(item.price * item.discount) / 100}`;
                
                return(
                <S.CartItem key={item.id}>
                    <ShowCaseImage src={Product1}/>
                    <Paragraph>
                        <span>{item.title}</span>
                        <span>
                            <DiscountPrice>{discount}</DiscountPrice>
                            <span> x {Increased} </span>
                            <MainPrice>{total}</MainPrice>
                        </span>
                    </Paragraph>
                    <Icon src={deleteIcon}/>
                </S.CartItem>
                )
            })
    }
    </>
  )
}

export default CartItem