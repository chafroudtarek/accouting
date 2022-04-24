import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware'







//i18n
i18next
    .use(middleware.LanguageDetector)
    .use(Backend)
    .init({
        locales: ['fr','en','ar'],
       
        fallbackLng: 'en',
        
        backend: {
            loadPath:  './locales/{{lng}}/translation.json'
        },
    });

export default i18next;
