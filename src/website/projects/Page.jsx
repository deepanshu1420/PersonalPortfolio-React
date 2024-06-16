import { useParams , NavLink} from "react-router-dom";

import bag from './dataBag';
function Page(){
    const obj = useParams();
    // const navigate = useNavigate();
    // console.log(navigate());
    const myData = bag[obj.id];
    return(
        <>
            <div className="container item-detail d-flex align-items-center justify-content-between mt-5 p-4">
                <div className="row">
                    <div className="col-12 col-xl-6 img-box p-3">
                        <img src={myData.imgSrc} className="img-fluid" alt="later on bro" />
                    </div>
                    <div className="col-12 col-xl-6 text-box d-flex flex-column justify-content-center align-items-start py-4 py-lg-2 px-4">
                        <h1 className="fw-bolder fs-1 text-capitalize"><span>{myData.title}</span></h1>
                        <p className="fw-light sm-text">{myData.desc}</p>
                        <p className="fw-bolder fs-3">Rs.{myData.price}</p>
                        <NavLink exact to="/react-1/projects/foodcorner">
                            <button className="btn btn-primary d-block my-3 fw-light input-btn py-2">Go Back</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Page;