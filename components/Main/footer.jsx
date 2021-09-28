import React from 'react';


const Footer = ({ baseURL }) => {
    return (<footer>
        <div className="container">
            <div className="group">
                <h4>APP(LEGACY)</h4>
                <ul>
                    <li><a href={baseURL + "/swap"} target="_blank" rel="noreferrer">SWAP</a></li>
                    <li><a href={baseURL + "/stake-and-yield"} target="_blank" rel="noreferrer">STAKE &amp; YIELD</a></li>
                    <li><a href={baseURL + "/staking"} target="_blank" rel="noreferrer">STAKING</a></li>
                    <li><a href={baseURL + "/vaults"} target="_blank" rel="noreferrer">VAULTS</a></li>
                </ul>
            </div>
            <div className="group">
                <h4>RESOURCES</h4>
                <ul>
                    <li><a href="https://medium.com/@DEUSFinanceMichael" target="_blank" rel="noreferrer">FAQ</a></li>
                    <li><a href="https://github.com/deusfinance" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href="https://www.youtube.com/channel/UCEVRMEr1Kt-n6ycQSEYBScQ" target="_blank" rel="noreferrer">Youtube</a>
                    </li>
                    <li><a href="https://medium.com/deus-finance" target="_blank" rel="noreferrer">Medium</a></li>
                    <li><a href="https://www.twitch.tv/deus_finance" target="_blank" rel="noreferrer">Twitch</a></li>
                </ul>
            </div>
            <div className="group">
                <h4>3RD PARTY APP</h4>
                <ul>
                    <li><a href="" target="_blank" rel="noreferrer">DSYNTHS.COM</a></li>
                </ul>
            </div>
            <div className="group">
                <h4>DEI STABLECOIN</h4>
                <ul>
                    <li><a href={baseURL + "/"} target="_blank" rel="noreferrer">MINT</a></li>
                    <li><a href={baseURL + "/"} target="_blank" rel="noreferrer">STAKING</a></li>
                    <li><a href={baseURL + "/"} target="_blank" rel="noreferrer">REDEEM</a></li>
                    <li><a href={baseURL + "/"} target="_blank" rel="noreferrer">BUYBACK &amp; RECOLLAT</a></li>
                </ul>
            </div>
            <div className="group">
                <h4>COMMUNITY</h4>
                <ul>
                    <li><a href="https://twitter.com/DeusDao" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><a href="https://discord.com/invite/xfeYT6acha" target="_blank" rel="noreferrer">Discord</a></li>
                    <li><a href="https://t.me/deusfinance" target="_blank" rel="noreferrer">Telegram</a></li>
                </ul>
            </div>
        </div>
    </footer>);
}

export default Footer;