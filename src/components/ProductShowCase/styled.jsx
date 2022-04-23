import styled from "styled-components";


/***
 * In this section i will be definig productShowCase 
 * Rules using styled components features 
 */

export const Container = styled.section`
     display: grid;
     grid-template-columns: repeat(2,1fr);

    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        /* * {border: 1px dashed red;} ==> DEBUG CSS*/
        grid-template-columns: 1fr;
        padding-top: 50px;
    }
`;

//SHOWCASE PRODUCT
export const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 4rem;
    margin-top: 0rem;
    margin-bottom: 0rem;

    /**
    ***MOBILE RULES
     */
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        margin: 0;
    }
    
`;


//=> SHOWCASE
export const ProductShowCase = styled.div`
    align-self: end;
    justify-self: end;
    padding-left: 80px;

    *{
        border-radius: 10px;
        padding: 5px;
    }

    /**
    ***MOBILE RULES
     */
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        margin: 0;
        padding: 0;
        align-self: start;
        justify-self: start;

        *{
            border-radius: 0px;
            padding: 0px;
        }
    }
    
`;

export const ProductPreview = styled.div``;

//=>PREV AND NEXT BUTTONS

export const SlideBtnsWrapper = styled.div`
    display: none;
    
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        display: flex;
        background-color: transparent;
        position: absolute;
        width: 100%;
        top: 0;
        height: 400px;
        bottom: 0;
        transform: translateY(60px);
        align-items: center;
        justify-content: space-between;

        
        

        img{
            width: 35px;
            height: 35px;
            background-color: white;
            margin:15px;
            padding: 10px;
            border-radius: 50%;
        }


        
    }


`
export const NextBtn = styled.img``
export const PrevBtn = styled.img``
export const PreviewImage = styled.img`
    width: 360px;

    /**
    ***MOBILE RULES
     */
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        width: 100%;
    }
`;
export const ShowCaseWrapper = styled.div`
    /**
    ***MOBILE RULES
     */
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        display: none;
    }
`;
export const ShowCaseImage = styled.img`
    width: 90px;
    opacity :1;
    border: 1px solid transparent;
    transition: all 0.2s linear;

    &:hover{
        opacity: 0.6;
        /* border: 1px solid ${({theme})=>theme.Colors.Primary.orange}; */

    }
`;
//=>LEFT SIDE RULES
    //=> Wrapper
export const ProductContentWrapper = styled.div`
    align-self: center;

    /**
    ***MOBILE RULES
     */
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        padding: 0px 15px;
    }

`;
export const ProductContentText = styled.div`
        padding-right: 5rem;

        /**
    ***MOBILE RULES
     */
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        padding: 0;
    }
`;
    //=> text inside product content
    export const H1 = styled.h1`
        font-size: 2rem;
        margin: 0px;
    `;
    export const H2 = styled.h2`
        font-size: 15px;
        font-weight: bold;
        text-transform: uppercase;
        color: ${({theme}) => theme.Colors.Primary.orange};
    `;
    export const Paragraph = styled.p`
        font-size: 1rem;
        color: ${({theme}) => theme.Colors.Neutral.dark_blue};
    `;

    //=> DEFINE PRICE RULES
    export const PriceWrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        align-content: center;
        justify-items: start;
        padding: 10px 0px;

        strong{
            font-size: 2rem;
            font-weight: bold;
        }

        & :nth-child(3){
            color: ${({theme}) => theme.Colors.Neutral.dark_blue};
                font-size: .9rem;
                text-decoration: line-through;

        }

        /**
        ***MOBILE RULES
        */
        @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
            margin: 0;
            display: flex;
            justify-content: space-between;
        }

    `;
    export const MainPrice = styled.strong`
        
    `;

    export const DiscountPrice = styled.span``;

    export const DiscountPercentage = styled.span`
        background-color: ${({theme}) => theme.Colors.Primary.pale_orange};
        color: ${({theme}) => theme.Colors.Primary.orange};
        position: absolute;
        padding: 5px;
        border-radius: 5px;
        font-size: 0.9rem;
        font-weight: bolder;
        transform: translateX(120px) translateY(-10px);

        /**
        ***MOBILE RULES
        */
        @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
            margin: 0;
            position: relative;
            transform: translateX(0) translateY(0);
        }
    `;
    //=>DEFINE ADD TO CART BUTTONS
    export const AddCartWrapper = styled.div`
        display: flex;
        gap: 20px;

        /**
    ***MOBILE RULES
     */
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        margin: 0;
        flex-direction: column;
    }
        
    `;
    export const ProductPriceIncrement = styled.div`
            width: 7rem;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            align-items: center;
            justify-content: center;
            justify-items: center;
            padding: 8px;
            background-color: ${({theme}) => theme.Colors.Neutral.light_blue};
            border-radius: 5px;
            font-weight: bold;

            /**
            ***MOBILE RULES
            */
            @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
                width: 100%;
            }
            
    `;
    export const AddBtn = styled.img`
        cursor: pointer;
    `;
    export const MinusBtn = styled.img`
        cursor: pointer;
    `;
    export const BuyBtn = styled.button`
        
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 45px;
        border: 1px solid transparent;
        background-color: ${({theme}) => theme.Colors.Primary.orange};
        color: ${({theme}) => theme.Colors.Neutral.white};
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.2s linear;

        &:hover{
            background-color: ${({theme}) => theme.Colors.Primary.pale_orange};
            color: ${({theme}) => theme.Colors.Primary.orange};
        }
        

        img{
            width: 15px;
        }

    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        margin-bottom: 20px;
        text-align: center;
        display: block;
    
    }
    `;
    
    
