import "../styles/Curiosidades.css";

export default function Curiosidades() {

  const curiosidades = [
    {
      titulo: "Bacia do Tucunduba",
      imagem: "/curiosidades/tucunduba.jpg",
      texto:
        "A Bacia do Tucunduba é uma das principais bacias hidrográficas urbanas de Belém. Ela atravessa diversos bairros e possui grande importância para a drenagem da cidade."
    },
    {
      titulo: "Ecobarreiras",
      imagem: "/curiosidades/ecobarreira.jpg",
      texto:
        "As ecobarreiras ajudam a impedir que resíduos sólidos avancem pelos canais, contribuindo para a limpeza e preservação dos cursos d'água."
    },
    {
      titulo: "Canais Urbanos",
      imagem: "/curiosidades/canal.JPG",
      texto:
        "Os canais urbanos fazem parte da infraestrutura de drenagem da cidade e são fundamentais para reduzir alagamentos durante o período chuvoso."
    },
    {
      titulo: "Macrodrenagem",
      imagem: "/curiosidades/macrodrenagem.jpg",
      texto:
        "As obras de macrodrenagem melhoram o escoamento das águas pluviais, diminuindo enchentes e proporcionando mais qualidade de vida para a população."
    },
    {
      titulo: "Mapa da Bacia",
      imagem: "/curiosidades/mapa-bacia.jpg",
      texto:
        "Conheça a localização da Bacia do Tucunduba e compreenda como ela influencia diversos bairros da capital paraense."
    }
  ];

  return (
    <section id="curiosidades" className="curiosidades">

      <div className="titulo-curiosidades">

        <span>Curiosidades</span>

        <h2>Conheça mais sobre os canais urbanos de Belém</h2>

        <p>
          Informação é uma das melhores formas de preservar o meio ambiente.
          Descubra curiosidades sobre a Bacia do Tucunduba e sua importância
          para a cidade.
        </p>

      </div>

      <div className="grid-curiosidades">

        {curiosidades.map((item, index) => (

          <article className="card-curiosidade" key={index}>

            <img
              src={item.imagem}
              alt={item.titulo}
            />

            <div className="conteudo">

              <h3>{item.titulo}</h3>

              <p>{item.texto}</p>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}