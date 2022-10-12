import React from 'react'
import styled from 'styled-components'
import testImage from "../assets/images/Loading.png"

function Image360({
    containerRef
}) {
  return (
    <Wrapper>
        <div className="image-360">
            <div ref={containerRef} style={{width: '100%', height: '100%'}}>

            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
height: 92.6vh;
z-index: -1;
/* background-color: red; */
.image-360{
    width: 100%;
    height: 100%;
    z-index: 1;
}
`

export default Image360