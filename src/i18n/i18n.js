import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./languages/ru";
import en from "./languages/en";
import uz from "./languages/uz";

const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    },
    uz: {
        translation: uz
    },
};
const storedLanguage = localStorage.getItem("language") || "en";

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: storedLanguage,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
