import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* Ondas decorativas */}
      <img
        src="/ondas/onda-cima.png"
        alt=""
        className="onda onda-top"
      />

      <img
        src="/ondas/onda-baixo.png"
        alt=""
        className="onda onda-bottom"
      />

      <div className="hero-left">

        <img
          src="/logo.png"
          alt="Logo Canais do Saber"
          className="logo"
        />

        <img
          src="/titulo-canais-do-saber.png"
          alt="Canais do Saber"
          className="titulo"
        />

        <p>
          Um aplicativo educativo desenvolvido para aproximar a população dos
          canais urbanos de Belém através da educação ambiental,
          gamificação e combate à desinformação.
        </p>

        <div className="buttons">

          <a href="#sobre">
           <button className="btn btn-primary">
              Conheça o Projeto
           </button>
          </a>

          <a href="#funcionalidades">
           <button className="btn btn-secondary">
            Explorar Aplicativo
            </button>
          </a>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="/telas/mockup-home.png"
          alt="Tela inicial do aplicativo"
          className="mockup"
        />

      </div>

    </section>
  );
}