import React from 'react'
import product1 from "../../../assets/images/image-product-1.jpg"
import { CartImage, CartText, Flex, Icon, Price} from './Navbar.Styled'
import deleteIcon from "../../../assets/images/icon-delete.svg";
import IconCart from "../../../assets/images/icon-cart.svg"




function Cart() {
  return (
    <>

    <Flex>
        <CartImage src={product1}/>
            <CartText>
                <p>
                    Fall Limited Edition Sneakers
                    <Price>1,250 MT x 3 <Price>2,250 MT</Price> </Price>
                </p>
            </CartText>
        <Icon src={deleteIcon} />
    </Flex> 
    </>
  )
}

export default Cart