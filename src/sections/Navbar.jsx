import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {

  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="navbar">

      <a href="#hero" className="navbar-logo">
        <img src="/logo.png" alt="Logo Canais do Saber" />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuAberto(!menuAberto)}
      >
      {menuAberto ? "✕" : "☰"}
      </button>

      <nav className={`navbar-links ${menuAberto ? "ativo" : ""}`}>

        <a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</a>

        <a href="#aplicativo" onClick={() => setMenuAberto(false)}>
          Aplicativo
        </a>

        <a href="#funcionalidades" onClick={() => setMenuAberto(false)}>
          Funcionalidades
        </a>

        <a href="#curiosidades" onClick={() => setMenuAberto(false)}>
          Curiosidades
        </a>

        <a href="#equipe" onClick={() => setMenuAberto(false)}>
          Equipe
        </a>

        <a href="#contato" onClick={() => setMenuAberto(false)}>
          Contato
        </a>

        <a
          href="https://drive.google.com/drive/folders/1SWiXei1bq8Y6zyoBZAzOLNj046bcZCpp"
          className="download-btn mobile"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuAberto(false)}
        >
          Baixar App
        </a>

      </nav>

      <a
        href="https://drive.google.com/drive/folders/1SWiXei1bq8Y6zyoBZAzOLNj046bcZCpp"
        className="download-btn desktop"
        target="_blank"
        rel="noopener noreferrer"
      >
        Baixar App
      </a>

    </header>
  );
}