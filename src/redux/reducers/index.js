import { SET_DARK_THEME, SET_LIGHT_THEME, SET_ME } from "../action";

const initialState = {
    user: {
        me: null,
        theme: true,
    },
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ME:
            return {
                ...state,
                user: {
                    ...state.user,
                    me: action.payload,
                },
            };
        case SET_LIGHT_THEME:
            return {
                ...state,
                user: {
                    ...state.user,
                    theme: action.payload,
                },
            };
        case SET_DARK_THEME:
            return {
                ...state,
                user: {
                    ...state.user,
                    theme: action.payload,
                },
            };
        default:
            return state;
    }
};

export default mainReducer;
