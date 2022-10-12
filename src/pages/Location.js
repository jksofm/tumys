import React from 'react'
import styled from 'styled-components'
import Guide from '../components/Guide'
import Image360 from '../components/Image360'
import { useTumysContext } from "../context/tumycontext";


function Location() {
  const { guide, ShowGuide, updateCurrentScene, currentscene } =
  useTumysContext();
  return (
    <Wrapper>

     <Image360 normalimage />
    {/* {guide && <Guide /> } */}


    </Wrapper>
  )
}
const Wrapper = styled.div`
height: 100vh;
position: relative;
width: 100vw;
`

export default Location