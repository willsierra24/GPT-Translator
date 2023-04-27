import {Form} from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'
import { Language } from '../types'

interface Props {
    onChange: (language: Language) => void
}


export const LanguageSelector = ({onChange}: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }
    return (
        <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} >
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}