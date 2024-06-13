function Card(props) {
    function showIcon(e){
        if(e.target.classList.contains("trash")){
            props.func(props.uniqueKey);
        }else if(e.target.classList.contains("edit")){
            props.func1(props.uniqueKey);
        }
    }
    return (
        <>
            <div className="todo-card pe-0 my-4 d-flex align-items-center justify-content-between">
                <h6 className="white py-0 my-0 text-capitalize fw-light">{props.data}</h6>
                <div className="icons d-flex align-items-center px-3 gap-3" onClick={showIcon}>
                    <i class="fa-solid white edit fa-file-pen p-1"></i>
                    <i class="fa-solid black trash fa-trash p-1"></i>
                </div>
            </div>
        </>
    );
}
export default Card;