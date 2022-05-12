import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cartIcon from "../../assets/images/icon-cart.svg";
import IconClose from "../../assets/images/icon-close.svg";
import BarIcon from "../../assets/images/icon-menu.svg";
import Avatar from "../../assets/images/image-avatar.png";
import Logo from "../../assets/images/logo.svg";
import { SelectAll, setCartState, setMenuState } from "../../features/menuSlice";
import * as S from "./styled";



function Index() {

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
  const menuState = useSelector(SelectAll).menuState;
  const itemCount = useSelector(state => state.post.itemCount)
  const dispatch = useDispatch();

  return (
    <>
        <S.NavWrapper>
            
            <S.MenuIcon src={BarIcon} onClick={()=> dispatch(setMenuState())}/>
            <S.LogoWrapper>
              <S.Logo src={Logo}/>
            </S.LogoWrapper>

            <S.ListWrapper state={menuState}>
              <S.Icon src={IconClose} onClick={()=> dispatch(setMenuState())}/>
              {
                Links.map(item =>(
                  <S.ListItem key={item.id} onClick={()=> dispatch(setMenuState())}>
                    <a href={item.Goto}>{item.title}</a>
                  </S.ListItem>
                ))
              }
            </S.ListWrapper>

            <S.NotificationBar onClick={()=> dispatch(setCartState())}>
                <S.Icon src={cartIcon}/>
                <S.NotIcon>{itemCount}</S.NotIcon>
                <S.Avatar src={Avatar}/>
            </S.NotificationBar>
            
        </S.NavWrapper>


       
    </>
  )
}

export default Index