import React, { useState } from 'react';
import cartIcon from "../../assets/images/icon-cart.svg";
import IconClose from "../../assets/images/icon-close.svg";
import BarIcon from "../../assets/images/icon-menu.svg";
import Avatar from "../../assets/images/image-avatar.png";
import Logo from "../../assets/images/logo.svg";
import * as S from "./styled";



function Index({cartState}) {

  const Links = [
    {id : 1, title : "Collections", Goto : "/collections"},
    {id : 2, title : "Men", Goto : "/collections/Men"},
    {id : 3, title : "Women", Goto : "/collections/Womena"},
    {id : 4, title : "About", Goto : "/About"},
    {id : 5, title : "Contact", Goto : "/Contact"},
  ]

  /***
   * HOLD CLICK STATE TO OPEN MENU
   */
  const [menuState, setMenuState] = useState(false);


  /***
   * debug cart
   */
  // cartState();
  

  return (
    <>
        <S.NavWrapper>
            
            <S.MenuIcon src={BarIcon} onClick={()=> setMenuState(true)}/>
            <S.LogoWrapper>
              <S.Logo src={Logo}/>
            </S.LogoWrapper>

            <S.ListWrapper state={menuState}>
              <S.Icon src={IconClose} onClick={()=> setMenuState(false)}/>
              {
                Links.map(item =>(
                  <S.ListItem key={item.id} onClick={()=> setMenuState(false)}>
                    <a href={item.Goto}>{item.title}</a>
                  </S.ListItem>
                ))
              }
            </S.ListWrapper>

            <S.NotificationBar>
                <S.Icon src={cartIcon} onClick={cartState}/>
                <S.NotIcon>3</S.NotIcon>
                <S.Avatar src={Avatar} onClick={cartState}/>
            </S.NotificationBar>
            
        </S.NavWrapper>


       
    </>
  )
}

export default Index