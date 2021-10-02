import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 30px;
  flex-flow: row wrap;
  padding: 20px;

  & > * {
    &:not(:last-child) {
      margin-right: 50px;
    }
  }

  @media only screen and (max-width: 800px) {
    justify-content: flex-start;

    & > * {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`

const Group = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-flow: column nowrap;
  margin: 20px 0;

  & > * {
    list-style-type: none; /* Remove bullets */
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margins */

    font-size: 14px;
    font-weight: 300;
    color: white;

    @media only screen and (max-width: 800px) {
      font-size: 10px;
    }
  }
`

const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 25px;

  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
`

const Footer = ({ baseURL }) => {
  return (
    <Container>
      <Group>
        <Title>APP(LEGACY)</Title>
        <ul>
          <li><a href={'https://legacy.deus.finance/swap'} target="_blank" rel="noreferrer">SWAP</a></li>
          <li><a href={'https://legacy.deus.finance/stake-and-yield'} target="_blank" rel="noreferrer">STAKE &amp; YIELD</a></li>
          <li><a href={'https://legacy.deus.finance/staking'} target="_blank" rel="noreferrer">STAKING</a></li>
          <li><a href={'https://legacy.deus.finance/vaults'} target="_blank" rel="noreferrer">VAULTS</a></li>
          <li><a href={'https://legacy.deus.finance/bakkt'} target="_blank" rel="noreferrer">BAKKT FUTURES</a></li>
          <li><a href={'https://legacy.deus.finance/musk'} target="_blank" rel="noreferrer">MUSK FUTURES</a></li>
        </ul>
      </Group>
      <Group>
        <Title>RESOURCES</Title>
        <ul>
          <li><a href="https://medium.com/deus-finance/deus-finance-v2-apollo-faq-3185da65147b" target="_blank" rel="noreferrer">FAQ</a></li>
          <li><a href="https://github.com/deusfinance" target="_blank" rel="noreferrer">GITHUB</a></li>
          <li><a href="https://www.youtube.com/channel/UCEVRMEr1Kt-n6ycQSEYBScQ" target="_blank" rel="noreferrer">YOUTUBE</a></li>
          <li><a href="https://medium.com/deus-finance" target="_blank" rel="noreferrer">MEDIUM</a></li>
        </ul>
      </Group>
      <Group>
        <Title>CONTRACTORS</Title>
        <ul>
          <li><a href="https://www.dsynths.com" target="_blank" rel="noreferrer">DSYNTHS.COM</a></li>
        </ul>
      </Group>
      <Group>
        <Title>DEI STABLECOIN</Title>
        <ul>
          <li><a href={"https://app.deus.finance/stable/mint"} target="_blank" rel="noreferrer">MINT</a></li>
          <li><a href={"https://app.deus.finance/stable/redeem"} target="_blank" rel="noreferrer">REDEEM</a></li>
          <li><a href={"https://app.deus.finance/stable/zap"} target="_blank" rel="noreferrer">ZAP</a></li>
          <li><a href={"https://app.deus.finance/stable/farms"} target="_blank" rel="noreferrer">FARMS</a></li>
          <li><a href={"https://app.deus.finance/stable/buyback-recollat"} target="_blank" rel="noreferrer">BUYBACK &amp; RECOLLAT</a></li>
        </ul>
      </Group>
      <Group>
        <Title>COMMUNITY</Title>
        <ul>
          <li><a href="https://twitter.com/DeusDao" target="_blank" rel="noreferrer">TWITTER</a></li>
          <li><a href="https://discord.com/invite/xfeYT6acha" target="_blank" rel="noreferrer">DISCORD</a></li>
          <li><a href="https://t.me/deusfinance" target="_blank" rel="noreferrer">TELEGRAM COMMUNITY</a></li>
          <li><a href="https://t.me/deusfinance_news" target="_blank" rel="noreferrer">TELEGRAM ANN</a></li>
        </ul>
      </Group>
    </Container>
  )
}

export default Footer;
