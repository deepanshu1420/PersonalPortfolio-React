import DeleteIcon from '@mui/icons-material/Delete';
function Item({data  , func  , index}){
    function fire(){
        func(index)
    }
    return(
        <>
            <div className="item li data">
                <li>{data}</li>
                {/* import DeleteIcon from '@mui/icons-material/Delete'; */}
                <DeleteIcon id="trash" onClick={fire}/>
            </div>
        </>
    );
}
export default Item;