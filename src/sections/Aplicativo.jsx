import { useState } from "react";
import "../styles/Aplicativo.css";

export default function Aplicativo() {
  const telas = [
    {
      titulo: "Tela Inicial",
      imagem: "/telas/home.png",
      texto:
        "A página inicial apresenta o aplicativo e oferece acesso rápido às principais funcionalidades, permitindo uma navegação simples e intuitiva."
    },
    {
      titulo: "Quiz Educativo",
      imagem: "/telas/quiz.png",
      texto:
        "Responda perguntas sobre meio ambiente, canais urbanos e combate à desinformação enquanto aprende de forma divertida."
    },
    {
      titulo: "Mapa Interativo",
      imagem: "/telas/mapa.png",
      texto:
        "Explore os canais urbanos de Belém e conheça sua localização, importância ambiental e informações relevantes."
    },
    {
      titulo: "Desmentindo Fake News",
      imagem: "/telas/fake.png",
      texto:
        "Descubra como identificar notícias falsas relacionadas ao meio ambiente e tenha acesso a informações confiáveis."
    },
    {
      titulo: "Canal de Denúncias",
      imagem: "/telas/denuncia.png",
      texto:
        "Contribua para a preservação dos canais urbanos enviando denúncias de descarte irregular de lixo e outros problemas ambientais."
    }
  ];

  const [telaAtual, setTelaAtual] = useState(0);

  return (
    <section id="aplicativo" className="aplicativo">
      <div className="container">

        <div className="section-title">
          <span className="tag">Aplicativo</span>

          <h2>Conheça nosso aplicativo</h2>

          <p>
            Explore as principais funcionalidades desenvolvidas para aproximar
            a população dos canais urbanos de Belém.
          </p>
        </div>

        <div className="item">

          <div className="app-texto">

            <h3>{telas[telaAtual].titulo}</h3>

            <p>{telas[telaAtual].texto}</p>

            <a
              href="https://drive.google.com/drive/folders/1SWiXei1bq8Y6zyoBZAzOLNj046bcZCpp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              📥 Baixar APK
            </a>

            <div className="botoes-app">

              {telas.map((tela, index) => (
                <button
                  key={index}
                  onClick={() => setTelaAtual(index)}
                  className={`btn-app ${
                    telaAtual === index ? "ativo" : ""
                  }`}
                >
                  {tela.titulo}
                </button>
              ))}

            </div>

          </div>

          <div className="app-imagem">

            <img
              src={telas[telaAtual].imagem}
              alt={telas[telaAtual].titulo}
            />

          </div>

        </div>

      </div>
    </section>
  );
}