import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import { Header } from "./components";
import { useSelector } from "react-redux";
import './index.css';

const App = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
    }, [isDarkMode]);
    

    return (
        <BrowserRouter>
            <div
                className={`${isDarkMode ? "dark" : "light"
                    } `}
            >
                <Header />
                <main className="p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Setting" element={<Settings />} />
                        <Route path="/Profile" element={<Profile />} />

                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
