import React, { useState } from 'react';
import NextIcon from "../../assets/images/icon-next.svg";
import PrevIcon from "../../assets/images/icon-previous.svg";
import Product1 from "../../assets/images/image-product-1.jpg";
import Product2 from "../../assets/images/image-product-2.jpg";
import Product3 from "../../assets/images/image-product-3.jpg";
import Product4 from "../../assets/images/image-product-4.jpg";
import useFetch from '../../Hooks/useFetch';
import CartBox from "../CartBox/index";
import { CartCount } from './ProductIncrement';
import * as S from "./styled";


function Index({cartStatus}) {

    //Fetched data
    const data = useFetch()


    //=>price
    const [value, setValue] = useState(0);
    //=>Open Cart
    const [cartState, setCartState] = useState(false);
    //=>Data state 
    const [addCart,setCartData] = useState(null);

    /***
     * IN THIS FUNCTION WE RECEIVE DATA FROM  CHILD COMPONENT
     * AND USE IN THIS COMPONT
     */
    function CurrentAmount(amount){
        setValue(amount);
        setCartState(true);
        setCartData(data);
    }

    /***
     * Init a state to Preview Image
     */

    const images = [Product1,Product2,Product3,Product4];
    const [slide,setSlider] = useState(0);
    const [previewImage, setPreviewImage] = useState(images[slide]); 

    /***
     * INIT METHOD TO SLIDE THROUGH IMAGES ON MOBILE DEVICES
     * 
     */
    function nextImage () {
        if(slide < images.length - 1){
            setSlider(slide + 1)
            setPreviewImage(images[slide]);
            // console.log("NexSlide",slide) =>DEBUG

        }else{
            setSlider(0)
            setPreviewImage(images[slide]);
            // console.log("NexSlide => else",slide, "Preview =>", previewImage) => DEBUG
        }
    }

    function prevImage () {
        if(slide > 0){
            setSlider(slide - 1)
            setPreviewImage(images[slide]);
        }else{
            setSlider(slide);
            setPreviewImage(images[slide]);

        }
    }



  return (
    <>
        <CartBox increment={value} status={cartState} isCartOpen={cartStatus} data={addCart}/>
        <S.Container>
            <S.ProductWrapper>
                <S.ProductShowCase>
                    <S.ProductPreview>
                        <S.PreviewImage src={previewImage}/>
                        <S.SlideBtnsWrapper>
                            <S.PrevBtn src={PrevIcon} onClick ={prevImage}/>
                            <S.NextBtn src={NextIcon} onClick={nextImage}/>
                        </S.SlideBtnsWrapper>
                    </S.ProductPreview>
                    <S.ShowCaseWrapper>
                        {
                            images.map((image)=>(
                                <S.ShowCaseImage key={image} src={image} onClick={(self)=>setPreviewImage(self.target.src)}/>
                            ))
                        }
                    </S.ShowCaseWrapper>
                </S.ProductShowCase>
            </S.ProductWrapper>
            <S.ProductWrapper>
                <S.ProductContentWrapper>
                    {
                        data.map((item)=>{

                            /**
                             * We gonna we checking for Increased Val
                             * if the increVal is greater than return increase else 1
                             */
                            let total = `${item.currency} ${((item.price * item.discount) / 100)}`;

                            
                            /**
                             * Body text
                             */

                            return(
                            
                                <>
                                    <S.ProductContentText key={item.title}>
                                        <S.H2>Sneaker Company</S.H2>
                                        <S.H1>{item.title}</S.H1>
                                        <S.Paragraph>
                                            {item.body}
                                        </S.Paragraph>
                                    </S.ProductContentText>

                                    <S.PriceWrapper>
                                        <S.MainPrice>{total}</S.MainPrice>
                                        <S.DiscountPercentage>{item.discount}%</S.DiscountPercentage>
                                        <S.DiscountPrice>{`${item.currency} ${item.price}`}</S.DiscountPrice>
                                    </S.PriceWrapper>
                            
                                </>
                        )
                        })
                    }
                    <S.AddCartWrapper>
                        <CartCount getAmount={CurrentAmount}/>
                    </S.AddCartWrapper>

                </S.ProductContentWrapper>
            </S.ProductWrapper>
        </S.Container>
    </>
  )
}

export default Index


