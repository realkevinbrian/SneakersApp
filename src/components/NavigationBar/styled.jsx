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
`;

//=>LOGO RULES
export const Logo = styled.img`
    width: 90px;
`;


//=>NAVBAR
export const ListWrapper = styled.ul`
    display: flex;
    gap: 20px;
    justify-self: end;
    flex: 1;
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

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
`;