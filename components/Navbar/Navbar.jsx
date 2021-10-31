import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from '../Link';
import { StaticRouter as Router } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import {
    NavbarContentWrap,
    NavbarWrap,
    NavButton,
    NavbarSideWrap,
    SubNavbarContentWrap,
    NavbarMobileContent
} from '../app-navbar/index';
import { Flex } from 'rebass';

const Navbar = (props) => {
    const [tvl, setTvl] = useState(null)
    const { t } = useTranslation()
    const { open, setOpen, baseURL } = props
    const [desktopNavs, setDesktopNavs] = useState([])
    const [mobileNavs, setMobileNavs] = useState([])

    useEffect(() => {
        const getNavs = async () => {
            try {
                fetch('https://raw.githubusercontent.com/deusfinance/app-ui/main/src/config/routes.json')
                    .then((response) => response.json())
                    .then((routes) => {
                        routes = routes.reverse()
                        const mobNavs = [
                            ...routes.slice(0, 4),
                            routes[5],
                            {
                                "id": "APP",
                                "text": "APP",
                                "children": [
                                    routes[6], routes[4]
                                ]
                            },
                        ]
                        setMobileNavs(mobNavs.reverse());
                        setDesktopNavs(routes);
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            } catch (error) {
                console.log("fetch " + url + " had some error", error);
            }
        }
        getNavs()
    }, [])

    useEffect(() => {
        // const getTVL = async () => {
        //     const url = baseURL + "/tvl.json"
        //     try {
        //         const resp = await fetch(url)
        //         const result = await resp.json()
        //         const intResult = parseInt(result.stakingLockedValue + result.vaultLockedValue + result.uniswapLockedValue + result.balancerLockedValue + result.etherLockedInMarketMaker + result.stakingV2LockedValue)
        //         var formatter = new Intl.NumberFormat('en-US', {
        //             style: 'currency',
        //             currency: 'USD',
        //             minimumFractionDigits: 0
        //         });
        //         setTvl(formatter.format(intResult))
        //     } catch (error) {
        //         console.log("fetch " + url + " had some error", error);
        //     }
        // }
        // getTVL()
    }, [baseURL])

    return (<>
        <NavbarWrap>
            <Router>
                <NavbarSideWrap className="deus-logo">
                    <ExternalLink href="https://deus.finance/" active={false}>
                        <Flex flexDirection="row" justifyContent="flex-start" alignItems="center">
                            <img style={{ height: "32px" }} src="/img/navbar/deus.svg" alt="deus" />
                            <img style={{ marginLeft: "10px", height: "22px" }} src="/img/navbar/deus-text.svg" alt="deus" />
                        </Flex>
                    </ExternalLink>
                    {tvl && <NavButton className="tvl" active={false} >
                        {t("tvl")} : {tvl}
                    </NavButton>}
                </NavbarSideWrap>

                <NavbarContentWrap>
                    {desktopNavs.map(nav => {
                        let res = null
                        if (nav.path) {
                            if (nav.path.charAt(0) === "/") {
                                res = <ExternalLink href={baseURL + nav.path} > {t(nav.id)} </ExternalLink>
                            } else {
                                if (nav.image) {
                                    res = <ExternalLink href={nav.path} >
                                        <img src={`/img/navbar/${nav.id}.svg`} alt="" />
                                    </ExternalLink>
                                } else {
                                    if (nav.id === "MEDIUM") {
                                        res = <ExternalLink href={nav.path} >
                                            <img src={`/img/navbar/medium.svg`} alt="medium" />
                                        </ExternalLink>
                                    } else {
                                        console.log(nav);
                                        res = <ExternalLink href={nav.path} >
                                            <span> {t(nav.id)} </span>
                                        </ExternalLink>
                                    }
                                }
                            }
                        } else {
                            res = <p>{t(nav.id)}</p>
                        }

                        if (nav.children) {
                            res = <>
                                {res}
                                <img className="polygon" src="/img/navbar/polygon.png" height="13px" width="13px" alt="polygon" />
                                <SubNavbarContentWrap>
                                    {nav.children.map(subnav => {
                                        if (subnav.path.charAt(0) === "/")
                                            return <li key={subnav.id + "_desktop"}><ExternalLink href={baseURL + subnav.path} > {t(subnav.id)} </ExternalLink></li>
                                        if (subnav.image) {
                                            return <li key={subnav.id + "_desktop"}><ExternalLink href={subnav.path} textDecoration="none">
                                                <img src={`/img/navbar/${subnav.id}.svg`} alt="" height="20%" width="20%" />
                                            </ExternalLink></li>
                                        }
                                        return <li key={subnav.id + "_desktop"}><ExternalLink href={subnav.path} textDecoration="none">
                                            <span>{t(subnav.id)}</span>
                                        </ExternalLink></li>
                                    })}
                                </SubNavbarContentWrap>
                            </>
                        }
                        return <li key={nav.id + "_desktop"}>{res}</li>
                    })}
                    {/* <li>
                        <LanguageSelector />
                    </li> */}
                </NavbarContentWrap>

                <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                    <NavbarMobileContent open={open}>
                        <ul onClick={() => setOpen(false)}>
                            <li className="icon-close">
                                <div className="menu-title">{t("menu")}</div><svg onClick={() => setOpen(!open)} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="white" strokeWidth={1} fill="white" fillRule="evenodd"><g id="icon-shape"><polygon id="Combined-Shape" points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644" /></g></g></svg>
                            </li>

                            {mobileNavs.map((nav, index) => {
                                let res = null
                                if (nav.path) {
                                    if (nav.path.charAt(0) === "/") {
                                        res = <li key={index} className="nav-item-box">
                                            <ExternalLink className="nav-item-text nav-item-ln" href={baseURL + nav.path} >
                                                {t(nav.id)}
                                            </ExternalLink> </li>
                                    } else if (!nav.image) {
                                        res = <div key={index} className="nav-item-box" style={{ marginTop: "10px" }}>
                                            <li> <ExternalLink href={baseURL + nav.path} className="nav-item-text" >{t(nav.id)}</ExternalLink> </li>
                                        </div>
                                    }
                                } else {
                                    res = <div key={index} className="nav-item-wrap-img"  >
                                        <li> <p className="nav-title">{t(nav.id)}</p> </li>
                                    </div>
                                }

                                if (nav.children && !nav.image) {
                                    res = <div key={index} > {res}
                                        {nav.children.map((subnav, index) => {
                                            if (subnav.path.charAt(0) === "/")
                                                return <li key={subnav.id + "_mobile" + index} className="nav-item-box"><ExternalLink className="nav-item-text mobile-nav-text" href={baseURL + subnav.path} > {t(subnav.id)} </ExternalLink></li>
                                            return <li key={subnav.id + "_mobile" + index} className="nav-item-box"><ExternalLink className="nav-item-text" href={baseURL + subnav.path} textDecoration="none">
                                                <span>{t(subnav.id)}</span>
                                            </ExternalLink></li>
                                        })}
                                    </div>
                                }
                                return res
                            })}

                            {<div className="nav-item-wrap-img" style={{ marginTop: "5px", marginBottom: "20px" }}>
                                {mobileNavs.filter(nav => nav.image).map((nav, index) => {
                                    let res = null
                                    res = <ExternalLink href={nav.path}  >
                                        <img width='20px' height="20px" src={`/img/navbar/${nav.id}.svg`} alt="" />
                                    </ExternalLink>
                                    return <li key={nav.id + index} className="nav-item-img">{res}</li>
                                })}
                            </div>}

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
