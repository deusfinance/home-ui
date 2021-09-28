import React from 'react';


const Chains = () => {
    return (<div className="supported-chains">
        <div className="grad-color-1">SUPPORTED CHAINS</div>
        <div className="wrap-chains">
            <ul className="container">
                <li><img src="/img/chains-mono/eth.svg" alt="eth" /></li>
                <li><img src="/img/chains-mono/polygon.svg" alt="polygon" /></li>
                <li><img src="/img/chains-mono/avax.svg" alt="avax" /></li>
                <li><img src="/img/chains-mono/heco.svg" alt="heco" /></li>
                <li><img src="/img/chains-mono/bsc.svg" alt="bsc" /></li>
                <li><img src="/img/chains-mono/xdai.svg" alt="xdai" /></li>
                <li><img src="/img/chains-mono/question-mark.svg" alt="question" /></li>
            </ul>
        </div>
        <p className="grad-color-1 right">ONE UNIFIED BRIDGE</p>
    </div>);
}

export default Chains;