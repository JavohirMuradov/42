import React, { useContext } from 'react'
import { languages } from '../Context/Localization'

const Changer = (uzb, ru, eng) => {
    var { language } = useContext(languages)
    var text = language === "uzb" ? uzb : language === "ru" ? ru : eng
    return text
}

export default Changer