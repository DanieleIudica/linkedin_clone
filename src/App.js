import { Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import { User } from "./components/User";
import { MyFooter } from "./components/MyFooter";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <MyFooter/>
            </div>
        </BrowserRouter>

    );
}

export default App;
