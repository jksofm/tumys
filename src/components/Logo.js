import React from 'react'
import styled from 'styled-components'
import nhadautu from '../assets/images/nhadautu.png'
function Logo() {
  return (
    <Wrapper>
      <img src={nhadautu} alt="Đơn Vị Phát Triển Dự Án"/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
position: fixed;
width: 15%;
top: 0;
left: 1%;
z-index: 100;
img{
    width: 100%;
    height: 100%;
}
`

export default Logo