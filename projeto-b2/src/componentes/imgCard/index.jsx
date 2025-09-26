

import "./imgCard.css";

export default function ImgCard(props) {
    console.log (props)
  return (
    <div className="image-card">
        <img src={props.imagem} alt={props.caption || 'imagem Padrão'}/>
        <h1 className="image-card-caption">
            {props.caption}
        </h1>
        <p>
          {props.texto}
        </p>
        <a href={props.link} target="black">{props.link}</a>
        </div>
  )
}
