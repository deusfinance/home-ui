import React from 'react'
import styled from 'styled-components'

import { useWindowSize } from '../../hooks/useWindowSize'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  border-bottom: 1px solid #242424;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  font-size: 53px;
  text-align: center;
  align-text: center;

  @media only screen and (max-width: 800px) {
    margin-top: 10px;
  }
`

const MidWrapper = styled(HeaderWrapper)`
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
  letter-spacing: 0.06em;

  @media only screen and (max-width: 800px) {
    text-align: center;
    & > * {
      &:not(:last-child){
        margin-bottom: 21px;
      }
    }
  }
`

const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr;
  margin-top: 110px;
  margin-bottom: 40px;

  @media only screen and (max-width: 800px) {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-flow: column nowrap;
  }

  @media only screen and (max-width: 1120px) {
    grid-template-columns: 1fr 1fr;
  }
`

const LayerSegments = styled.div`
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  grid-gap: 28px;

  @media only screen and (max-width: 800px) {
    grid-gap: 5px;
  }
`

const MidSegment = styled.div`
  display: block;
  position: relative;
  height: 60px;
  flex-flow: row nowrap;
  align-text: center;
  text-align: left;
  margin: 0;
  margin-right: 30px;

  @media only screen and (max-width: 800px) {
    align-text: top;
  }
`

const VertLine = styled.div`
  display: inline-flex;
  width: 3px;
  height: 100%;
  background: ${props => props.color};
`

const MidText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: auto;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 21px;
  color: ${props => props.color};
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.325em;
  font-weight: 500;

  & > span {
    margin-top: 2px;
    font-size: 14px;
    letter-spacing: normal;
  }
`

const RightSegment = styled.div`
  display: block;
  min-height: 60px;
  position: relative;

  text-align: left:
  align-text: center;
  color: white
  font-size: 14px;
  line-height: 120%;

  & > * {
    font-weight: 300;
    &:first-child {
      font-weight: 500;
      margin-bottom: 3px;
    }
  }

  @media only screen and (max-width: 800px) {
    margin-left: 24px;
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`

const EcosystemLayers = () => {
  const { width } = useWindowSize()
  return (
    <Wrapper>
      <HeaderWrapper>
        {/*// sorry this is an image but it's really hard to do lineair gradient to a piece of text (for actual styling check .grad-color-2)*/}
        <img src="/img/ecosystem_layers_title.png" style={{width: '300px', alignSelf: 'center'}}/>
      </HeaderWrapper>
      <MidWrapper>
        {width > 800 ? (
          <div>Security | Infrastructure | Multi-chain collateral system | Plug-and-play smart contracts</div>
        ) : (
          <>
            <div>Security</div>
            <div>Infrastructure</div>
            <div>Multi-chain collateral system</div>
            <div>Plug-and-play smart contracts</div>
          </>
        )}
      </MidWrapper>
      <BottomWrapper>
        {width > 800 ? (
          <>
            {width > 1120 && (
              <img src="/img/ecosystem_layers.png" style={{margin: 0, maxHeight: '130%'}}/>
            )}
            <LayerSegments>
              <MidSegment>
                <VertLine color={'#FF4495'}/>
                <MidText color={'#FF4495'}>MARKETS & TRADERS</MidText>
              </MidSegment>
              <MidSegment>
                <VertLine color={'#E668CF'}/>
                <MidText color={'#E668CF'}>3RD PARTY PLATFORMS & <br/>SERVICE PROVIDERS</MidText>
              </MidSegment>
              <MidSegment>
                <VertLine color={'#8987EF'}/>
                <MidText color={'#8987EF'}>
                  DEUS FINANCE EVOLUTION
                  <br/>
                  <span style={{color: 'white'}}>
                    Unified cross-chain capability with Muon
                  </span>
                </MidText>
              </MidSegment>
              <MidSegment>
                <VertLine color={'#009CF0'}/>
                <MidText color={'#009CF0'}>STABLEFARMS & THE <br/>DEUS / DEI POOL</MidText>
              </MidSegment>
            </LayerSegments>
            <LayerSegments>
              <RightSegment>
                <p>Financial Instruments:</p>
                <p>Asset trading, prediction markets, leverage trading & other financial instruments for End-Users</p>
              </RightSegment>
              <RightSegment>
                <p>3rd Party Providers:</p>
                <p>Exchanges, DeFi protocols, and other financial service providers (e.g. dsynths.com) can build their services securely on-top of DEUS infrastructure.</p>
              </RightSegment>
              <RightSegment>
                <p>DEUS Platform:</p>
                <p>Secure & oracle-verified</p>
                <p>Acts like a decentralized clearinghouse</p>
              </RightSegment>
              <RightSegment>
                <p>Earn rewards paid out in the DEUS token:</p>
                <p>DEI / stablecoin (changes depending on the chain) = 50% APY<br/>DEUS / DEI = 100% APY (2x multiplier of the stable pools)</p>
              </RightSegment>
            </LayerSegments>
          </>
        ) : (
          <>
            <LayerSegments>
              <MidSegment>
                <VertLine color={'#FF4495'}/>
                <MidText color={'#FF4495'}>MARKETS & TRADERS</MidText>
              </MidSegment>
              <RightSegment>
                <p>Financial Instruments:</p>
                <p>Asset trading, prediction markets, leverage trading & other financial instruments for End-Users</p>
              </RightSegment>
              <MidSegment>
                <VertLine color={'#E668CF'}/>
                <MidText color={'#E668CF'}>3RD PARTY PLATFORMS & <br/>SERVICE PROVIDERS</MidText>
              </MidSegment>
              <RightSegment>
                <p>3rd Party Providers:</p>
                <p>Exchanges, DeFi protocols, and other financial service providers (e.g. dsynths.com) can build their services securely on-top of DEUS infrastructure.</p>
              </RightSegment>
              <MidSegment>
                <VertLine color={'#8987EF'}/>
                <MidText color={'#8987EF'}>DEUS FINANCE EVOLUTION</MidText>
              </MidSegment>
              <RightSegment>
                <p>DEUS Platform:</p>
                <p>Secure & oracle-verified</p>
                <p>Acts like a decentralized clearinghouse</p>
              </RightSegment>
              <MidSegment>
                <VertLine color={'#009CF0'}/>
                <MidText color={'#009CF0'}>STABLEFARMS & THE <br/>DEUS / DEI POOL</MidText>
              </MidSegment>
              <RightSegment>
                <p>Earn rewards paid out in the DEUS token:</p>
                <p>DEI / stablecoin (changes depending on the chain) = 50% APY<br/>DEUS / DEI = 100% APY (2x multiplier of the stable pools)</p>
              </RightSegment>
            </LayerSegments>
          </>
        )}
      </BottomWrapper>
    </Wrapper>
  )
}

export default EcosystemLayers;
