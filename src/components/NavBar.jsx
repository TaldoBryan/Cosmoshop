import { useState } from "react";
import "../styles/NavBar.css"

export default function NavBar(){
    const [menuAberto, setMenuAberto] = useState(false)
    return(
      <>
        <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="menu-button">
            ☰
        </button>
         <div
            className={`menu-overlay ${menuAberto ? "ativo" : ""}`}
            onClick={() => setMenuAberto(false)}
            />
       <nav className={`sidebar ${menuAberto ? "aberta" : ""}`}>
                <button
                    className="fechar-menu"
                    onClick={() => setMenuAberto(false)}
                >
                    ✕
                </button>

                <h2>Cosmos Shop</h2>

                <a href="/">Início</a>
                <a href="/departamentos">Departamentos</a>
                <a href="/ofertas">Ofertas</a>
                <a href="/conta">Minha Conta</a>
            </nav>

      </>
    );
};