import "../styles/Contato.css";

export default function Contato() {
  return (
    <section id="contato" className="contato">

     <div className="container">

         <div className="section-title">

          <span className="tag">
            Entre em contato
          </span>

          <h2>
            Acompanhe o Canais do Saber
          </h2>

          <p>
            Continue acompanhando nosso projeto pelas redes sociais,
            conheça o código desenvolvido durante o Hackathon e
            baixe o aplicativo para explorar todas as funcionalidades.
          </p>

        </div>

       <div className="contato-botoes">

          <a
            href="https://www.instagram.com/canaisdosaber/"
            target="_blank"
            rel="noopener noreferrer"
            a className="btn btn-contato"
          >
            <img
              src="/icones/instagram.svg"
              alt="Instagram"
            />

            <span>Instagram</span>

          </a>

          <a
            href="#"
            className="btn-contato"
          >
            <img
              src="/icones/github.svg"
              alt="GitHub"
            />

            <span>GitHub</span>

          </a>

          <a
             href="https://drive.google.com/drive/folders/1SWiXei1bq8Y6zyoBZAzOLNj046bcZCpp"
           target="_blank"
            rel="noopener noreferrer"
            className="btn-contato destaque"
    >
      <img
    src="/icones/download.svg"
    alt="Download do aplicativo"
   />

  <span>Baixar Aplicativo</span>

</a>

        </div>

      </div>

    </section>
  );
}