import { Action } from "./actions";

export interface TokenState {
    tokens: String
    ids: number,
    names: String
}

const initialState = {
    tokens: '',
    ids: 0,
    names: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_TOKEN': {
            return {tokens: action.payload, ids: state.ids, names: state.names}
        }
        case 'ADD_ID': {
            return {ids: action.payload, tokens: state.tokens, names: state.names}
        }
        case 'ADD_NAME': {
            return {names: action.payload, tokens: state.tokens, ids: state.ids}
        }

        default: return state
    }
}