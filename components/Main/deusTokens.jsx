import React from 'react'
import styled from 'styled-components'

import { useWindowSize } from '../../hooks/useWindowSize'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-top: 50px;

  & > * {
    &:first-child {
      margin-bottom: 20px;
    }
  }
`

const Introduction = styled.div`
  display: block;
  margin: 20px 0px;
  font-size: 14px;
  font-weight: 300;

  & > * {
    &:first-child {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    }
  }
`

const Card = styled.div`
  display: block;
  padding: 30px;
  border: 1px solid #272727;
  border-radius: 15px;
  margin-bottom: 20px;
  background: linear-gradient(335.59deg, rgba(18, 205, 212, 0.01) -6.83%, rgba(210, 38, 123, 0.19) 101.13%);
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 23px;
  & > * {
    height: 40px;
    line-height: 40px;
    text-align: center;
    &:first-child {
      margin-right: 10px;
    }
  }
`

const HorizontalLine = styled.div`
  display: block;
  height: 1px;
  background: linear-gradient(90deg, #D2267B 5.54%, #12CDD4 67.82%);
  margin: 10px 0px;
`

const List = styled.ul`
  margin-left: 20px;

  & > li {
    font-size: 14px;
  }
`

const DeusTokens = () => {
  const { width } = useWindowSize()

  return (
    <Wrapper>
      {/*// sorry this is an image but it's really hard to do lineair gradient to a piece of text (for actual styling check .grad-color-2)*/}
      <img src="/img/deus_tokens_title.png" style={{height: '35px', alignSelf: 'center'}}/>
      {width > 1000 ? (
        <img src="/img/deus_tokens.png" style={{maxWidth: '70%', alignSelf: 'center'}}/>
      ) : (
        <>
          <Introduction>
            <p>The DEUS Ecosystem consists of two tokens: DEUS and DEI.</p>
            <p>
              DEI is a cross-chain, fractional reserve stablecoin, with one unified bridge to all chains. Read more about DEI <a href="#" style={{textDecoration: 'underline'}}>here</a>. <br/><br/>
              DEUS is the protocol token which is used for governance and to mint DEI tokens via buring DEUS. <br/><br/>
              Every 3rd-party financial instrument that builds on top of DEUS Finance’s infrastructure uses DEI as its collateral mechanism.
            </p>
          </Introduction>
          <Card>
            <LogoWrapper>
              <img src="/img/icons/deus.png"/>
              <p>DEUS</p>
            </LogoWrapper>
            <HorizontalLine/>
            <List>
              <li>Protocol token</li>
              <li>Governance for DEUS DAO</li>
              <li>Represents the fractional portion of DEI</li>
              <li>Required for DEUS/DEI pool</li>
              <li>Reward from yield farms</li>
              <li>Buying DEI burns DEUS</li>
            </List>
          </Card>
          <Card>
            <LogoWrapper>
              <img src="/img/icons/dei.png"/>
              <p>DEI</p>
            </LogoWrapper>
            <HorizontalLine/>
            <List>
              <li>Fractional reserve stablecoin</li>
              <li>Majority backed by a trusted stable</li>
              <li>Cross-chain with one native, unified bridge</li>
              <li>Enables cross-chain liquidity</li>
              <li>Required for stablefarm pool</li>
              <li>Used as collateral mechanism for 3rd-party instruments built on DEUS Finance</li>
            </List>
          </Card>
        </>
      )}
    </Wrapper>
  )
}

export default DeusTokens;
