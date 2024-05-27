import data from './data';
import Card from './Card';
function Component(){
    return(
        <>
            <h1 className="fw-400 md-heading logo">Accordian App</h1>
            <p className="fw-300 sm-text text-capitalize text-center para">back with new mini project in 2024 .</p>
            
            <div className="parent container">
                {
                    data.map((obj , id)=>{
                        return <Card key={id} {...obj}/>
                    })
                }
            </div>
            
        </>
    );
}
export default Component;