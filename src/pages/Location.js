import React from 'react'
import styled from 'styled-components'
import Guide from '../components/Guide'
import Image360 from '../components/Image360'
import ImageLocation from "../components/ImageLocation"


function Location({guide,ShowGuide,HideGuide}) {
 
  return (
    <Wrapper>
     
     {/* <ImageLocation  /> */}
   
        
     <Image360 normalimage />
    {/* {guide && <Guide /> } */}
    {guide && <Guide ShowGuide={ShowGuide} HideGuide={HideGuide} /> }



    </Wrapper>
  )
}
const Wrapper = styled.div`
height: 100vh;
position: relative;
width: 100vw;
`

export default Location