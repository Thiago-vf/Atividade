import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Usuarios from "./pages/Usuarios"
import Atividade from "./pages/Atividade"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/atividade" element={<Atividade />} />
        </Routes>
    )
}

export default Router