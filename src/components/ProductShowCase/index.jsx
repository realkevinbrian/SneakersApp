import React from 'react';
import * as S from "./styled";
import Product1 from "../../assets/images/image-product-1.jpg";
import Product2 from "../../assets/images/image-product-2.jpg";
import Product3 from "../../assets/images/image-product-3.jpg";
import Product4 from "../../assets/images/image-product-4.jpg";

import AddIcon from "../../assets/images/icon-plus.svg";
import MinuIcon from "../../assets/images/icon-minus.svg";
import { Icon } from '../NavigationBar/styled';
import cartIcon from "../../assets/images/icon-cart.svg"

function index() {
  return (
    <>
        <S.Container>

            <S.ProductWrapper>

                <S.ProductShowCase>
                    <S.ProductPreview>
                        <S.PreviewImage src={Product1}/>
                    </S.ProductPreview>
                    <S.ShowCaseWrapper>
                        <S.ShowCaseImage src={Product1}/>
                        <S.ShowCaseImage src={Product2}/>
                        <S.ShowCaseImage src={Product3}/>
                        <S.ShowCaseImage src={Product4}/>
                    </S.ShowCaseWrapper>
                </S.ProductShowCase>

            </S.ProductWrapper>

            <S.ProductWrapper>
                <S.ProductContentWrapper>
                    
                    <S.ProductContentText>
                        <S.H2>Sneaker Company</S.H2>
                        <S.H1>Fall Limited Edition <br/>Sneakers</S.H1>
                        <S.Paragraph>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                        </S.Paragraph>
                    </S.ProductContentText>

                    <S.PriceWrapper>
                        <S.MainPrice>$125.00</S.MainPrice>
                        <S.DiscountPercentage>50%</S.DiscountPercentage>
                        <S.DiscountPrice>$250.00</S.DiscountPrice>
                    </S.PriceWrapper>

                    <S.AddCartWrapper>

                        <S.ProductPriceIncrement>
                            <S.MinusBtn src={MinuIcon}/>
                            <span>{0}</span>
                            <S.AddBtn src={AddIcon}/>
                        </S.ProductPriceIncrement>

                        <S.BuyBtn><Icon src={cartIcon}/>Add to cart</S.BuyBtn>

                    </S.AddCartWrapper>
                </S.ProductContentWrapper>
            </S.ProductWrapper>

        </S.Container>
    </>
  )
}

export default index