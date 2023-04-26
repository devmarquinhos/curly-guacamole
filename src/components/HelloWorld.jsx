import Frase from "./Frase";

export default function HelloWorld(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <Frase/>
        </div>
    )
}