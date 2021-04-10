import productsDummy from './dummy.json'
const initialState = {
    getAll: [],
    get: {
        id: '',
        name: 'No existe',
        content: '',
        price: '',
        imageUrl: '',
    },
}

export const PRODUCT_GET_ALL = 'PRODUCT_GET_ALL'
export const PRODUCT_GET = 'PRODUCT_GET'
export const PRODUCT_VIEWED = 'PRODUCT_VIEWED'
export const PRODUCT_NOT_VIEWED = 'PRODUCT_NOT_VIEWED'

const productReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case PRODUCT_GET_ALL:
            return {
                getAll: productsDummy.products.map(p => ({ ...p, viewed: false })),
                get: prevState.product
            }
        case PRODUCT_GET:
            return {
                getAll: prevState.getAll,
                get: prevState.getAll.find(p => p.id === Number.parseInt(action.payload))
            }
        case PRODUCT_VIEWED:
            return {
                ...prevState,
                getAll: prevState.getAll.map(p => p.id === action.payload ? ({ ...p, viewed: true }) : ({ ...p })),
            }
        case PRODUCT_NOT_VIEWED:
            return {
                ...prevState,
                getAll: prevState.getAll.map(p => p.id === action.payload ? ({ ...p, viewed: false }) : ({ ...p })),
            }
        /*
        case PRODUCT_ADD:
            prevState.getAll.push({})
            return {
                ...prevState,
                getAll: prevState.getAll,
            }
        */
        default:
            return prevState
    }
}

export default productReducer
