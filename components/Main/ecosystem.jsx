import React from 'react';


const Ecosystem = () => {
    return (<div className="ecosystem-warp">

        <div className="ecosystem-text">
            <p className="ecosystem-title"> DEUS FINANCE ECOSYSTEM </p>

            <span className="ecosystem-subtitle"> The DEUS Ecosystem consists of two parts: DEUS and DEI. </span>
            <br />
            <br />
            <span className="ecosystem-subtitle">
                DEI is a cross-chain, fractional reserve stablecoin, with one unified bridge to all chains.
                Read more about DEI <a style={{ textDecoration: "underline" }} href="https://medium.com/@deusfinance/dei-cross-chain-liquidity-with-a-fractional-reserve-stablecoin-dbd3a927f8ef" target="_blank" rel="noopener noreferrer">here</a>.
            </span>
            <br />
            <br />
            <span className="ecosystem-subtitle">
                Every 3rd-party financial instrument that builds on top of DEUS Finance’s
                infrastructure uses DEI as its collateral mechanism.
            </span>
        </div>

        <div className="ecosystem-mobile">
            <img src="/img/ecosystem2.svg" alt="dei" className="ecosystem-img" />
        </div>

        <div className="ecosystem-desktop">
            <img src="/img/ecosystem1.svg" alt="dei" className="ecosystem-img" />
        </div>
    </div>);
}

export default Ecosystem;
