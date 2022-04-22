import React from 'react'

import styled from 'styled-components'

const StyledAttribution = styled.div`
      text-align: center;
      padding-top: 25px;

`
function Attribution() {
  return (
    <StyledAttribution>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="http://github.com/realkevinbrian">RealKevinBrian</a>.
  </StyledAttribution>
  )
}

export default Attribution