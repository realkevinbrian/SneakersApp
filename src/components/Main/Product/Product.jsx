import React from 'react'
import { Container, IncrementBtn, ProductDesc, ProductShowCase, SmallBtn, PriceDesc, Grid, AddCartBtn, Wrapper } from "./Product.styled";
import product1 from "../../../assets/images/image-product-1.jpg";
import { Button, Flex, Icon } from '../Navbar/Navbar.Styled';
import IconCart from "../../../assets/images/icon-cart.svg"
import addIcon from "../../../assets/images/icon-plus.svg"
import minusIcon from "../../../assets/images/icon-minus.svg"


function Product() {
  return (
    <React.Fragment>
        <Container>
          <Grid>

            <Wrapper>
              <>
                <ProductShowCase src={product1}/>
              </>
            
              <Flex>
                <ProductShowCase wdth="72px" src={product1}/>
                <ProductShowCase wdth="72px" src={product1}/>
                <ProductShowCase wdth="72px" src={product1}/>
                <ProductShowCase wdth="72px" src={product1}/>
              </Flex>
            
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