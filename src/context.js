import { createContext } from 'react'
import { AvailableLanguages } from './helpers/consts';

export const LanguageContext = createContext({pageLanguage: AvailableLanguages.en});