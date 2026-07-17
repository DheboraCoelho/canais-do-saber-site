import "../styles/Funcionalidades.css";

export default function Funcionalidades() {

  const funcionalidades = [
    {
      titulo: "Página Inicial",
      imagem: "/funcionalidades/btn-home.png",
      texto:
        "Acesse rapidamente todas as funcionalidades do aplicativo em uma interface simples e intuitiva."
    },
    {
      titulo: "Quiz Educativo",
      imagem: "/funcionalidades/btn-quiz.png",
      texto:
        "Aprenda sobre os canais urbanos de Belém respondendo perguntas interativas."
    },
    {
      titulo: "Mapa Interativo",
      imagem: "/funcionalidades/btn-mapa.png",
      texto:
        "Visualize os canais urbanos e descubra informações importantes sobre cada local."
    },
    {
      titulo: "Desmentindo Fake News",
      imagem: "/funcionalidades/btn-fake.png",
      texto:
        "Conheça informações verificadas e aprenda a identificar notícias falsas."
    },
    {
      titulo: "Canal de Denúncias",
      imagem: "/funcionalidades/btn-denuncia.png",
      texto:
        "Colabore com a preservação ambiental registrando ocorrências relacionadas aos canais."
    }
  ];

  return (
    <section id="funcionalidades" className="funcionalidades">

      <div className="container">

        <div className="section-title">

          <span className="tag">
            Funcionalidades
          </span>

          <h2>
            Tudo o que você encontra no aplicativo
          </h2>

          <p>
            O Canais do Saber reúne ferramentas educativas e interativas
            para incentivar o conhecimento e a preservação dos canais
            urbanos de Belém.
          </p>

        </div>

        <div className="grid grid-3">

          {funcionalidades.map((item, index) => (

            <article
              className="card funcionalidade"
              key={index}
            >

              <img
                src={item.imagem}
                alt={item.titulo}
              />

              <h3>{item.titulo}</h3>

              <p>{item.texto}</p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}