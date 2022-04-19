import React from 'react'
import Cart from './Cart'
import { FloatingWrapper,CartWrapper,CartHead,CartBody, HorLine, Button, PrimaryBtn } from './Navbar.Styled'
import "../../../Sass/Default.css";

function CartCard({status}) {
    console.log(status)
  return (
    <>
        <FloatingWrapper className={(!status) ? "close" : "open"}>
            <CartWrapper>
                <CartHead>
                    <span>Cart</span>
                </CartHead>
                <HorLine mt="0.4rem"/>
                <CartBody>
                    <Cart/>
                    <PrimaryBtn type="submit" className="primary">Check out</PrimaryBtn>
                </CartBody>
            </CartWrapper>
        </FloatingWrapper>

    </>
  )
}

export default CartCard