export const SET_ME = "SET_ME";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const UPDATE_ME = "UPDATE_ME";
export const SET_LIGHT_THEME = "SET_LIGHT_THEME";
export const SET_DARK_THEME = "SET_DARK_THEME";

export const setMeAction = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQ2ZTZkNzlhNTAwMTUwOTAyZWYiLCJpYXQiOjE2NjM1NzMzNTksImV4cCI6MTY2NDc4Mjk1OX0.us8ZDLkkp2W8eygVu_nKJqPUZKcBcc9Q66_L9RtWObc",
                },
            });

            if (response.ok) {
                let data = await response.json();
                dispatch({
                    type: SET_ME,
                    payload: data, // noi dobbiamo fornire al reducer il prodotto finito!
                });
                console.log(data);
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const updateMeAction = (user) => {
    return async (dispatch, getState) => {
        try {
            console.log(user);
            const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
                method: "PUT",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQ2ZTZkNzlhNTAwMTUwOTAyZWYiLCJpYXQiOjE2NjM1NzMzNTksImV4cCI6MTY2NDc4Mjk1OX0.us8ZDLkkp2W8eygVu_nKJqPUZKcBcc9Q66_L9RtWObc",
                },
            });

            if (response.ok) {
                let data = await response.json();
                dispatch({
                    type: UPDATE_ME,
                    payload: data,
                });
                console.log(data);
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const getAllUsersAction = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQ2ZTZkNzlhNTAwMTUwOTAyZWYiLCJpYXQiOjE2NjM1NzMzNTksImV4cCI6MTY2NDc4Mjk1OX0.us8ZDLkkp2W8eygVu_nKJqPUZKcBcc9Q66_L9RtWObc",
                },
            });

            if (response.ok) {
                let data = await response.json();
                dispatch({
                    type: GET_ALL_USERS,
                    payload: data,
                });
                console.log(data);
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const setLightAction = () => ({
    type: SET_LIGHT_THEME,
    payload: true,
});

export const setDarkAction = () => ({
    type: SET_DARK_THEME,
    payload: false,
});
