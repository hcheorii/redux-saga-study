import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Search from "./components/search";
function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    );
}

export default App;
