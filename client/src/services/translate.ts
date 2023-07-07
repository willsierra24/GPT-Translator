import { log } from 'console'
import { SUPPORTED_LANGUAGES } from '../constants'
import { type FromLanguage, type Language } from '../types'
import axios from "axios"

// NO PUBLIQUES ESTO O SE COLARÁ TU API KEY EN EL CLIENTE
// ESTO LO HACEMOS PORQUE NOS ESTAMOS ENFOCANDO EN ESTE CURSO
// EN REACT y TYPESCRIPT
// DEBES CREAR UNA API PARA ESTO

export async function translate ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  if (fromLanguage === toLanguage) return text

 

  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
  const toCode = SUPPORTED_LANGUAGES[toLanguage]

  try {
    const translation = await axios.post(import.meta.env.VITE_BACKEND_URL,{
    text,
    fromCode,
    toCode
  })
  
  return translation.data 
  } catch (error) {
    return ("Write again")
  }
  
}