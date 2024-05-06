import Search from "../../components/search";
import {
    SEARCH_USERS_FAIL,
    SEARCH_USERS_REQ,
    SEARCH_USERS_SUCEESS,
} from "./action";

const InitialState = {
    userList: [],
};

const userReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SEARCH_USERS_REQ:
            return {
                ...state,
                error: null,
            };

        case SEARCH_USERS_SUCEESS:
            return {
                ...state,
                userList: action.data,
            };
        case SEARCH_USERS_FAIL:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export default userReducer;
