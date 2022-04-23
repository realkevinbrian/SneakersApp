import React from 'react'

import styled from 'styled-components'

const StyledAttribution = styled.div`
      text-align: center;
      padding:20px;
      width: 100%;

    @media screen and (max-width : ${({theme})=>theme.Layout.Mobile}){
        background-color: ${({theme})=>theme.Colors.Neutral.black};
        color: white;
        display: inline-block;
        width: 100%;
        font-size: 1.1rem;

        a{
        color: ${({theme})=>theme.Colors.Primary.orange};
          
        }
    }      

`
function Attribution() {
  return (
    <StyledAttribution>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.<br/> 
    Coded by <a href="http://github.com/realkevinbrian">RealKevinBrian </a> 2022.
  </StyledAttribution>
  )
}

export default Attribution