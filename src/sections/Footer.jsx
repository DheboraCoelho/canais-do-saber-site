import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">

          <img
            src="/logo.png"
            alt="Logo Canais do Saber"
          />

          <h3>Canais do Saber</h3>

          <p>
            Aplicativo educativo desenvolvido durante a Maratona Hackathon da
            Universidade do Estado do Pará (UEPA), promovendo educação
            ambiental e combate à desinformação.
          </p>

        </div>

        <div className="footer-links">

          <h4>Navegação</h4>

          <a href="#sobre">Sobre</a>
          <a href="#aplicativo">Aplicativo</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#curiosidades">Curiosidades</a>
          <a href="#equipe">Equipe</a>
          <a href="#contato">Contato</a>

        </div>

        <div className="footer-contato">

          <h4>Links</h4>

          <a
            href="https://www.instagram.com/canaisdosaber/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icones/instagram.svg" alt="" />
            Instagram
          </a>

          <a
            href="https://drive.google.com/drive/folders/1SWiXei1bq8Y6zyoBZAzOLNj046bcZCpp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icones/download.svg" alt="" />
            Download do APK
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 • Canais do Saber • Todos os direitos reservados.
        </p>

        <p>
          Desenvolvido durante a Maratona Hackathon da UEPA.
        </p>

      </div>

    </footer>
  );
}