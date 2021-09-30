import { useState } from 'react';
import styled from 'styled-components'

import Navbar from '../Navbar/Navbar';
import Footer from './footer';
import Tokens from './tokens';
import TopHeader from './TopHeader';
import Ecosystem from './ecosystem';
import EcosystemLayers from './ecosystem_layers';
import Chains from './chains';
import Roadmap from './roadmap';
import DeusTokens from './deusTokens';

const FontWrapper = styled.div`
  & > * {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
  }
`

export default function Main() {
  const baseURL = "https://app.deus.finance"
  const [open, setOpen] = useState(false)

  return (
    <FontWrapper>
      <Navbar baseURL={baseURL} open={open} setOpen={setOpen} />

      <div className={`${open ? "blurred" : ""}`} id="blur-pop" />

      <TopHeader baseURL={baseURL} />

      <div className="home2">
        <Roadmap />
        <EcosystemLayers />
        <DeusTokens />
      </div>

      <Footer baseURL={baseURL} />
    </FontWrapper>
  )
}
