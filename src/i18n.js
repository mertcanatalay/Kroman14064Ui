import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// const resources = {
//     tr: {
//         translation: {
//             LANGUAGE: "Dil",
//             ACTIVE_APPLICATION: "Aktif Uygulama",
//             ACTIVE_INTEGRATION: "Aktif Entegrasyon",
//             ACTIVE_MOBILE_APPLICATION: "Aktif Mobil Uygulama",
//             DEVELOPED_APPLICATION: "Geliştirilen Uygulama",
//             DEVELOPED_INTEGTRATION: "Geliştirilen Entegrasyon",
//             DEVELOPED_MOBILE_APPLICATION: "Geliştirilen Mobil Uygulama",
//             DAILY_INCOMING_DATA: "Günlük Gelen Veri",
//             DAILY_PROCESSED_DATA: "Günlük İşlenen Veri",
//             DAILY_QUERY_DATA: "Günlük Sorgulanan Veri",
//             VISION: "Vizyon",
//             COMPANY_TARGETS: "Şirket Hedefleri",
//             TARGET_GROUP: "Hedef Grup",
//             PRODUCT: "Ürün",
//             NEEDS: "İhtiyaçlar",
//             TURKISH:"Türkçe",
//             ENGLISH:"İngilizce",
//             ADD_IMAGE:"Görsel Ekle",
//         }
//     },
//     en: {
//         translation: {
//             LANGUAGE: "Language",
//             ACTIVE_APPLICATION: "Active Application",
//             ACTIVE_INTEGRATION: "Active Integration",
//             ACTIVE_MOBILE_APPLICATION: "Active Mobile Application",
//             DEVELOPED_APPLICATION: "Developed Application",
//             DEVELOPED_INTEGTRATION: "Developed Integration",
//             DEVELOPED_MOBILE_APPLICATION: "Developed Mobile Application",
//             DAILY_INCOMING_DATA: "Daily Incoming Data",
//             DAILY_PROCESSED_DATA: "Daily Processed Data",
//             DAILY_QUERY_DATA: "Daily Query Data",
//             VISION: "Vision",
//             COMPANY_TARGETS: "Company Targets",
//             TARGET_GROUP: "Target Group",
//             PRODUCT: "Product",
//             NEEDS: "Needs",
//             TURKISH:"Turkish",
//             ENGLISH:"English",
//             ADD_IMAGE:"Add Image",
//         }
//     }
// };

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
        //resources,
        fallbackLng: "tr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;