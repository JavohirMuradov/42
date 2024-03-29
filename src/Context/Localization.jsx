import React, { createContext, useEffect, useState } from 'react'

export var languages = createContext()

const Localization = ({ children }) => {
    var [language, setLanguage] = useState("uzb")
    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language])
    return (
        <languages.Provider value={{ language, setLanguage }}>
            {children}
        </languages.Provider>
    )
}

export default Localization