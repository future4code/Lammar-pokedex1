import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/pokemons/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;