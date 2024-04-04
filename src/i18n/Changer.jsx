import React from "react";
import { useTranslation } from "react-i18next";

function Changer() {
    const { i18n } = useTranslation();
    var language = localStorage.getItem("language");

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        localStorage.setItem("language", selectedLanguage)
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className="relative">
            <select
                defaultValue={language}
                onChange={handleLanguageChange}
                className="appearance-none block w-full bg-transparent py-2 px-4 pr-8 rounded-md focus:outline-none transition duration-300 ease-in-out">
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="uz">Uzbek</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 12.586l-3.793-3.793a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L10 12.586z" />
                </svg>
            </div>
        </div>
    );
}

export default Changer;
