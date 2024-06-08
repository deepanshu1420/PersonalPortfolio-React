import { NavLink, useParams } from "react-router-dom";
import data from './Data';
function Name(){
    const bag = useParams();
    const index = bag.name;
    return(
        <>
            <div className="box container">
                <div className="img">
                    <img src={data[index].img} alt="sample is here" />
                </div>
                <div className="text">
                    <h2 className="md-heading">{data[index].title}</h2>
                    <p>{data[index].desc}</p>
                    <NavLink to="/react-1/subject">
                        <button className="primary-btn">back</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
export default Name;