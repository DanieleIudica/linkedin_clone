import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMeAction } from "../redux/action";

export const LeftFeed = () => {
    const me = useSelector((state) => state.user.me);
    const theme = useSelector((state) => state.user.theme);
    const styles = useSelector((state) => state.user.styles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMeAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {me && (
                <>
                    <div className="feedProfileDivHead" style={theme ? styles.light : styles.dark}>
                        <div className="banner">
                            <div className="bg_image">
                                <div className="bg_image_container">
                                    <img src="http://placekitten.com/700/200" width="100%" alt="" />
                                </div>
                            </div>
                            <Container className="myContainer">
                                <div className="profile_foto d-flex mb-1">
                                    <div className="profile_foto_container_feed text-center">
                                        <img
                                            className="profile_foto_image"
                                            src={me.image}
                                            width="35%"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="info_contatto_feed text-center">
                                    <p className="fw-bold">
                                        {me.name} {me.surname}
                                    </p>
                                    <p>{me.title}</p>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="feedProfileDiv" style={theme ? styles.light : styles.dark}>
                        <p className="d-flex p">
                            Chi ha visitato il tuo profilo? <span className="ms-auto">75</span>
                        </p>
                        <p className="d-flex p">
                            Visualizzazioni del tuo post <span className="ms-auto">2.150</span>
                        </p>
                    </div>
                    <div className="feedProfileDiv" style={theme ? styles.light : styles.dark}>
                        <i className="d-flex">Accedi a strumenti e informazioni in esclusiva</i>
                        <b className="d-flex">
                            <i className="bi bi-slash-square-fill me-2"></i> Prova Premium gratis
                        </b>
                    </div>
                    <div
                        className="feedProfileDivBottom"
                        style={theme ? styles.light : styles.dark}
                    >
                        <p className="fw-bold text-secondary">
                            <i class="bi bi-bookmark-fill me-2"></i> I miei elementi
                        </p>
                    </div>
                </>
            )}
            <div className="feedDiv" style={theme ? styles.light : styles.dark}>
                <img
                    src={theme ? "./feedbar_img/recenti.png" : "./feedbar_img/recenti_dark.png"}
                    alt=""
                    width="90%"
                />
            </div>
        </div>
    );
};
