import {
    SET_DARK_THEME,
    SET_LIGHT_THEME,
    SET_ME,
    UPDATE_ME,
    GET_ALL_USERS,
    GET_ALL_EXPERIENCES,
    POST_NEW_EXPERIENCES,
    PUT_EXPERIENCES,
    SET_EXP_ID,
    GET_EXPERIENCE,
} from "../action";

const initialState = {
    user: {
        me: null,
        theme: true,
        styles: {
            light: {
                backgroundColor: "white",
            },
            dark: {
                backgroundColor: "rgb(29, 34, 38)",
                color: "white",
            },
        },

        experiences: [],
        expId: "",
        singleExp: null,
    },

    users: { allUsers: [] },
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
        case GET_ALL_USERS:
            return {
                ...state,
                users: {
                    ...state.users,
                    allUsers: action.payload,
                },
            };

        case UPDATE_ME:
            return {
                ...state,
                user: {
                    ...state.user,
                    me: action.payload,
                },
            };

        case GET_ALL_EXPERIENCES:
            return {
                ...state,
                user: {
                    ...state.user,
                    experiences: action.payload,
                },
            };

        case POST_NEW_EXPERIENCES:
            return {
                ...state,
                user: {
                    ...state.user,
                    experiences: [...state.user.experiences, action.payload],
                },
            };


        case SET_EXP_ID:
            return {
                ...state,
                user: {
                    ...state.user,
                    expId: action.payload,
                },
            };
        case GET_EXPERIENCE:
            return {
                ...state,
                user: {
                    ...state.user,
                    singleExp: action.payload,
                },
            };
        default:
            return state;
    }
};

export default mainReducer;
