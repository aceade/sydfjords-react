jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      let resolvedLanguage = "en";
      return {
        t: (str) => str,
        i18n: {
          changeLanguage: (language) => new Promise(() => {            
            resolvedLanguage = language;
            return resolvedLanguage;
          }),
          dir: (language) => new Promise(() => {
            if (language === "ar") {
              return "rtl";
            }
            return "ltr";
          }),
          resolvedLanguage: resolvedLanguage
        },
      };
    },
  }));