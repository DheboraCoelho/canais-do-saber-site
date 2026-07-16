import "../styles/Equipe.css";

export default function Equipe() {
  const integrantes = [
    {
      nome: "Prof.ª Rita Denise",
      funcao: "Orientadora"
    },
    {
      nome: "Dhebora Coelho",
      funcao: "Equipe"
    },
    {
      nome: "Luan Carvalho",
      funcao: "Equipe"
    },
    {
      nome: "Erllon Olivier",
      funcao: "Equipe"
    },
    {
      nome: "Erick Olivier",
      funcao: "Equipe"
    },
    {
      nome: "Bruna Reis",
      funcao: "Equipe"
    }
  ];

  return (
    <section id="equipe" className="equipe-section">

      <div className="titulo-equipe">

        <span>Nossa Equipe</span>

        <h2>
          Pessoas que transformaram uma ideia em realidade
        </h2>

        <p>
          O Canais do Saber nasceu da colaboração entre estudantes e
          professores comprometidos com a educação ambiental, inovação e
          combate à desinformação.
        </p>

      </div>

      <div className="foto-equipe">

        <img
          src="/equipe/equipe.png"
          alt="Equipe Canais do Saber"
        />

      </div>

      <div className="grid grid-3 integrantes">

        {integrantes.map((membro, index) => (

          <div className="card membro" key={index}>

            <div className="avatar">
              {membro.nome.charAt(0)}
            </div>

            <h3>{membro.nome}</h3>

            <p>{membro.funcao}</p>

          </div>

        ))}

      </div>

    </section>
  );
}