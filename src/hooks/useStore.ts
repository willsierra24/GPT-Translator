import { AUTO_LANGUAGE } from '../constants';
import { State, Action, fromLanguage, Language } from '../types';
import { useReducer } from 'react'

export const initialState: State = {
	fromLanguage: 'auto',
	toLanguage: 'en',
	fromText: '',
	result: '',
	loading: false,
};

export function reducer(state: State, action: Action) {
	const { type } = action;

	switch (type) {
		case 'INTERCHANGE_LANGUAGES':
            if(state.fromLanguage === AUTO_LANGUAGE){
                return state
            }
			return {
				...state,
				fromLanguage: state.toLanguage,
				toLanguage: state.fromLanguage,
			};

		case 'SET_FROM_LANGUAGE':
			return {
				...state,
				loading: true,
				fromLanguage: action.payload,
			};

		case 'SET_TO_LANGUAGE':
			return {
				...state,
				loading: true,
				toLanguage: action.payload,
			};

		case 'SET_FROM_TEXT':
			return {
				...state,
				loading: true,
				fromText: action.payload,
				result: '',
			};

		case 'SET_RESULT':
			return {
				...state,
				result: action.payload,
				loading: false,
			};

		default:
			return state;
	}
}
export function useStore() {
	const [{
         fromLanguage,
         toLanguage,
         fromText,
         result,
         loading 
        }, dispatch] = useReducer(reducer, initialState);

    const interchangeLanguages = () => {
        dispatch({type: 'INTERCHANGE_LANGUAGES'})
    }

    const setFromLanguage = (payload: fromLanguage) => {
        dispatch({type: 'SET_FROM_LANGUAGE', payload})
    }

    const setToLanguage = (payload: Language) => {
        dispatch({type: 'SET_TO_LANGUAGE', payload})
    }

    const setFromText = (payload: string) => {
        dispatch({type: 'SET_FROM_TEXT', payload})
    }

    const setResult = (payload: string) => {
        dispatch({type: 'SET_RESULT', payload})
    }

    return {
        fromLanguage,
        fromText,
        toLanguage,
        result,
        loading,
        interchangeLanguages,
        setFromLanguage,
        setFromText,
        setToLanguage,
        setResult

    }
}
