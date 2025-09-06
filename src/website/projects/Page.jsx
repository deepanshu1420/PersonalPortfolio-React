import { useParams, NavLink } from "react-router-dom";
import bag from './dataBag';

function Page() {
    const { id } = useParams();
    const myData = bag.find(item => item.id.toString() === id);

    // If for some reason the item is not found, show a message.
    if (!myData) {
        return <div className="container mt-5"><h1>Product not found!</h1></div>;
    }

    // 1. Calculate the new price if a discount exists. Default discount to 0.
    const discount = myData.discount || 0;
    const newPrice = Math.round(myData.price - (myData.price * discount / 100));

    return (
        <>
            <div className="container item-detail d-flex align-items-center justify-content-between mt-5 p-4">
                <div className="row">
                    <div className="col-12 col-xl-6 img-box p-3">
                        <img src={myData.imgSrc} className="img-fluid" alt={myData.title} />
                    </div>
                    <div className="col-12 col-xl-6 text-box d-flex flex-column justify-content-center align-items-start py-4 py-lg-2 px-4">
                        <h1 className="fw-bolder fs-1 text-capitalize"><span>{myData.title}</span></h1>
                        <p className="fw-light sm-text">{myData.desc}</p>
                        
                        {/* ✅ UPDATED PRICE SECTION WITH DISCOUNT LOGIC */}
                        <div className="price-badge fs-3 my-2">
                            {discount > 0 ? (
                                <div className="price-container">
                                    <span className="new-price fw-bolder">₹{newPrice}</span>
                                    <span className="original-price fw-light">₹{myData.price}</span>
                                    <span className="discount-tag">{discount}% off</span>
                                </div>
                            ) : (
                                <span className="price fw-bolder">₹{myData.price}</span>
                            )}
                        </div>

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