import styled from "styled-components"
import { Button, PrimaryBtn } from "../Navbar/Navbar.Styled"

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
    display : block;
    width : ${({wdth}) => wdth || "350px"};
    padding : 10px;
    border-radius : 20px;
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