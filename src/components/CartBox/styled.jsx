import styled from "styled-components";

//containers
export const CartWrapper = styled.div`
    display: ${({cartState}) => (cartState) ? "block" : "none" };
    position: absolute;
    top: 0;
    right: 0;
    background-color: white;
    transform: translateX(-40px) translateY(90px);
    box-shadow: -2px 5px 10px 1px  ${({theme})=>theme.Colors.Neutral.gray_blue};
    border-radius: 10px;
    width: 320px;
    min-height: 200px;
    height: auto;

    /**
    ***MOBILE RULES
     */
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        margin:0px;
        box-shadow: none;
        height: auto;
        transform: translateX(0px) translateY(80px);
        padding:0;
        left: 0;
        right: 0;
        width: 100%;
        z-index : 2;
        

    }
    `;

export const CartHeader = styled.div`
    border: 1px solid transparent;
    border-bottom-color: ${({theme})=>theme.Colors.Neutral.gray_blue};

    h1{
        font-size: 0.9rem;
        padding:5px 14px;
    }

`;
export const CartBody = styled.div`
`;

    //=> Child components
    export const CartEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    color :${({theme})=>theme.Colors.Neutral.gray_blue};
    font-weight: bold;

    h1{
        font-size: 1rem;

    }

    `;

    //=>Cart DAta
    export const CartData = styled.div`
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center; 
        gap:6px;       

       button{
           padding:10px 6.7rem;
       }


    `
    //=>Cart Item 
    export const CartItem = styled.div`

        display: flex;
        align-items: center;
        gap: 10px;
    
        & :nth-child(1){
            width: 50px;
            height: 50px;
            border-radius: 5px;
        }

        //=>Paragraph inside the cart item
        p{
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 6px;

            //=> text product title
            & :nth-child(1){
                flex: 1;
                width: inherit;

                
            }

            //Product price 
            & :nth-child(2){
                font-weight: bolder;
                > *{
                    margin: 2px;
                }
                
                //Init Price
                & :nth-child(1){
                    font-size: .8rem;
                }

                //Multiply Price
                & :nth-child(2){
                }

                //Total
                & :nth-child(3){
                    font-size: 1.1rem;
                    color: ${({theme})=> theme.Colors.Neutral.black};
                    font-weight: bold;
                }
            }

            //

        }

        //delete icon
        & :nth-child(3){
            width: 20px;
            height: 20px;

        }

    `;

    