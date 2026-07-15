import "../styles/Hero.css";


export default function Hero(){

return(

<section className="hero">

<div className="hero-left">

<img src="/logo.png" className="logo"/>

<h1>Canais do Saber</h1>

<p>

Aplicativo educativo desenvolvido para combater a desinformação sobre os canais urbanos de Belém através da educação ambiental, gamificação e participação cidadã.

</p>

<div className="buttons">

<a href="#sobre">
<button className="btn1">

Conheça o Projeto

</button>

</a>

<a href="#funcionalidades">
<button className="btn2">

Ver Funcionalidades

</button>

</a>

</div>

</div>

<div className="hero-right">

<img src="/mockup-home.png"/>

</div>

</section>

)

}