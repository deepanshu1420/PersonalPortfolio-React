import { useState  , useEffect} from "react";
import Card from "./Card";
import Spinner from "./Spinner";

function Table(){
    const [bag , updateBag] = useState([]);
    const [show , updateShow] = useState(true);
    let order = 1;
    async function fetchData(){
        try{
            const jsonPromise = await fetch("https://data.covid19india.org/data.json");
            if(jsonPromise.ok){
                const data = await jsonPromise.json();
            // console.log(data);
                updateBag(data.statewise);
                updateShow(false);
            }
            
        }catch(e){
            alert("get connected to network first .....");
        }
    }
    useEffect(()=>{
        fetchData();
    } , []);
    return(
        <>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col"><span>Active</span></th>
                    <th scope="col">Confirmed</th>
                    <th scope="col"><span>Deaths</span></th>
                    <th scope="col">Recovered</th>
                    <th scope="col"><span>MigratedOthers</span></th>
                    </tr>
                </thead>
                {
                    show ? <Spinner/> : <tbody>
              
                                            {
                                                bag.map((obj , id)=>{
                                                    
                                                    return <Card key={id} active={obj.active}  confirmed={obj.confirmed} deaths={obj.deaths}
                                                            recovered={obj.recovered} migratedother={obj.recovered} order={order++}/>
                                            
                                                })
                                            }
              
                                        </tbody>
                }
            </table>
        </>
    );
}

export default Table;


