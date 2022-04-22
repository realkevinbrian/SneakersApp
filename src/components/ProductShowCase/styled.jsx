import styled from "styled-components";


/***
 * In this section i will be definig productShowCase 
 * Rules using styled components features 
 */

export const Container = styled.section`
     display: grid;
     grid-template-columns: repeat(2,1fr);
`;


//SHOWCASE PRODUCT
export const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 4rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
    
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
    
`;
export const ProductPreview = styled.div``;
export const PreviewImage = styled.img`
    width: 360px;
`;
export const ShowCaseWrapper = styled.div``;
export const ShowCaseImage = styled.img`
    width: 90px;
`;


//=>LEFT SIDE RULES
    //=> Wrapper
export const ProductContentWrapper = styled.div`
    align-self: center;

`;
export const ProductContentText = styled.div`
        padding-right: 5rem;
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

    `;
    export const MainPrice = styled.strong`
        font-size: 2rem;
        font-weight: bold;
    `;

    export const DiscountPrice = styled.span`
    color: ${({theme}) => theme.Colors.Neutral.dark_blue};
    font-size: .9rem;
    text-decoration: line-through;
    
    `;
    export const DiscountPercentage = styled.span`
        background-color: ${({theme}) => theme.Colors.Primary.pale_orange};
        color: ${({theme}) => theme.Colors.Primary.orange};
        position: absolute;
        padding: 5px;
        border-radius: 5px;
        font-size: 0.9rem;
        font-weight: bolder;
        transform: translateX(120px) translateY(-10px);
    `;


    //=>DEFINE ADD TO CART BUTTONS
    export const AddCartWrapper = styled.div`
        display: flex;
        gap: 20px;
        
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
            
    `;
    export const AddBtn = styled.img``;
    export const MinusBtn = styled.img`
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
    `;
    
    
