import React from 'react';
import styled from 'styled-components'

import { useWindowSize } from '../../hooks/useWindowSize'

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  width: 100%;
  margin-top: 155px;
  padding: 0 30px;

  @media only screen and (max-width: 800px) {
    grid-auto-flow: row;
    padding: 0;
    margin-top: 140px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  color: white;

  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`

const ContentWrapperRight = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  color: white;
  & > * {
    text-align: right;
    margin-left: auto;

    @media only screen and (max-width: 800px) {
      text-align: center;
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 800px) {
    margin-top: 80px;
  }
`

const ContentHeaderText = styled.p`
  display: block;
  font-size: 15px;
  max-width: 600px;

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`

const ChainsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  margin-top: 20px;
  & > * {
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;

    @media only screen and (max-width: 800px) {
      width: 30px;
    }
  }

  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`

const Chains = () => {
  const { width } = useWindowSize()
  const dsynthsImageWith = width > 800 ? '200px' : '300px'
  return (
    <Wrapper>
      <ContentWrapper>
        <ContentHeaderText>DEUS supports multiple chains simultaneously with one unified bridge</ContentHeaderText>
        <ChainsWrapper>
          <img src="/img/chains/eth.png" alt="eth" />
          <img src="/img/chains/polygon.jpg" alt="polygon" />
          <img src="/img/chains/avax.svg" alt="avax" />
          <img src="/img/chains/heco.svg" alt="heco" />
          <img src="/img/chains/bsc.png" alt="bsc" />
          <img src="/img/chains/xdai.svg" alt="xdai" />
          <img src="/img/chains/question-mark.png" alt="question" />
        </ChainsWrapper>
      </ContentWrapper>
      <ContentWrapperRight>
        <ContentHeaderText style={{ maxWidth: '400px' }}>
          Check out our first Contractor building on DEUS Finance named &#160;
          <a href="https://www.dsynths.com" target="blank" style={{ textDecoration: 'underline' }}>
            dSynths
          </a>
          , where you can trade synthetics!
        </ContentHeaderText>
        <a href="https://www.dsynths.com" target="blank" style={{ textDecoration: 'underline' }}>
          <img src="/img/dsynths.png" alt="dsynths" style={{ maxWidth: dsynthsImageWith, marginTop: '20px' }} />
        </a>
      </ContentWrapperRight>
    </Wrapper>
  )
}

export default Chains;
