import { UPDATE_USERS } from "./actionsTypes"

const initState = {
    users:[]
}

export const usersReducer = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_USERS:
            return {
                ...state, 
                users: action.users
            }
        default:
            return state
    }
}