import styled from "styled-components";

//=>navigation bar
export const NavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1 1 auto;
    align-items: center;
    gap: 20px;
    margin: 2rem 10rem;
    border: 1px solid transparent;
    padding-bottom: 2rem;
    border-bottom-color: ${({theme}) => theme.Colors.Neutral.dark_blue};

    /****
    **RULES FOR MOBILE
    * */
    //=>RULES FOR MOBILE
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        /* border: 1px dashed red; */
        margin:0px;
        gap: 0px;
        padding: 0;
        gap: 15px;
        padding: 10px 15px;
        justify-content: space-around;
        background-color: ${({theme}) => theme.Colors.Neutral.white};
        border: 1px solid transparent;
        position: fixed;
        width: 100%;
        z-index: 10;
    }


`;

//=>LOGO RULES

export const LogoWrapper = styled.div`
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        flex: 1;
    }
`
export const Logo = styled.img`
    width: 90px;

    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        width: 100px;
    }
    
`;


//=>NAVBAR
export const ListWrapper = styled.ul`
    display: flex;
    gap: 20px;
    justify-self: end;
    flex: 1;

    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        /* border: 1px solid red; =>DEBUG */
        position: fixed;
        display: ${({state}) => (state) ? "flex" : "none"};
        flex-direction: column;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 1000;
        font-weight: bold;
        font-size: 1.2rem;
        padding: 30px;
        box-shadow: 2px 2px 4px #020202ab;
        
        > li{
            color: black;
            align-self: center;
            
            
        }

        img{
            width: 15px;
            padding-bottom: 20px;
        }
    }
`;

export const ListItem = styled.li`
    color: ${({theme}) => theme.Colors.Neutral.gray_blue};
    transition: color 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    & :hover{
    color: ${({theme}) => theme.Colors.Neutral.vark_blue};

    }
`;


//=>Side Bar
export const Icon = styled.img``;

export const MenuIcon = styled.img`
    display: none;

    //=>RULES FOR MOBILE
    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        display: flex;
    }

`

export const NotificationBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img{
        
        &:nth-child(1){
            justify-self: end;
            width: 20px;
        }

        &:nth-child(2){
            justify-self: start;
        }
    }

`;

export const NotIcon = styled.span`
    position: absolute;
    background-color: ${({theme})=> theme.Colors.Primary.orange};
    color:${({theme})=> theme.Colors.Neutral.white};
    font-weight: bold;
    padding:0px 5px;
    font-size: .8rem;
    border-radius: 50%;
    transform: translateX(30px) translateY(-8px);

    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        transform: translateX(30px) translateY(-8px);
        
    }
    
`

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
`;