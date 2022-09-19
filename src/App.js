import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import { User } from "./components/User";
import { MyNavbar } from "./components/MyNavbar";

function App() {
    return (
        <BrowserRouter>
            <div>
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
