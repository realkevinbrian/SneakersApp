import React, {useState} from 'react'

import { Icon, LinkItem, LinkWrapper, Logo, Avatar, SideBar, Container,HorLine,NotificationIcon, Flex} from './Navbar.Styled'
import LogoIcon from "../../../assets/images/logo.svg"
import IconCart from "../../../assets/images/icon-cart.svg"
import AvatarImage from "../../../assets/images/image-avatar.png"
import product1 from "../../../assets/images/image-product-1.jpg"
import CartCard from './CartCard'

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
        <Flex>
          <Logo src={LogoIcon}/>
          <LinkWrapper dir="row">
            {data.map((item) => (<LinkItem key={item.id}>{item.label}</LinkItem>))}
          </LinkWrapper>
          <SideBar>
            <Icon src={IconCart} onClick = {()=>{ (!Open) ? isOpen(true) : isOpen(false)}}/>
            <NotificationIcon>3</NotificationIcon>
            <Avatar src={AvatarImage}/>

            <>
              <CartCard status = {Open}/>
            </>

          </SideBar>
        </Flex>
        <HorLine/>
      </Container>
    </React.Fragment>
  )
}

export default NavigationBar