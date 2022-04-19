import styled from "styled-components";


//Logo
export const Logo = styled.img`
    width : 120px;
    height : 18px;
`

// Link component
export const LinkWrapper = styled.ul`
    margin : 0px;
    display : flex;
    flex-direction : ${({dir}) => dir || "column" };
    flex: 1;
    gap : 20px;
`

export const LinkItem = styled.li`
    list-style : none;
    color : ${({theme})=>theme.Colors.Neutral.GrayishBlue};
    padding : 0px;
    margin : 0px;
    cursor : pointer;
    &:hover{
        color : ${({theme})=>theme.Colors.Neutral.varkBlue};
        
    }
`

//Icon
export const Icon = styled.img`
        width : ${({w}) => w || "25px"};
        height : ${({h}) => h || "25px"};
        cursor : pointer;
        padding : 0px 6px;
        
`

//Profile Image
export const Avatar = styled.img`
        border : 3px solid ${({theme}) => theme.Colors.Neutral.White};
        width : 50px;
        transiton : all 0.2s linear;
        cursor : pointer;

        &:hover{
            border : 3px solid ${({theme}) => theme.Colors.Primary.orange};
            border-radius : 50%;

        }

`

//SideBar
export const SideBar = styled.div`
        display : flex;
        flex-direction : row;
        align-items : center;
        gap : 2rem;
`

//container
export const Container = styled.div`
        padding : 0 6rem;
        padding-top :2rem;
`

//Flex box
export const Flex = styled.div`
        display : flex;
        align-items : ${({align}) => align || "center" };
        flex-direction : ${({dir}) => dir || "row"};
        // justify-content : center;



`


export const HorLine = styled.div`
        width : auto;
        height : 1px;
        background-color : ${({theme}) => theme.Colors.Neutral.GrayishBlue};
        color : ${({theme}) => theme.Colors.Neutral.LightGrayishBlue}; 
        margin-top : ${({mt}) => mt || "2rem"};
`;

//Bell notification
export const NotificationIcon = styled.span`
        opacity : 1;
        width : 19px;
        height : auto;
        background-color : ${({theme}) => theme.Colors.Primary.orange};
        text-align : center;
        color : ${({theme}) => theme.Colors.Neutral.White};
        border-radius : 50%;
        position : absolute;
        font-size : 15px;
        transform: translateY(-10px) translateX(15px);
        
`


export const HoverPseudo = styled.div`
        background-color : ${({theme}) => theme.Colors.Primary.orange};
        width : 100%;
        height : 3px;
        positon : relative;
        transform: translateY(49px);
        border-radius : 5px;

        
`



//////////////////////CART CARD////////////////
export const FloatingWrapper = styled.div`
        position : fixed;
        transform : translateX(-140px) translateY(130px);

`

export const CartWrapper = styled.div`
        width : 300px;
        height : auto;
        background-color : white;
        border-radius : 10px;
        box-shadow : 0px 0px 10px 1px ${({theme}) => theme.Colors.Neutral.GrayishBlue};
        


`


export const CartHead = styled.div`
        padding:10px 20px;
`


export const CartBody = styled.div`
        padding:0 20px;
        display : flex;
        flex-direction : column;

`

export const CartImage = styled.img`
        width : 50px;
        height : auto;
        border-radius : 5px;
`

export const CartText = styled.div`
        display : flex;
        flex-direction : row;
        align-items : center;

        > *{
                display : flex;
                flex-direction : column;
        }

        > p{
                font-size : 0.8rem;
                padding:0px 10px ;
                color : ${({theme}) => theme.Colors.Neutral.GrayishBlue};
                

                span{
                        padding : 10px 0px;
                }
        }

       
`

export const Price = styled.span`
`

export const Button = styled.button`
        border : 1px solid transparent;
        padding: 10px 0px;
        margin : 15px 0px;
`

export const PrimaryBtn = styled(Button)`
        background-color :${({theme}) => theme.Colors.Primary.orange};
        color : ${({theme}) => theme.Colors.Neutral.White};
        font-weight : bold;
        border-radius : 5px;
        transition : background 0.2s linear;
        cursor : pointer;

        &:hover{
        background-color :${({theme}) => theme.Colors.Primary.paleOrange};
        color : ${({theme}) => theme.Colors.Neutral.GrayishBlue};


        }
`
