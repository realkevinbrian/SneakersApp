import React, { useState } from 'react'
import IconCart from "../../../assets/images/icon-cart.svg"
import IconMenu from "../../../assets/images/icon-menu.svg"
import AvatarImage from "../../../assets/images/image-avatar.png"
import LogoIcon from "../../../assets/images/logo.svg"
import CartCard from './CartCard'
import { Avatar, Container, HorLine, Icon, LinkItem, LinkWrapper, Logo, MenuIcon, NavWrapper, NotificationIcon, SideBar } from './Navbar.Styled'


function NavigationBar() {

  const data = [
    {id : 1, label : "Collections"},
    {id : 2, label : "Men"},
    {id : 3, label : "Women"},
    {id : 4, label : "About"},
    {id : 5, label : "Contact"}
  ]

  const [active, setActive] = useState(false);

  const [Open, isOpen] = useState(false);
  console.log(Open)
  return ( 
    <React.Fragment>
      <Container>
          <NavWrapper>
              <MenuIcon src={IconMenu}/>
              <Logo src={LogoIcon}/>
              <LinkWrapper dir="row">
                {data.map((item) => (<LinkItem key={item.id}>{item.label}</LinkItem>))}
              </LinkWrapper>
              <SideBar>
                <Icon w="20px" h="20px" src={IconCart} onClick = {()=>{ (!Open) ? isOpen(true) : isOpen(false)}}/>
                <NotificationIcon>3</NotificationIcon>
                <Avatar src={AvatarImage}/>
                  <>
                    <CartCard status = {Open}/>
                  </>
              </SideBar>
          </NavWrapper>
        <HorLine/>
      </Container>
    </React.Fragment>
  )
}

export default NavigationBar