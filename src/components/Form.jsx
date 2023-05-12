export default function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou o usuario")
    }
    return (
        <>
            <h1>Meu Formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </>
    )
}