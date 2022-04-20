import React, {useState} from 'react'
import { Container, IncrementBtn, ProductDesc, ProductShowCase, SmallBtn, PriceDesc, Grid, AddCartBtn, Wrapper } from "./Product.styled";

//product
import product1 from "../../../assets/images/image-product-1.jpg";
import product2 from "../../../assets/images/image-product-2.jpg";
import product3 from "../../../assets/images/image-product-3.jpg";
import product4 from "../../../assets/images/image-product-4.jpg";

import { Button, Flex, Icon } from '../Navbar/Navbar.Styled';
import IconCart from "../../../assets/images/icon-cart.svg"
import addIcon from "../../../assets/images/icon-plus.svg"
import minusIcon from "../../../assets/images/icon-minus.svg"



function ProductWrapper() {

    //image changer
    const [mainImage, setMainImage] = useState(product1);

    //ShowCase Images
    const [ShowCase, setShowCase] = useState([
      {id : 1, avatar : product1},
      {id : 2, avatar : product2},
      {id : 3, avatar : product3},
      {id : 4, avatar : product4}
    ]);

  return (
    <div>
        <>
            <ProductShowCase src={mainImage}/>
        </>
        <Flex>
          {
            ShowCase.map(
              (item)=> (
                  <ProductShowCase 
                  key={item.id} 
                  wdth="72px" 
                  src={item.avatar} 
                  onClick={(self)=>setMainImage(self.target.src)}
                  />
              ))
          }
        </Flex>
    </div>
  )
}

export default ProductWrapper