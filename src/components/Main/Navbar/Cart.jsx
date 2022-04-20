import React from 'react'
import product1 from "../../../assets/images/image-product-1.jpg"
import { CartImage, CartText, Flex, Icon, Price} from './Navbar.Styled'
import deleteIcon from "../../../assets/images/icon-delete.svg";
import IconCart from "../../../assets/images/icon-cart.svg"




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