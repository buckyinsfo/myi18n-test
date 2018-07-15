import i18n from 'i18next'
//import LanguageDetector from 'i18next-browser-languagedetector'
 
i18n
//  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Welcome to React": "Welcome to React",
          "To get started, edit App.js and save to reload.": "To get started, edit App.js and save to reload.",
          "Declarative": "Declarative",
          "Declarative0": "Declarative - en",
          "simpleContent" : "Simple Content - US",
          "This is a sub-component of the App component.": "This is a sub-component of the App component.",
        }
      },
      el: {
        translations: {
          "Welcome to React": "Καλώς 'Ηρθατε στο React!",
          "To get started, edit App.js and save to reload.": "Για να ξεκινήσετε, επεξεργαστείτε το App.js και αποθηκεύστε το για να το φορτώσετε ξανά.",
          "Declarative": "Δηλωτικό", 
          "Declarative0": "δηλωτικός",
          "simpleContent" : "Simple Content - el",
          "This is a sub-component of the App component.": "Αυτή είναι μια δευτερεύουσα συνιστώσα του στοιχείου App.",
        }
      },
      fr: { 
        translations: {
          "Welcome to React": "Bienvenue à React",
          "To get started, edit App.js and save to reload.": "Pour commencer, modifiez App.js et enregistrez pour recharger.",
          "Declarative": "Déclaratif",
          "Declarative0": "Déclaratif - fr",
          "simpleContent" : "Contenu simple",
          "This is a sub-component of the App component.": "C'est un sous-composant du composant App.",
        }
      }
    },
    fallbackLng: 'en',
    debug: true,
 
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
 
    keySeparator: false, // we use content as keys
 
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },
 
    react: {
      wait: true
    }
  })
 
export default i18n