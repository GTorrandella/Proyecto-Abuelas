import {addLocaleData} from 'react-intl';
import enLang from './entries/en-US';
import esLang from './entries/es_ES';
import ptLang from './entries/pt_BR';

const AppLocale = {
  en: enLang,
  es: esLang,
  pt: ptLang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.pt.data);

export default AppLocale;
