import React from 'react';


const Chains = () => {
    return (<div className="supported-chains">
        <div className="grad-color-1">SUPPORTED CHAINS</div>
        <div className="wrap-chains">
            <ul className="container">
                <li><img src="/img/chains/eth.svg" alt="eth" /></li>
                <li><img src="/img/chains/polygon.jpg" alt="polygon" /></li>
                <li><img src="/img/chains/avax.svg" alt="avax" /></li>
                <li><img src="/img/chains/heco.svg" alt="heco" /></li>
                <li><img src="/img/chains/bsc.png" alt="bsc" /></li>
                <li><img src="/img/chains/xdai.svg" alt="xdai" /></li>
                <li><img src="/img/chains/question-mark.png" alt="question" /></li>
            </ul>
        </div>
        <p className="grad-color-1 right">ONE UNIFIED BRIDGE</p>
    </div>);
}

export default Chains;