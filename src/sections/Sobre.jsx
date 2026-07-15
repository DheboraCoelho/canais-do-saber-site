import"../styles/Sobre.css";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">

      <div className="sobre-texto">

        <h2>Sobre o Projeto</h2>

        <p>
          O <strong>Canais do Saber</strong> é um aplicativo educativo
          desenvolvido durante a Maratona Hackathon – Combate à
          Desinformação na Saúde e Meio Ambiente, promovida pela
          Universidade do Estado do Pará (UEPA).

          Seu principal objetivo é aproximar a população dos canais urbanos
          de Belém por meio da educação ambiental, da divulgação científica
          e da gamificação.
        </p>

      </div>

      <img src="/mockup-home.png" alt="Aplicativo"/>

    </section>
  );
}