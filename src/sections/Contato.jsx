import "../styles/Contato.css"; // Isso sobe de 'sections' para 'src' e entra em 'styles'

export default function Contato() {
  return (
    <section id="contato">
      <h2>Acompanhe o Projeto</h2>
      <p>
        Siga nosso Instagram para acompanhar novidades, eventos e futuras versões do aplicativo.
      </p>
      <a href="https://www.instagram.com/canaisdosaber/" target="_blank">
        <button>Instagram Oficial</button>
      </a>
    </section>
  );
}