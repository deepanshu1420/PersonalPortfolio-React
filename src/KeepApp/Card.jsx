import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
function Card(props){
    function deleteIt(){
        props.func(props.id);
    }
    return(
        <>
            <div className="card">
                    <div className="head">
                        <h2 className="title semi-md-heading"><span>{props.title}</span></h2>
                        <RestoreFromTrashIcon id="icon" className="trash" onClick={deleteIt}/>
                    </div>
                    <p className="desc sm-text">{props.desc}</p>
                </div>
        </>
    );
}
export default Card;