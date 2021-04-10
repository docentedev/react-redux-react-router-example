const initialState = {
    number: 1,
}

export const COUNTER_ADD = 'COUNTER_ADD'
export const COUNTER_SUBS = 'COUNTER_SUBS'

const counterReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case COUNTER_ADD:
            return {
                number: action.payload,
            }
        case COUNTER_SUBS:
            return {
                number: action.payload,
            }
        default:
            return prevState
    }
}

export default counterReducer
