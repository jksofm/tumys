import React from 'react'
import styled from 'styled-components'
import nhadautu from '../assets/images/nhadautu.png'
import nhadautumobile from "../assets/images/logochudattumobile.png"
function Logo() {
  return (
    <Wrapper>
      <img className='all' src={nhadautu} alt="Đơn Vị Phát Triển Dự Án"/>
      <img className="mobile" src={nhadautumobile} alt="logo" />
    </Wrapper>
  )
}
const Wrapper = styled.div`
position: fixed;
width: 15%;
top: -1%;
left: 1%;
right: 0%;
z-index: 99;

img{
    width: 100%;
    height: 100%;
}
.mobile{
  display: none;
}
@media screen and (max-width: 1024px) {
     
     width: 20%;
       
     }
  

@media screen and (max-width: 678px) {
  width: 100%!important;
/* left: 0%!important; */
left : 0%;


  
   .all{
    display: none;
   }
   .mobile{
    display: block!important;
    
    /* z-index: -1; */
   }     
   }
`

export default Logo