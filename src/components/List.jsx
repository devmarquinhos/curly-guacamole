import Item from './Item'


export default function List(){
    return (
        <>
            <h1>Minha primeira lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={1995}/>
                <Item marca="Ford" anoLancamento={1998}/>
                <Item marca="Fiat" anoLancamento={1999}/>
                <Item/>
            </ul>
        </>
    )

}