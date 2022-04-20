import styled from "styled-components"
import { Button, PrimaryBtn } from "../Navbar/Navbar.Styled"
import IconNext from "../../../assets/images/icon-next.svg";
import IconPrev from "../../../assets/images/icon-previous.svg";
import IconClose from "../../../assets/images/icon-close.svg"


export const Container = styled.div`
    padding : 0em 10px;
    // height: 100vh;

    >*{
        font-weight : bold;
    }
`

export const Wrapper = styled.div`
    padding :40px 0px;

`

export const ProductShowCase = styled.img`
    // border : 2px solid ;
    /* display : block; */
    width : ${({wdth}) => wdth || "350px"};
    margin : 10px;
    border-radius : 10px;
    transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    object-fit: contain;



    &:hover{
        /* border: 2px solid ${({theme}) => theme.Colors.Neutral.varkBlue}; */
        opacity: 0.5;
        border: 1px solid ${({theme}) => theme.Colors.Primary.orange};
    }
`

export const ProductDesc = styled.div`
    // border : 2px dashed;
    padding:60px 15vw 10px 0px;

    span{
        color : ${({theme}) => theme.Colors.Primary.orange};
        font-weight : bold;
        font-size : 0.8rem;
    }

    h1{
        font-size : 2rem;
    }

    p{
        color : ${({theme}) => theme.Colors.Neutral.GrayishBlue};
    }
`

export const PriceDesc = styled.div`
    // border : 1px dashed;
    display: flex;
    flex-direction : column;
    font-weight : bold;


    strong{
        color : black;
        font-size : 25px;
    }

    span{
        font-size : 15px;
        background-color : ${({theme}) => theme.Colors.Primary.paleOrange};
        position : absolute;
        color : ${({theme}) => theme.Colors.Primary.orange};
        padding: 3px;
        border-radius : 5px;
        transform : translateX(100px);
    }

    small{
        color : ${({theme}) => theme.Colors.Neutral.GrayishBlue};
        text-decoration : line-through;
        padding:10px 0px;

    }
`

export const SmallBtn = styled(Button)`
    width : 5vw;
    height : 0vh;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : transparent;
    
    
`

export const IncrementBtn = styled.div`
        display : flex;
        align-items : center;
        background-color : ${({theme}) => theme.Colors.Neutral.LightGrayishBlue};
        border-radius: 10px;
    
`

export const Grid = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    align-content : center;
    justify-items : center;

    > * {
        // border : 1px dashed;
    }
`

export const AddCartBtn = styled.button`
        border: 1px solid transparent;
        padding: 15px 4vw;
        border-radius : 10px;
        font-weight : bold;
        background-color : ${({theme}) => theme.Colors.Primary.orange};
        color : White !important;
        margin:0px 30px;

        &:hover{
        background-color : ${({theme}) => theme.Colors.Primary.paleOrange};

        }
        
`

export const Overlay = styled.div`
    background-color: #000000ab;
    border: 2px dashe green;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    left: 0;
    right: 0;
    z-index: 10;
    transition: all 0.5s cubic-bezier(0.95, 0.05, 0.795, 0.035);

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;


    > img{
        object-fit: cover;
        display: block;
    }

   
    > :nth-child(1){
        /* border: 2px dashed red; */
        position: absolute;
        top: 0px;
        transform: translateY(70px) translateX(160px);
        align-self: center;
        justify-self: center;
        width: 15px;
        height: 15px;
        background-color: #ffffff;
        z-index: 60;
        padding: 10px;
        border-radius: 50%;

        

    }

    > :nth-child(2){
        align-self: center;
        justify-self: end;
        color: white;
        padding: 10px;
        border-radius: 50%;
        position: relative;
        transform: translateX(30px) translateY(-20px);
        width: 20px;
        height: 20px;
        background-color: #ffffff;
        z-index: 60;
        
        
    }

    > :nth-child(4){
        align-self: center;
        justify-self: start;
        color: white;
        padding: 10px;
        border-radius: 50%;
        position: relative;
        transform: translateX(-30px) translateY(-20px);
        width: 20px;
        height: 20px;
        background-color: #ffffff;
    }

`

