import { Link } from "react-router-dom";

// components/Nav.tsx
export function Nav(){
    return(
        <nav className="nav">
            <Link to="/">Início</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Registros</Link>
        </nav>
    );
}