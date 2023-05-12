export default function Evento( {numero} ) {
    function meuEvento() {
        console.log(`Fui ativado! ${numero}`)
    }

    return (
        <>
            <p>Clique aqui para disparar um evento: </p>
            <button onClick={meuEvento}>Atirar</button>
        </>
    )
}