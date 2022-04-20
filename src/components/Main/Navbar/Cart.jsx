import React from 'react';
import deleteIcon from "../../../assets/images/icon-delete.svg";
import { CartImage, CartText, Flex, Icon, Price } from './Navbar.Styled';




function Cart({data}) {
  return (
    <>
    
      <Flex>
          <CartImage src={data.avatar}/>
              <CartText>
                  <p>
                      {data.label}
                      <Price>1,250 MT x 3 <Price>2,250 MT</Price> </Price>
                  </p>
              </CartText>
              <a href={`/product/delete/${data.id}`}>
                <Icon src={deleteIcon}/>
              </a>
      </Flex> 


    </>
  )
}

export default Cart