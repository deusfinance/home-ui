import Navbar from '../Navbar/Navbar'
import { useState } from 'react';

export default function Main() {
  const baseURL = "https://app.deus.finance"
  const deusWiki = "https://wiki.deus.finance"
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Navbar baseURL={baseURL} open={open} setOpen={setOpen} />
      <div className={`${open ? "blurred" : ""}`} id="blur-pop" />

      <div style={{ width: '100%', borderBottom: '2px solid #242424', position: 'relative' }}>
        <div className="home-wrapper ">
          <div className="home-content">
            <div className="asset">
              <div style={{ display: "flex", marginBottom: "40px" }}>
                <img className="deus-dea-logo" style={{ marginRight: "20px", marginTop: "-10px" }} src="/img/navbar/deus.svg" alt="deus-dea" height="65px" />
                <div style={{ maxWidth: "400px", textAlign: "center" }}>
                  <img className="deus-logo" style={{ width: "100%" }} src="/img/deus-finance.svg" alt="deus-logo" />
                  <img className="deus-logo-2" src="/img/evolution.svg" style={{ width: "270px", margin: "auto" }} />
                </div>

              </div>
              <h1 className="tokenization">

                UNLIMITED ACCESS TO GLOBAL MARKETS
              </h1>
              <h4 className="transpose">
                <span className="next-gen">
                  DEUS Finance Evolution is a marketplace of decentralized financial services, <br />
                  where we provide the infrastructure for others to build financial instruments, <br />
                  such as synthetic stock trading platforms, options, and futures trading.
                  {/* <a className="learn-more" href={deusWiki} target="_blank" rel="noreferrer"> Learn more </a> */}
                </span>
                <br />
              </h4>
            </div>
            <div className="gif-wrapper">
              <video className="gif" id="gif" src="./img/mp4/10.mp4" autoPlay loop muted> </video>
            </div>
          </div>
          <div className="btns-wrap">
            <a className="buy-tokens" href={baseURL + "/swap"} target="_blank" rel="noreferrer">
              <span className="buy-tokens-text"> BUY DEUS </span>
            </a>
            <a className="work-btn-wrap " href={baseURL + "/synchronizer/"} target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'center', marginLeft: 10 }}>
              <div className="work-btn"> Learn more</div>
              <div style={{ marginLeft: 8, marginTop: '-3px' }}>→</div>
            </a>
          </div>
        </div>
      </div>
      <div className="home2">
        <div className="mid-title">
          OUR TOKENS
        </div>
        <div className="tokens-info-wrap">
          <div className="token-wrap mx-12">
            <div className="token-info ">
              <div className="left">
                <div className="title">
                  <svg width={38} height={39} viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.3467 16.8425C34.972 16.8425 34.6122 16.9249 34.2899 17.0674L21.4284 4.21079C21.5708 3.88844 21.6533 3.52861 21.6533 3.15378C21.6533 1.69195 20.4615 0.5 19 0.5C17.5385 0.5 16.3467 1.69195 16.3467 3.15378C16.3467 3.52861 16.4292 3.88844 16.5716 4.21079L3.71006 17.0674C3.38777 16.9249 3.02801 16.8425 2.65325 16.8425C1.19172 16.8425 0 18.0344 0 19.4963C0 20.9581 1.19172 22.15 2.65325 22.15C3.02801 22.15 3.38777 22.0676 3.71006 21.9251L16.5716 34.7892C16.4292 35.1116 16.3467 35.4714 16.3467 35.8462C16.3467 37.3081 17.5385 38.5 19 38.5C20.4615 38.5 21.6533 37.3081 21.6533 35.8462C21.6533 35.4714 21.5708 35.1116 21.4284 34.7892L34.2899 21.9251C34.6122 22.0676 34.972 22.15 35.3467 22.15C36.8083 22.15 38 20.9581 38 19.4963C38 18.0344 36.8158 16.8425 35.3467 16.8425ZM32.8734 18.5517L27.8891 19.7661C27.4694 19.1814 26.7874 18.7991 26.0154 18.7991C25.4533 18.7991 24.9436 19.0015 24.5389 19.3313L21.301 17.8095C21.301 17.787 21.301 17.7646 21.301 17.7346C21.301 16.805 20.7538 16.0104 19.9594 15.643V5.61265C19.9893 5.59765 20.0193 5.59016 20.0493 5.57516L32.9108 18.4392C32.9034 18.4767 32.8884 18.5142 32.8734 18.5517ZM19 33.1999C18.94 33.1999 18.8801 33.2074 18.8126 33.2074L13.7609 22.5773C14.0907 22.18 14.2856 21.6703 14.2856 21.1155C14.2856 21.108 14.2856 21.108 14.2856 21.1005L17.5684 19.5562C17.9582 19.8636 18.4604 20.051 18.9925 20.051C19.5322 20.051 20.0343 19.8636 20.4241 19.5487L23.7069 21.093C23.7069 21.1005 23.7069 21.108 23.7069 21.1155C23.7069 21.6703 23.9018 22.18 24.2316 22.5773L19.1799 33.2074C19.1199 33.1999 19.06 33.1999 19 33.1999ZM18.0331 5.61265V15.6505C17.2462 16.0179 16.6915 16.8125 16.6915 17.7421C16.6915 17.772 16.6915 17.7945 16.699 17.8245L13.4611 19.3463C13.0564 19.009 12.5467 18.8066 11.9771 18.8066C11.2051 18.8066 10.5231 19.1889 10.1034 19.7736L5.12663 18.5517C5.11164 18.5142 5.09665 18.4767 5.08166 18.4317L17.9432 5.56767C17.9732 5.59016 18.0032 5.60515 18.0331 5.61265ZM5.08915 20.5458L9.74359 21.6852C9.99842 22.6823 10.8978 23.4244 11.9771 23.4244C11.9921 23.4244 11.9996 23.4244 12.0146 23.4244L15.7097 31.1984L5.08166 20.5608C5.08166 20.5533 5.08915 20.5458 5.08915 20.5458ZM25.9779 23.4244C25.9929 23.4244 26.0079 23.4244 26.0229 23.4244C27.1022 23.4244 28.0091 22.6823 28.2564 21.6777L32.9108 20.5383C32.9108 20.5458 32.9183 20.5533 32.9183 20.5608L22.2828 31.1984L25.9779 23.4244Z" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient id="paint0_linear" x1="-0.00296805" y1="19.4996" x2="38.003" y2="19.4996" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0779E4" />
                        <stop offset="0.9341" stopColor="#1DD3BD" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>DEUS</p>
                </div>
                <div className="hr-break" />
                <div className="info">
                  <span>The $DEUS token is the main protocol token in the DEUS Finance ecosystem.
                    ll rewards from DEUS and the stablefarm pools are paid out in $DEUS tokens.
                    $DEUS comprises a portion of the $DEI stablecoin and is burned every time new $DEI is minted.
                  </span>
                  <br />
                  <br />
                  <span>Additionally, $DEUS is the governance token of DEUS Finance. As a DAO, any user can create
                    proposals and have others members vote on them.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="token-wrap mx-12">
            <div className="token-info ">
              <div className="left">
                <div className="title">
                  <img src="/img/dei.svg" alt="dei" width="40px" height="40px" />
                  <p style={{ marginLeft: "8px" }}> DEI </p>
                </div>
                <div className="hr-break" />
                <div className="info">
                  <span>
                    $DEI is a fractional reserve, cross-chain stablecoin. It’s composition is free-flowing,
                    comprised of approximately 20% $DEUS and 80% of another trusted stablecoin, depending on the chain.
                    $DEI is truly cross-chain, in that it utilizes one native bridge to all chains.
                  </span>

                  <br />
                  <br />

                  <span>
                    $DEI is used as the collateral for every 3rd-party financial instrument built on DEUS Finance.
                  </span>
                  {/* <a className="learn-wiki" href={deusWiki + "/docs/dea"}>
                    <p>Learn more on our wiki</p>
                    <p>→</p>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="break-line" /> */}
        {/* <div className="deus-echo">
          <div className="title">THE DEUS ECOSYSTEM</div>
          <p className="description">
            <br />
            The DEUS ecosystem consists of several critical parts, which make DEUS into a type of perpetuum mobile.
            <br />
            Users can trade safely and without restrictions, whilst the ecosystem’s Vaults provide collateral
            and earn fees.
            <br />
            DEA serves as a gateway in and out of Vaults, whilst DEUS Treasury works as an Insurance Fund.
          </p>
          <a className="learn-wiki" href={deusWiki + "/docs"}>
            <p>Learn more on our wiki</p>
            <p>→</p>
          </a>
        </div> */}
      </div>
      {/* <div className="echo-system">
        <img className="desktop" alt="" src="/img/full-echo.svg?v=1.0" />
        <img className="mobile" alt="" src="/img/min-echo.svg" />
      </div> */}
      <footer>
        <div className="container">
          <div className="group">
            <h4>APP </h4>
            <ul>
              <li><a href={baseURL + "/swap"} target="_blank" rel="noreferrer">SWAP</a></li>
              <li><a href={baseURL + "/stake-and-yield"} target="_blank" rel="noreferrer">STAKE &amp; YIELD (NEW)</a></li>
              <li><a href={baseURL + "/staking"} target="_blank" rel="noreferrer">STAKING (LEGACY)</a></li>
              <li><a href={baseURL + "/vaults"} target="_blank" rel="noreferrer">VAULTS (LEGACY)</a></li>
            </ul>
          </div>
          <div className="group">
            <h4>BUY REGISTRARS </h4>
            <ul>
              <li><a href={baseURL + "/crosschain/xdai/synchronizer/"} target="_blank" rel="noreferrer">ETH</a>
              </li>
              <li><a href={baseURL + "/crosschain/xdai/synchronizer/"} target="_blank" rel="noreferrer">xDAI</a></li>
              <li><a href={baseURL + "/crosschain/xdai/synchronizer/"} target="_blank" rel="noreferrer">BSC</a></li>
            </ul>
          </div>
          <div className="group">
            <h4>FUTURES</h4>
            <ul>
              <li><a href={baseURL + "/bakkt"} target="_blank" rel="noreferrer">BAKKT</a></li>
              <li><a href={baseURL + "/musk"} target="_blank" rel="noreferrer">MUSK</a></li>
            </ul>
          </div>
          <div className="group">
            <h4>RESOURCES</h4>
            <ul>
              {/* <li><a href={deusWiki} target="_blank" rel="noreferrer">Wiki</a></li> */}
              <li><a href="https://github.com/deusfinance" target="_blank" rel="noreferrer">Github</a></li>
              <li><a href="https://www.youtube.com/channel/UCEVRMEr1Kt-n6ycQSEYBScQ" target="_blank" rel="noreferrer">Youtube</a>
              </li>
              <li><a href="https://medium.com/deus-finance" target="_blank" rel="noreferrer">Medium</a></li>
              <li><a href="https://www.twitch.tv/deus_finance" target="_blank" rel="noreferrer">Twitch</a></li>
            </ul>
          </div>
          <div className="group">
            <h4>COMMUNITY</h4>
            <ul>
              <li><a href="https://discord.com/invite/xfeYT6acha" target="_blank" rel="noreferrer">Discord</a></li>
              <li><a href="https://t.me/deusfinance" target="_blank" rel="noreferrer">Telegram</a></li>
            </ul>
          </div>
          <div className="group">
            <h4>CONTRACTS</h4>
            <ul>
              <li>
                <a href="https://etherscan.io/token/0x3b62f3820e0b035cc4ad602dece6d796bc325325" target="_blank" rel="noreferrer">
                  DEUS
                </a>
              </li>
              <li><a href="https://etherscan.io/token/0x80ab141f324c3d6f2b18b030f1c4e95d4d658778" target="_blank" rel="noreferrer">
                DEA
              </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )

}
