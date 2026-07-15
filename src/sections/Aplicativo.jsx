import { useEffect, useState } from "react";
import "../styles/Aplicativo.css";

const telas = [
  "/telas/home.png",
  "/telas/quiz.png",
  "/telas/mapa.png",
  "/telas/fake.png",
  "/telas/denuncia.png",
];

export default function Aplicativo() {
  const [telaAtual, setTelaAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTelaAtual((prev) => (prev + 1) % telas.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section id="aplicativo" className="aplicativo">

      <div className="aplicativo-texto">

        <h2>Conheça o Aplicativo</h2>

        <p>
          O <strong>Canais do Saber</strong> foi desenvolvido para aproximar a
          população dos canais urbanos de Belém através da educação ambiental,
          divulgação científica e gamificação.
        </p>

        <p>
          O aplicativo reúne informações sobre a Bacia do Tucunduba, combate
          fake news, apresenta um quiz educativo e incentiva a participação da
          comunidade por meio do envio de denúncias e dúvidas.
        </p>

      </div>

      <div className="celular">

        <div className="tela">

          <img
            src={telas[telaAtual]}
            alt="Tela do aplicativo"
          />

        </div>

      </div>

    </section>
  );
}