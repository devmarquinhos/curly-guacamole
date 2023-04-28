import Item from './Item'


export default function List(){
    return (
        <>
            <h1>Minha primeira lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Ford"/>
                <Item marca="Fiat"/>
            </ul>
        </>
    )

}