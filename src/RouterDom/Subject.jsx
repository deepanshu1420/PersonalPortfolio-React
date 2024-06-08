import Card from "./Card";
import bag from './Data';
function Subject(){
    return(
        <>
            <div className="father container">
               {
                bag.map((obj , id)=>{
                    return <Card key={id} uniqueKey = {id} img={obj.img} title={obj.title} desc={obj.desc}/>
                })
               }
            </div>
        </>
    );
}
export default Subject;