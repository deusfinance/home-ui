import React from 'react';
import Chains from './chains';


const TopHeader = ({ baseURL }) => {
    return (<div style={{ width: '100%', borderBottom: '2px solid #242424', position: 'relative' }}>
        <div className="home-wrapper ">
            <div className="home-content">
                <div className="asset">
                    <div style={{ display: "flex", marginBottom: "40px" }}>
                        <img className="deus-dea-logo" src="/img/navbar/deus.svg" alt="deus-dea" height="65px" />
                        <div style={{ maxWidth: "400px", textAlign: "center" }}>
                            <img className="deus-logo" style={{ width: "100%" }} src="/img/deus-finance.svg" alt="deus-logo" />
                            <img className="deus-logo-2" src="/img/evolution.svg" alt="deus-finance" style={{ width: "270px", margin: "auto" }} />
                        </div>

                    </div>
                    <h1 className="tokenization">
                        UNLIMITED ACCESS TO GLOBAL MARKETS
                    </h1>
                    <h4 className="transpose">
                        <span className="next-gen">
                            DEUS Finance Evolution is a marketplace of decentralized financial services, <br />
                            where we provide the infrastructure for others to build financial instruments, <br />
                            such as synthetic stock trading platforms, options, and futures trading.<br />
                            <a href={'https://medium.com/deus-finance/introducing-deus-finance-v2-apollo-c12b0929945f'} target="_blank" rel="noreferrer" style={{ color: '#087CE3' }}>Learn more about V2</a>
                        </span>
                        <br />
                    </h4>
                </div>
                <div className="gif-wrapper">
                    <video className="gif" id="gif" src="./img/mp4/10.mp4" autoPlay loop muted> </video>
                </div>
            </div>
            <div className="btns-wrap">
                <div className="buy-tokens" >
                    <span> BUY $DEUS </span>
                    <ul>
                        <li className="uni">
                            <a href='https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xde5ed76e7c05ec5e4572cfc88d1acea165109e44' target="_blank" rel="noreferrer">Uniswap (ETH)</a>
                        </li>
                        <li className="quick">
                            <a href='https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xde5ed76e7c05ec5e4572cfc88d1acea165109e44' target="_blank" rel="noreferrer">QuickSwap (Polygon)</a>
                        </li>
                    </ul>
                </div>
                <a className="work-btn-wrap " href={"https://medium.com/deus-finance/deus-finance-v2-apollo-faq-3185da65147b"} target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'center', marginLeft: 10 }}>
                    <div className="work-btn"> FAQ </div>
                    <div style={{ marginLeft: 8, marginTop: '-3px' }}>→</div>
                </a>
            </div>
            <Chains />
        </div>
    </div>);
}

export default TopHeader;
