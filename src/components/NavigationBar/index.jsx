import React from 'react';
import * as S from "./styled";

import Logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import Avatar from "../../assets/images/image-avatar.png";


function index() {

  const Links = [
    {id : 1, title : "Collections", Goto : "/collections"},
    {id : 2, title : "Men", Goto : "/collections/Men"},
    {id : 3, title : "Women", Goto : "/collections/Womena"},
    {id : 4, title : "About", Goto : "/About"},
    {id : 5, title : "Contact", Goto : "/Contact"},
  ]

  return (
    <>
        <S.NavWrapper>
            <a><S.Logo src={Logo}/></a>
            <S.ListWrapper>
              {
                Links.map(item =>(
                  <S.ListItem key={item.id}>
                    <a href={item.Goto}>{item.title}</a>
                  </S.ListItem>
                ))
              }
            </S.ListWrapper>
            <S.NotificationBar>
                <S.Icon src={cartIcon}/>
                <S.Avatar src={Avatar}/>
            </S.NotificationBar>
        </S.NavWrapper>
       
    </>
  )
}

export default index