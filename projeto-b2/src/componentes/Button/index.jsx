import "./button.css";
export default function Button(props) {

  console.log(props);
  return (
    <button className="custon-button" onClick={props.onclick}>
       {props.text}

</button>

  )
}
