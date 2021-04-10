import { PRODUCT_GET_ALL, PRODUCT_GET, PRODUCT_NOT_VIEWED, PRODUCT_VIEWED } from "."

export const productGetAll = () => {
    return {
        type: PRODUCT_GET_ALL,
        payload: undefined,
    }
}

export const productGet = (id) => {
    return {
        type: PRODUCT_GET,
        payload: id,
    }
} 

export const productViewed = (id) => {
    return {
        type: PRODUCT_VIEWED,
        payload: id,
    }
} 

export const productNotViewed = (id) => {
    return {
        type: PRODUCT_NOT_VIEWED,
        payload: id,
    }
} 
