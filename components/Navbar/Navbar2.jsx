import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from '../Link';
import { NavLink, StaticRouter as Router, useLocation } from 'react-router-dom';
import navs from './navs';
import OutsideClickHandler from 'react-outside-click-handler';

import {
    NavbarContentWrap,
    NavbarWrap,
    NavButton,
    NavbarSideWrap,
    SubNavbarContentWrap,
    NavbarMobileContent
} from '../app-navbar/index';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [tvl, setTvl] = useState(null)
    const { t } = useTranslation()

    useEffect(() => {
        const getTVL = async () => {
            const url = "https://app.deus.finance/tvl.json"
            try {
                const resp = await fetch(url)
                const result = await resp.json()
                const intResult = parseInt(result.stakingLockedValue + result.vaultLockedValue + result.uniswapLockedValue + result.balancerLockedValue + result.etherLockedInMarketMaker + result.stakingV2LockedValue)
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                });
                setTvl(formatter.format(intResult))
            } catch (error) {
                console.log("fetch " + url + " had some error", error);
            }
        }
        getTVL()
    }, [])

    useEffect(() => {
        const blurPop = "blurred"
        if (!open) {
            document.getElementById("blur-pop").classList.remove(blurPop);
        } else {
            document.getElementById("blur-pop").classList.add(blurPop);
        }
    }, [open])

    return (<>
        <NavbarWrap>
            <Router>
                <NavbarSideWrap className="deus-logo">
                    <ExternalLink href="https://deus.finance/" active={false}>
                        <img src="/imgs/navbar/deus-logo.svg" />
                    </ExternalLink>
                    {tvl && <NavButton className="tvl" active={false} >
                        {t("tvl")} : {tvl}
                    </NavButton>}
                </NavbarSideWrap>

                <NavbarContentWrap>
                    {navs.map(nav => {
                        let res = null
                        if (nav.path) {
                            if (nav.path.charAt(0) === "/") {
                                res = <NavLink to={nav.path} > {t(nav.id)} </NavLink>
                            } else {
                                if (nav.image) {
                                    res = <ExternalLink href={nav.path} >
                                        <img src={`/imgs/navbar/${nav.id}.svg`} />
                                    </ExternalLink>
                                } else {
                                    res = <ExternalLink href={nav.path} >
                                        <span> {t(nav.id)} </span>
                                    </ExternalLink>
                                }
                            }
                        } else {
                            res = <p>{t(nav.id)}</p>
                        }

                        if (nav.children) {
                            res = <>
                                {res}
                                <img className="polygon" src="/imgs/navbar/polygon.png" width="13px" alt="polygon" />
                                <SubNavbarContentWrap>
                                    {nav.children.map(subnav => {
                                        if (subnav.path.charAt(0) === "/")
                                            return <li><NavLink to={subnav.path} > {t(subnav.id)} </NavLink></li>
                                        if (subnav.image) {
                                            return <li><ExternalLink href={subnav.path} textDecoration="none">
                                                <img src={`/imgs/navbar/${subnav.id}.svg`} />
                                            </ExternalLink></li>
                                        }
                                        return <li><ExternalLink href={subnav.path} textDecoration="none">
                                            <span>{t(subnav.id)}</span>
                                        </ExternalLink></li>
                                    })}
                                </SubNavbarContentWrap>
                            </>
                        }
                        return <li>{res}</li>
                    })}
                    <li>
                        <LanguageSelector />
                    </li>
                </NavbarContentWrap>

                <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                    <NavbarMobileContent open={open}>
                        <ul>
                            <li className="icon-close">
                                <div className="menu-title">{t("menu")}</div><svg onClick={() => setOpen(!open)} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="white" strokeWidth={1} fill="white" fillRule="evenodd"><g id="icon-shape"><polygon id="Combined-Shape" points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644" /></g></g></svg>
                            </li>

                            <li className="nav-item-lg">
                                <LanguageSelector />
                            </li>

                            {<div className="nav-item-wrap-img">
                                {navs.map(nav => {
                                    let res = null
                                    if (nav.image) {
                                        res = <ExternalLink href={nav.path} >
                                            <img style={{width: '20px'}} src={`/imgs/navbar/${nav.id}.svg`} />
                                        </ExternalLink>
                                    }
                                    return <li className="nav-item-img">{res}</li>
                                })}
                            </div>}

                            {navs.map(nav => {
                                let res = null
                                if (nav.path) {
                                    if (nav.path.charAt(0) === "/") {
                                        res = <li className="nav-item-box">
                                            <NavLink className="nav-item-text nav-item-ln" to={nav.path} >
                                                {t(nav.id)}
                                            </NavLink> </li>
                                    }
                                } else {
                                    res = <div className = "nav-item-wrap-img">
                                        <li> <p className="nav-title">{t(nav.id)}</p> </li>
                                        </div>
                                }

                                if (nav.children && !nav.image) {
                                    res = <> {res}
                                        {nav.children.map(subnav => {
                                            if (subnav.path.charAt(0) === "/")
                                                return <li className="nav-item-box"><NavLink className="nav-item-text" to={subnav.path} > {t(subnav.id)} </NavLink></li>
                                            return <li className="nav-item-box"><ExternalLink className="nav-item-text" href={subnav.path} textDecoration="none">
                                                <span>{t(subnav.id)}</span>
                                            </ExternalLink></li>
                                        })}
                                    </>
                                }
                                return res
                            })}

                        </ul>
                    </NavbarMobileContent>
                </OutsideClickHandler>

                <NavbarSideWrap >
                    <svg className="hamb" onClick={() => setOpen(!open)} width={22} height={16} viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15H1" stroke="white" strokeWidth={2} strokeLinecap="round" /><path d="M21 8H1" stroke="white" strokeWidth={2} strokeLinecap="round" /><path d="M21 1H1" stroke="white" strokeWidth={2} strokeLinecap="round" /></svg>
                </NavbarSideWrap>

            </Router>
        </NavbarWrap>
    </>);
}

export default Navbar;
