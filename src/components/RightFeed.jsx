import React from "react";
import { useSelector } from "react-redux";

export const RightFeed = () => {
    const me = useSelector((state) => state.user.me);
    const theme = useSelector((state) => state.user.theme);
    const styles = useSelector((state) => state.user.styles);
    return (
        <div className="feedDiv" style={theme ? styles.light : styles.dark}>
            RightFeed
        </div>
    );
};