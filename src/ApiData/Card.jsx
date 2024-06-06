function Card(props){
    
    return(
        <>
            <tr>
                <th scope="row"><span>{props.order}</span></th>
                <td>{props.active}</td>
                <td>{props.confirmed}</td>
                <td>{props.deaths}</td>
                <td>{props.recovered}</td>
                <td>{props.migratedother}</td>
            </tr>
        </>
    );
}
export default Card;