import React from 'react'
import { useTranslation } from 'react-i18next'
import languages from './languages'

const LanguageSelector = ({ name = "language" }) => {
    const { i18n } = useTranslation()
    const changeLanguage = (value) => {
        i18n.changeLanguage(value)
    }
    
    const currLang = ["en", "cn", "ara"].indexOf(i18n.language) === -1 ? "en" : i18n.language

    return (
        <div className="lang-warp" style={{ display: "flex", flexDirection: "row" }}>
            {
                languages.map((lang, index) => {
                    return <div key={lang.value} className="wrap-item" style={{
                        display: "flex", justifyContent: "center", cursor: "pointer"
                    }}>
                        <div style={{ opacity: `${currLang === lang.value ? "1" : "0.5"}` }} className={currLang === lang.value ? "active item" : "item"} onClick={() => changeLanguage(lang.value)}>{lang.name} </div>
                        {languages.length !== index + 1 && <p style={{ margin: "0 5px" }}>/</p>}
                    </div>
                })
            }
        </div>
    )
}

export default LanguageSelector
