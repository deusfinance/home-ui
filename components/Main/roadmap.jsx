import React from 'react'
import styled from 'styled-components'

import { useWindowSize } from '../../hooks/useWindowSize'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding-bottom: 40px;
  border-bottom: 2px solid #242424;
  justify-content: center;
  margin: 0 auto;
`

const Roadmap = () => {
  const { width } = useWindowSize()
  return (
    <Wrapper>
      {width > 950 ? (
        <img src="/img/roadmapDesktop.svg" alt="roadmap_desktop" style={{ width: '85%' }} />
      ) : (
        <img src="/img/roadmapMobile.png" alt="roadmap_mobile" style={{ width: '100%', maxWidth: "400px" }} />
      )}
    </Wrapper>
  );
}

export default Roadmap;
