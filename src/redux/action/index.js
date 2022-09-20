export const SET_ME = "SET_ME";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const UPDATE_ME = "UPDATE_ME";
export const SET_LIGHT_THEME = "SET_LIGHT_THEME";
export const SET_DARK_THEME = "SET_DARK_THEME";
export const GET_ALL_EXPERIENCES = "GET_ALL_EXPERIENCES";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const POST_NEW_EXPERIENCES = "POST_NEW_EXPERIENCES";
export const PUT_EXPERIENCES = "PUT_EXPERIENCES";
export const SET_EXP_ID = "SET_EXP_ID";

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
                    payload: data,
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

export const getAllExperiencesAction = (userId) => {
    return async (dispatch, getState) => {
        try {
            console.log(userId);
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences",
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQ2ZTZkNzlhNTAwMTUwOTAyZWYiLCJpYXQiOjE2NjM1NzMzNTksImV4cCI6MTY2NDc4Mjk1OX0.us8ZDLkkp2W8eygVu_nKJqPUZKcBcc9Q66_L9RtWObc",
                    },
                }
            );

            if (response.ok) {
                let data = await response.json();
                console.log(data);
                dispatch({
                    type: GET_ALL_EXPERIENCES,
                    payload: data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const getExperienceAction = (userId, expId) => {
    return async (dispatch, getState) => {
        try {
            console.log(userId);
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/profile/" +
                    userId +
                    "/experiences/" +
                    expId,
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQ2ZTZkNzlhNTAwMTUwOTAyZWYiLCJpYXQiOjE2NjM1NzMzNTksImV4cCI6MTY2NDc4Mjk1OX0.us8ZDLkkp2W8eygVu_nKJqPUZKcBcc9Q66_L9RtWObc",
                    },
                }
            );

            if (response.ok) {
                let data = await response.json();
                console.log(data);
                dispatch({
                    type: GET_EXPERIENCE,
                    payload: data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const postNewExperiencesAction = (userId, experience) => {
    return async (dispatch, getState) => {
        try {
            console.log(userId);
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences",
                {
                    method: "POST",
                    body: JSON.stringify(experience),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQ2ZTZkNzlhNTAwMTUwOTAyZWYiLCJpYXQiOjE2NjM1NzMzNTksImV4cCI6MTY2NDc4Mjk1OX0.us8ZDLkkp2W8eygVu_nKJqPUZKcBcc9Q66_L9RtWObc",
                    },
                }
            );

            if (response.ok) {
                let data = await response.json();
                console.log(data);
                dispatch({
                    type: POST_NEW_EXPERIENCES,
                    payload: data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const putExperienceAction = (userId, expId, experience) => {
    return async (dispatch, getState) => {
        try {
            console.log(userId);
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/profile/" +
                    userId +
                    "/experiences/" +
                    expId,
                {
                    method: "PUT",
                    body: JSON.stringify(experience),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQ2ZTZkNzlhNTAwMTUwOTAyZWYiLCJpYXQiOjE2NjM1NzMzNTksImV4cCI6MTY2NDc4Mjk1OX0.us8ZDLkkp2W8eygVu_nKJqPUZKcBcc9Q66_L9RtWObc",
                    },
                }
            );

            if (response.ok) {
                let data = await response.json();
                console.log(data);
                dispatch({
                    type: PUT_EXPERIENCES,
                    // payload: data,
                });
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

export const setExpIdAction = (expId) => ({
    type: SET_EXP_ID,
    payload: expId,
});
