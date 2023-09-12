import { createContext } from 'react'
import { AvailableLanguages } from './helpers/consts';

export const LocalizationContext = createContext({pageLanguage: AvailableLanguages.en});