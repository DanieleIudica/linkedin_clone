import React from "react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { getAllUsersAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.allUsers);
    const theme = useSelector((state) => state.user.theme);
    const styles = useSelector((state) => state.user.styles);

    useEffect(() => {
        dispatch(getAllUsersAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="sideDiv" style={theme ? styles.light : styles.dark}>
                <a href="#!" className="d-flex">
                    Modifica il profilo pubblico e l'URL{" "}
                    <i className="bi bi-question-circle-fill ms-auto"></i>
                </a>
                <div className="divider"></div>
                <a href="#!" className="d-flex">
                    Aggiungi il tuo profilo in un'altra lingua{" "}
                    <i className="bi bi-question-circle-fill ms-auto"></i>
                </a>
                <p></p>
            </div>
            <div className="sideDiv" style={theme ? styles.light : styles.dark}>
                <p className="fw-bold">Persone che potresti conoscere</p>
                {users &&
                    users.map(
                        (user, i) =>
                            i < 6 && (
                                <div className="d-flex mb-3" key={user._id}>
                                    <img
                                        src={user.image}
                                        width="50"
                                        height="50"
                                        alt=""
                                        className="sideImg"
                                    />
                                    <div>
                                        <span className="fw-bold text-secondary">
                                            {user.name} {user.surname}
                                        </span>
                                        <br />
                                        <span>{user.title}</span>
                                        <br />
                                        <Button
                                            className="mt-2 rounded-pill fw-bold"
                                            variant="outline-secondary"
                                            size="sm"
                                        >
                                            Collegati
                                        </Button>
                                    </div>
                                </div>
                            )
                    )}
            </div>
            <div className="sideDiv" style={theme ? styles.light : styles.dark}>
                <img
                    src={theme ? "./sidebar_img/promosso.png" : "./sidebar_img/promosso_dark.png"}
                    alt=""
                />
            </div>
            <div className="sideDiv text-center" style={theme ? styles.light : styles.dark}>
                <img
                    src={
                        theme ? "./sidebar_img/consultate.png" : "./sidebar_img/consultate_dark.png"
                    }
                    alt=""
                />
            </div>
        </>
    );
};
