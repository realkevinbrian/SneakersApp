import React, { useState } from 'react';
import product1 from "../../../assets/images/image-product-1.jpg";
import "../../../Sass/Default.css";
import Cart from './Cart';
import { CartBody, CartHead, CartWrapper, FloatingWrapper, HorLine, PrimaryBtn } from './Navbar.Styled';



function CartCard({status}) {
    console.log(status)


    //define data
    const [cartData] = useState([

        {id : 1, avatar : product1,  label : "Fall Limited Edition Sneakers", price : 1250},
        {id : 2, avatar : product1, label : "Air Jordan", price : 3250}
    ]) 
    

  return (
    <>
        <FloatingWrapper className={(!status) ? "close" : "open"}>
            <CartWrapper>
                <CartHead>
                    <span>Cart</span>
                </CartHead>
                <HorLine mt="0.4rem"/>
                <CartBody>

                {
                    (cartData.length === 0) ? console.log("none") : 
                    
                    cartData.map((item) => (
                        <Cart key={item.id} data={item}/>
                    ))
                }


                    <PrimaryBtn type="submit" className="primary">Check out</PrimaryBtn>
                </CartBody>
            </CartWrapper>
        </FloatingWrapper>

    </>
  )
}

export default CartCard