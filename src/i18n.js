import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './assests/locales/en.json';
import translationAR from './assests/locales/ar.json';
import { setLang, getlang } from "../src/globals/globals";

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    ar:
    {
        translation: translationAR
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem("lang") != null ? localStorage.getItem("lang").toLowerCase() : "ar",
        
        // keySeparator: true, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

setLang(localStorage.getItem("lang") != null ? localStorage.getItem("lang").toLowerCase() : "ar");
changeLang(getlang(), false);

// change lang method
export function changeLang(newLang, checkLang = true) {
    var html = document.getElementsByTagName("html")[0];
    if (checkLang) {
        if (newLang === "en") {
            html.classList.add("english_version");
            html.setAttribute("dir", "ltr");
        }
        else {
            html.classList.remove("english_version");
            html.setAttribute("dir", "rtl");
        }
        i18n.changeLanguage(newLang);
        localStorage.setItem("lang", newLang);
        setLang(newLang);
    }
    else {
        if (newLang === "en") {
            html.classList.add("english_version");
            html.setAttribute("dir", "ltr");
        }
    }
};

export default i18n;