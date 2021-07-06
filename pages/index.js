import Navbar from '../components/Navbar/Navbar2'

export default function Home() {
  return (
  <div>
    <Navbar />
    <div id="blur-pop"></div>

    <div style={{width: '100%', borderBottom: '2px solid #242424', position: 'relative'}}>
      <div className="home-wrapper ">
        <div className="home-content">
          <div className="asset">
            <img className="deus-dea-logo" src="/imgs/deus-dea.svg" alt="deus-dea" height="85px" width="85px" />
            <h1 className="tokenization">
              <img className="deus-logo" src="/imgs/deus-finance.svg" alt="deus-logo" height="62px" width="363" maxwidth="90%" /> <br />
              UNLIMITED ACCESS TO GLOBAL MARKETS
            </h1>
            <h4 className="transpose">
              <span className="next-gen">
                Transpose any digitally verifiable asset securely onto the blockchain.<br />
                Trade real-world assets and derivatives on the blockchain without limits. 
                <a className="learn-more" href="https://wiki.deus.finance" target="_blank" rel="noreferrer"> Learn more </a>
              </span>
              <br />
            </h4>
          </div>
          <div className="gif-wrapper">
            <video className="gif" id="gif" src="./imgs/mp4/10.mp4" autoPlay loop muted> </video>
          </div>
        </div>
        <div className="btns-wrap">
          <a className="buy-tokens " href="https://app.deus.finance/swap" target="_blank" rel="noreferrer">
            BUY TOKENS
          </a>
          <a className="work-btn-wrap " href="https://app.deus.finance/synchronizer/" target="_blank" rel="noreferrer" style={{display: 'flex', justifyContent: 'center', marginLeft: 10}}>
            <div className="work-btn"> start trading</div>
            <div style={{marginLeft: 8, marginTop: '-3px'}}>→</div>
          </a>
        </div>
      </div>
    </div>
    <div className="why-wrap">
      <div className="item">
        <img src="/imgs/deus-his.jpg" alt="WHY DEUS" width="892px" height="525px" maxwidth="100%"/>
      </div>
      <div className="item">
        <div className="why-about-deus">
          <p>WHY DEUS?</p>
          <br />
          “Imagine the ideal protocol. It would have the most trustworthy third party
          imaginable — a deity who is on everybody’s side. All the parties would send their
          inputs to God.
          <br /><br />
          God would reliably determine the results and return the outputs.
          God being the ultimate in confessional discretion, no party would learn anything more about the other
          parties’ inputs
          than they could learn from their own inputs and the output.”
          <br /><br />
          Nick Szabo
        </div>
      </div>
    </div>
    <div className="home2">
      <div className="mid-title">
        MINT AND TRADE <br />
        STOCKS ON ETHEREUM, xDAI, et al.
      </div>
      <div className="wrap-assets">
        <p className="title">TRANSMIT ASSETS ONTO THE BLOCKCHAIN</p>
        <p className="desc">
          <br />
          The assets on DEUS (dAssets) are continuously and indestructibly pegged 1:1 to their real-world
          equivalents.
          dAsset is a standard ERC20 token but with its value parallel to the asset it represents,<br />
          ie. 1 dTSLA= 1 TSLA.
          <br />
          <br />
          For the first time ever, you can now freely mint and trade stocks on ETH or xDAI without any
          restrictions.
          DEUS aims to become chain-agnostic and is about to launch on BSC, with Avax and others soon to follow.
        </p>
        <a className="learn-wiki" href="https://wiki.deus.finance/docs/dAssets">
          <p>Learn more on our wiki</p>
          <p>→</p>
        </a>
      </div>
      <div className="sync-work-wrap">
        <div className="sync-item">
          <div className="cycle-wrapper tesla-shadow">
            <div className="tesla-container">
              <div><img src="/imgs/tesla-logo_black.svg" alt="tesla" width="80px" height="80px" /></div>
              <div>TSLA</div>
            </div>
          </div>
          <p>
            Live price of TSLA stock is provided by three independent sources, to ensure impartiality.
          </p>
        </div>
        <div className="sync-item div-man">
          <div className="spinner left-sp" />
          <div className="cycle-wrapper-man">
            <div className="l-arrow">
              <div className="spinner" />
                {/* <div className="left-arrow-new">
                  <img src="/imgs/right-sign.svg" alt="arrow1" width="14px" height="24px" />
                </div> */}
                <img src="/imgs/right-sign.svg" alt="" />
              </div>
            <img src="/imgs/man.svg" alt="tsla" width="39px" height="55px" />
            <div className="r-arrow">
              <div className="spinner right-sp" />
                {/* <div className="right-arrow-new">
                  <img src="/imgs/right-sign.svg" alt="arrow2" width="14px" height="24px" />
                </div> */}
                <img src="/imgs/right-sign.svg" alt="" />
              </div>
          </div>
          <p className="our-pioneering">
            Our pioneering, supercharged oracle technology connects blockchain with the outside world in
            milliseconds.
          </p>
          <div className="spinner right-sp" />
        </div>
        <div className="sync-item">
          <div className="cycle-wrapper dtsla-shadow">
            <div className="tesla-container">
              <div><img src="/imgs/tesla-logo_white.svg" alt="tesla" width="80px" height="80px" /></div>
              <div>dTSLA</div>
            </div>
          </div>
          <p className="dtesla-token">
            dTSLA token price is perpetually updated to match the price of one share of TSLA.
          </p>
        </div>
      </div>
      <a className="m-auto work-btn-wrap " href="https://app.deus.finance/synchronizer/" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="work-btn" style={{textTransform: 'uppercase'}}>Start trading</div>
        <div style={{marginLeft: 5, marginTop: '-3px'}}>→</div>
      </a>
      <hr className="break-line" style={{marginTop: 130}} />
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
                DEUS token is the Store of Value of the DEUS ecosystem. Fundamentally, DEUS token is a proxy
                of the Ethereum token. It
                is part of the DEUS treasury and is backed by ETH as the collateral.
                <br />
                <br />
                DEUS gets minted/burned
                on our DEUS Swap market
                maker, thus allowing for an optimal demand &amp; supply ratio without a finite market cap.
                The price of DEUS is determined by a bonding curve, thus making DEUS a less volatile token.
                <a className="learn-wiki" href="https://wiki.deus.finance/docs/deus">
                  <p>Learn more on our wiki</p>
                  <p>→</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="token-wrap mx-12">
          <div className="token-info ">
            <div className="left">
              <div className="title">
                <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.55 10.8736C37.8111 10.4641 37.9602 9.96161 37.9602 9.45911C37.9602 9.32884 37.9416 9.17995 37.9416 9.06828C37.7551 7.7655 36.6364 6.77911 35.3125 6.77911H35.2939C34.2311 6.77911 33.2988 7.41189 32.8699 8.32383C27.8542 7.72828 24.3674 5.4205 22.4469 3.74549C22.5961 3.41049 22.6893 3.03827 22.6893 2.66605C22.6893 1.54938 21.9808 0.525765 20.918 0.153542C20.3399 -0.0511806 19.6687 -0.0511806 19.1093 0.153542C18.0465 0.525765 17.338 1.54938 17.338 2.66605C17.338 3.03827 17.4126 3.41049 17.5804 3.74549C15.6412 5.4205 12.1544 7.74689 7.12006 8.32383C6.69121 7.41189 5.77756 6.79772 4.71475 6.77911C4.71475 6.77911 4.71475 6.77911 4.69611 6.77911C3.44684 6.77911 2.34673 7.65383 2.08569 8.88217C2.0484 9.04967 2.02975 9.23578 2.02975 9.42189C2.02975 9.943 2.17892 10.4455 2.45861 10.8736C1.58225 12.288 0.612672 14.298 0.202464 16.6616C-0.67389 21.7425 0.873712 29.1125 13.3291 35.4775C14.5597 36.1103 15.9022 36.7244 17.3193 37.32V37.3386C17.3193 38.8089 18.5127 40 19.9857 40C21.4587 40 22.652 38.8089 22.652 37.3386V37.32C23.9945 36.7617 25.2997 36.1661 26.4931 35.5519C33.8395 31.8297 38.2399 27.363 39.5638 22.2636C40.8503 17.4619 39.0231 13.2558 37.55 10.8736ZM21.6265 28.2191C21.2163 27.8097 20.6383 27.5678 20.0043 27.5678C19.3704 27.5678 18.811 27.8097 18.3821 28.2191C17.7295 27.9028 16.9837 27.4933 16.2379 26.935C13.6834 25.018 12.3968 22.4869 12.3968 19.3789C12.3968 18.6158 12.5087 17.89 12.7138 17.2013C13.0681 17.2013 13.4037 17.1083 13.702 16.9594V17.2013V16.9594C14.4852 16.5872 15.0072 15.7869 15.0072 14.875C15.0072 14.5027 14.914 14.1677 14.7648 13.8513C16.126 12.5672 17.9533 11.7855 19.9857 11.7855C21.9994 11.7855 23.8454 12.5858 25.2065 13.87C25.0573 14.1863 24.9641 14.5213 24.9641 14.8936C24.9641 16.1591 25.9896 17.2013 27.2575 17.22C27.4626 17.9086 27.5745 18.6344 27.5745 19.3975C27.5745 22.5055 26.288 25.0366 23.7335 26.9536C23.0249 27.4933 22.2605 27.9214 21.6265 28.2191ZM20.0043 5.30883C20.023 5.30883 20.0416 5.30883 20.0603 5.30883C20.4705 6.98383 21.1417 8.603 22.0367 10.0733C21.3841 9.92439 20.6942 9.84995 20.0043 9.84995C19.3144 9.84995 18.6245 9.92439 17.9719 10.0733C18.8669 8.603 19.5382 6.98383 19.9484 5.30883C19.967 5.30883 19.9857 5.30883 20.0043 5.30883ZM13.702 12.2136C13.6834 12.2322 13.6647 12.2508 13.6647 12.2508C13.6461 12.2694 13.6088 12.288 13.5902 12.3066C13.4596 12.4183 13.3478 12.5113 13.2359 12.6044C13.0681 12.5672 12.9003 12.5486 12.7138 12.5486C12.4714 12.5486 12.229 12.5858 12.0053 12.6602C10.9425 11.6552 9.76777 10.7805 8.49985 10.0547C12.546 9.36606 15.6226 7.65383 17.6736 6.10911C16.8718 8.45411 15.5107 10.5572 13.702 12.2136ZM28.0407 12.6788C27.8169 12.6044 27.5559 12.5672 27.3135 12.5672C27.127 12.5672 26.9592 12.5858 26.7914 12.623C26.6795 12.53 26.5676 12.4369 26.4744 12.3438L26.2134 12.1205C24.4607 10.4641 23.1182 8.39828 22.3537 6.14633C24.4234 7.70967 27.5372 9.42189 31.6393 10.1105C30.3341 10.7991 29.1221 11.6738 28.0407 12.6788ZM14.2241 33.7653C5.19954 29.1497 1.02288 23.3616 2.12298 17.0152C2.47725 15.0052 3.27902 13.2744 4.02486 12.0461C4.22996 12.1019 4.45371 12.1205 4.65881 12.1205H4.67746C5.42329 12.1205 6.11319 11.8227 6.59798 11.3016C8.05235 11.9902 9.35756 12.9022 10.5509 14.0188C10.439 14.298 10.3831 14.5772 10.3831 14.8936C10.3831 15.4705 10.5882 15.9916 10.9425 16.4011C10.6255 17.3502 10.4577 18.3552 10.4577 19.3975C10.4577 23.1197 12.0798 26.2836 15.1378 28.5541C16.0328 29.2241 16.9278 29.708 17.6922 30.0616C17.7482 30.9178 18.2889 31.6622 19.0347 31.9972V34.8819C18.6618 35.0308 18.3262 35.2542 18.0652 35.5333C16.704 34.9564 15.4175 34.3608 14.2241 33.7653ZM37.6992 21.7983C36.5245 26.3208 32.4597 30.378 25.6354 33.8397C24.4793 34.4167 23.2487 34.9936 21.9435 35.5333C21.6824 35.2542 21.3468 35.0308 20.9739 34.8819V31.9972C21.7197 31.6436 22.2605 30.9178 22.3164 30.0616C23.0809 29.708 23.9759 29.2055 24.8709 28.5541C27.9288 26.2836 29.551 23.1197 29.551 19.3975C29.551 18.3552 29.3832 17.3502 29.0662 16.4011C29.4205 15.9916 29.6256 15.4705 29.6256 14.8936C29.6256 14.5958 29.5696 14.298 29.4578 14.0375C30.6511 12.9394 31.9749 12.0461 33.4293 11.3761C33.9141 11.8413 34.5667 12.1205 35.2752 12.1205H35.2939C35.5176 12.1205 35.7414 12.0833 35.9651 12.0275C37.2517 14.1491 38.762 17.7411 37.6992 21.7983Z" fill="url(#paint3_linear)" />
                  <defs>
                    <linearGradient id="paint3_linear" x1="-0.0026403" y1="19.9959" x2="40.0138" y2="19.9959" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0779E4" />
                      <stop offset="0.9341" stopColor="#EA2C62" />
                    </linearGradient>
                  </defs>
                </svg>
                <p>DEA</p>
              </div>
              <div className="hr-break" />
              <div className="info">
                The DEA token acts as a system reserve, akin to an insurance fund. Effectively, DEA is a
                share of the DEUS ecosystem.
                DEA holders receive a share of the trading fees for providing liquidity in the DEUS Vaults.
                It’s a much more volatile
                token with a <span className="grad1">finite supply of 166,670</span> tokens. No more DEA will
                ever be minted.
                <a className="learn-wiki" href="https://wiki.deus.finance/docs/dea">
                  <p>Learn more on our wiki</p>
                  <p>→</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="break-line" />
      <div className="deus-echo">
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
        <a className="learn-wiki" href="https://wiki.deus.finance/docs">
          <p>Learn more on our wiki</p>
          <p>→</p>
        </a>
      </div>
    </div>
    <div className="echo-system">
      {/* <div className="desktop" style={{margin: '0 0 -220px 0'}} >
        <img alt="" src="/imgs/full-echo.svg?v=1.0" height="1000%" width="1000%" maxwidth="100%" maxheight="100%" />
      </div>
      <div className="mobile" style={{margin: '20px 0 -70px 0'}}>
        <img alt="" src="/imgs/min-echo.svg" height="3000%" width="1000%" />
      </div> */}
      <img className="desktop" alt="" src="/imgs/full-echo.svg?v=1.0" />
      <img className="mobile" alt="" src="/imgs/min-echo.svg" />
    </div>
    <footer>
      <div className="container">
        <div className="group">
          <h4>APP </h4>
          <ul>
            <li><a href="https://app.deus.finance/swap" target="_blank" rel="noreferrer">SWAP</a></li>
            <li><a href="https://app.deus.finance/stake-and-yield" target="_blank" rel="noreferrer">STAKE &amp; YIELD (NEW)</a></li>
            <li><a href="https://app.deus.finance/staking" target="_blank" rel="noreferrer">STAKING (LEGACY)</a></li>
            <li><a href="https://app.deus.finance/vaults" target="_blank" rel="noreferrer">VAULTS (LEGACY)</a></li>
          </ul>
        </div>
        <div className="group">
          <h4>BUY REGISTRARS </h4>
          <ul>
            <li><a href="https://app.deus.finance/crosschain/xdai/synchronizer/" target="_blank" rel="noreferrer">ETH</a>
            </li>
            <li><a href="https://app.deus.finance/crosschain/xdai/synchronizer/" target="_blank" rel="noreferrer">xDAI</a></li>
            <li><a href="https://app.deus.finance/crosschain/xdai/synchronizer/" target="_blank" rel="noreferrer">BSC</a></li>
          </ul>
        </div>
        <div className="group">
          <h4>FUTURES</h4>
          <ul>
            <li><a href="https://app.deus.finance/bakkt" target="_blank" rel="noreferrer">BAKKT</a></li>
            <li><a href="https://app.deus.finance/musk" target="_blank" rel="noreferrer">MUSK</a></li>
          </ul>
        </div>
        <div className="group">
          <h4>RESOURCES</h4>
          <ul>
            <li><a href="https://wiki.deus.finance" target="_blank" rel="noreferrer">Wiki</a></li>
            <li><a href="https://github.com/deusfinance" target="_blank" rel="noreferrer">Github</a></li>
            <li><a href="https://www.youtube.com/channel/UCEVRMEr1Kt-n6ycQSEYBScQ" target="_blank" rel="noreferrer">Youtube</a>
            </li>
            <li><a href="https://medium.com/@deusfinance" target="_blank" rel="noreferrer">Medium</a></li>
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
