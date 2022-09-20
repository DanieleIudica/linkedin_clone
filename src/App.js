import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import { User } from "./components/User";
import { MyNavbar } from "./components/MyNavbar";
import { useSelector } from "react-redux";

function App() {
    const theme = useSelector((state) => state.user.theme);
    const styles = useSelector((state) => state.user.styles);
    return (
        <BrowserRouter>
            <div style={theme ? styles.light : { backgroundColor: "black" }}>
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
