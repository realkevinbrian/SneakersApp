import React, { useState } from 'react'

import { Container, IncrementBtn, ProductDesc, ProductShowCase, SmallBtn, PriceDesc, Grid, AddCartBtn, Wrapper, Overlay } from "./Product.styled";


import ProductWrapper from './ProductWrapper';
import product1 from "../../../assets/images/image-product-1.jpg";
import { Button, Flex, Icon } from '../Navbar/Navbar.Styled';

//icons
import IconCart from "../../../assets/images/icon-cart.svg"
import addIcon from "../../../assets/images/icon-plus.svg"
import minusIcon from "../../../assets/images/icon-minus.svg"
import IconNext from "../../../assets/images/icon-next.svg";
import IconPrev from "../../../assets/images/icon-previous.svg";
import IconClose from "../../../assets/images/icon-close.svg"



function Product() {

  
  //Product overlay
  const [overlay, setOverlay] = useState(true); 
  
  
  function handleOverlay () {
    
  }

  return (
    <React.Fragment>
        <Container>
          <Grid>

            <Wrapper>
              <ProductWrapper/>
              {
                overlay && 
                <Overlay>
                  <Icon src={IconClose} onClick = { () => setOverlay(false)}/>
                  <Icon src={IconPrev}/>
                  <ProductWrapper/>
                  <Icon src={IconNext}/>
                </Overlay>
              }
            </Wrapper>
            
            <Flex dir = "column" align="none">
              
              <ProductDesc>
                <span>SNEAKERS COMPANY</span>
                <h1> Fall Limited Edition <br/>Sneakers</h1>
                <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
              </ProductDesc>
              
              <PriceDesc>
                <strong>$125.00</strong>
                <span>50%</span>
                <small>$250.00</small>
              </PriceDesc>

              <Flex>
                <IncrementBtn>
                  <SmallBtn>
                  <Icon w="10px" h="4px" src={minusIcon}/>
                  </SmallBtn>
                    <span>{0}</span>
                  <SmallBtn>
                  <Icon src={addIcon} w="10px" h="10px"/>
                  </SmallBtn>
                </IncrementBtn>
                <AddCartBtn>
                  <Icon w="15px" h="15px" src={IconCart}/>Add to cart</AddCartBtn>
              </Flex>

            </Flex>

          </Grid>
        </Container>
    </React.Fragment>
  )
}

export default Product;