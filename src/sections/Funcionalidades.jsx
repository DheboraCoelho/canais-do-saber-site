import"../styles/Funcionalidades.css";

export default function Funcionalidades(){

const cards=[

{
titulo:"Mapa Interativo",
icone:"🗺️",
texto:"Conheça os canais urbanos de Belém."
},

{
titulo:"Quiz",
icone:"🎮",
texto:"Teste seus conhecimentos."
},

{
titulo:"Desmentindo Fakes",
icone:"❌",
texto:"Aprenda a identificar informações falsas."
},

{
titulo:"Denúncias",
icone:"🚨",
texto:"Ajude a preservar os canais."
}

]

return(

<section id="funcionalidades">

<h2>Funcionalidades</h2>

<div className="cards">

{cards.map((card,index)=>(

<div className="card" key={index}>

<h1>{card.icone}</h1>

<h3>{card.titulo}</h3>

<p>{card.texto}</p>

</div>

))}

</div>

</section>

)

}