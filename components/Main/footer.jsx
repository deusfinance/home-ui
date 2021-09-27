import React from 'react';


const Footer = ({ baseURL }) => {
    return (<footer>
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
    </footer>);
}

export default Footer;