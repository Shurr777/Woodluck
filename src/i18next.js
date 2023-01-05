import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init ({
        fallbackLng: "ua",
        whitelist: ["ua", "en"],
        debug: false,
        detection: {
            order:["localStorage", "cookie", "htmlTag", "path", "subdomain"],
            caches:["localStorage", "cookie"],
        },
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        }
    });

export default i18n;