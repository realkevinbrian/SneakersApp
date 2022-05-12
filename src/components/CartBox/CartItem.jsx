import React from 'react';
import deleteIcon from "../../assets/images/icon-delete.svg";
import Product1 from "../../assets/images/image-product-1.jpg";
import { DiscountPrice, MainPrice, Paragraph, ShowCaseImage } from "../../components/ProductShowCase/styled";
import { Icon } from '../NavigationBar/styled';
import * as S from "./styled";
import { deleteCart } from '../../features/postSlice';
import { useDispatch } from 'react-redux';

function CartItem({data}) {

    //call dispatch
    const dispatch = useDispatch();

    
  return (
      <>
      
       { 
            data.map((item) =>{

                return(
                <S.CartItem key={item.id}>
                    <ShowCaseImage src={Product1}/>
                    <Paragraph>
                        <span>{item.title}</span>
                        <span>
                            <DiscountPrice>{((item.price * item.discount) / 100)}</DiscountPrice>
                            <span> x {item.Count} </span>
                            <MainPrice>{(item.price * item.Count)}</MainPrice>
                        </span>
                    </Paragraph>
                    <Icon src={deleteIcon} onClick = {()=>dispatch(deleteCart({id:item.id}))}/>
                </S.CartItem>
                )
            })
    }
    </>
  )
}

export default CartItem