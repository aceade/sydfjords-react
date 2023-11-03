
export enum StateAction {
    setName,
    setAddress,
    setMessage,
    reset
}

export function updateFormState(state: any, action: {type: StateAction; value?: string}) {
    
    switch (action.type) {
        case StateAction.setName:
            return {
                ...state,
                name: action.value,
            };
        case StateAction.setAddress:
            return {
                ...state,
                email: action.value,
            };
        case StateAction.setMessage:
            return {
                ...state,
                message: action.value,
            };
        case StateAction.reset:
            return {
                ...state,
                name: "",
                email: "",
                message: ""
            };
    }
}