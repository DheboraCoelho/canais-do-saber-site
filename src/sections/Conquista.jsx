import "../styles/Conquista.css";

export default function Conquista() {
  return (
    <section id="conquista" className="conquista">

      <div className="conquista-imagem">

        <img
          src="/conquista/premio.jpg"
          alt="Equipe do projeto Canais do Saber durante a premiação"
        />

      </div>

      <div className="conquista-texto">

        <span className="tag-conquista">
          🏆 Nossa Conquista
        </span>

        <h2>
          Um projeto reconhecido pela inovação
        </h2>

        <p>
          O <strong>Canais do Saber</strong> foi desenvolvido durante a
          Maratona Hackathon – Combate à Desinformação na Saúde e Meio
          Ambiente, promovida pela Universidade do Estado do Pará (UEPA).
        </p>

        <p>
          A proposta surgiu com o objetivo de aproximar a população dos
          canais urbanos de Belém por meio da tecnologia, educação ambiental
          e participação cidadã.
        </p>

        <p>
          O reconhecimento conquistado durante a competição reforça o
          compromisso da equipe em desenvolver soluções inovadoras que
          contribuam para a conscientização ambiental e o combate à
          desinformação.
        </p>

        <div className="conquista-info">

          <div className="info-card">
            <h3>🏅</h3>
            <span>Hackathon UEPA</span>
          </div>

          <div className="info-card">
            <h3>🌱</h3>
            <span>Educação Ambiental</span>
          </div>

          <div className="info-card">
            <h3>💡</h3>
            <span>Inovação</span>
          </div>

        </div>

      </div>

    </section>
  );
}