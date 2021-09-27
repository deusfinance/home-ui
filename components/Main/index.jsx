import Navbar from '../Navbar/Navbar'
import { useState } from 'react';
import Footer from './footer';
import Tokens from './tokens';
import TopHeader from './TopHeader';
import Ecosystem from './ecosystem';
import Chains from './chains';
import Roadmap from './roadmap';

export default function Main() {
  const baseURL = "https://app.deus.finance"
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Navbar baseURL={baseURL} open={open} setOpen={setOpen} />
      <div className={`${open ? "blurred" : ""}`} id="blur-pop" />
      <TopHeader baseURL={baseURL} />

      <div className="home2">
        <Tokens />
        <Roadmap />
        <Ecosystem />
      </div>
      <Footer baseURL={baseURL} />
    </div>
  )

}
