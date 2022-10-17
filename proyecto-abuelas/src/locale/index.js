import LocalizedStrings from 'react-localization';
const es = require('./es_locale.json')

export default function StringConstants(){
    return new LocalizedStrings({
        es: es
    });
}