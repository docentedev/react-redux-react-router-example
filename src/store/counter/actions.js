import { COUNTER_ADD, COUNTER_SUBS } from "."

export const counterAdd = (number) => {
    return {
        type: COUNTER_ADD,
        payload: number + 1,
    }
} 

export const counterSubs = (number) => {
    return {
        type: COUNTER_SUBS,
        payload: number - 1,
    }
} 