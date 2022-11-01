export type Action = {type: 'ADD_TOKEN'|'ADD_ID'|'ADD_NAME'; payload: any};

export const addToken = (token: string): Action => ({
    type: 'ADD_TOKEN',
    payload: token,
});

export const addId = (id: number): Action => ({
    type: 'ADD_ID',
    payload: id,
});

export const addName = (name: string): Action => ({
    type: 'ADD_NAME',
    payload: name,
});
