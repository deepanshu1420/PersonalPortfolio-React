function Card(props) {
    const { title, desc, imgSrc, price  , newArrival} = props;
    function getRandom() {
        let num = Math.floor(Math.random() * 6);
        if (num === 0) num = 3;
        let bag = [];
        for (let i = 0; i < num; i++) {
            bag.push(<i className="fa-solid star ex-sm-text fa-star"></i>);
        }

        return bag;
    }

    function trigger(){
        alert("under developmet , baddi jaldi hai tujhe , hai ? ")
    }
    return (

        <>

            <div className="col-6 col-lg-3 col-md-4">
                <div className="food-card my-2 my-lg-3">
                    <div className="img-box-food p-2 p-lg-4">
                        <img src={imgSrc} className="img-fluid" alt="later onn" />
                    </div>
                    <div className="text-box p-2">
                        <h2 className="fs-6 my-0 text-capitalize fw-bold">{(title).length > 14 ? `${(title).slice(0, 14)}...` : title}</h2>
                        <p className="fw-normal ex-sm-text my-0 desc text-justify">{(desc).length > 35 ? `${(desc).slice(0, 35)}...` : desc}</p>
                        <p className="my-0">
                            <span className="star-num ex-sm-text">{getRandom().length >= 2 ? Math.floor(Math.random() * 99) : getRandom().length + 9}</span>
                            {
                                getRandom().map(ele => ele)
                            }

                        </p>

                        <div className="price-list d-flex align-items-start justify-content-between">
                            <p className="sm-text my-0 py-0 fw-normal mt-1 desc">Rs.{price}</p>
                            {
                                newArrival === true ? <p className="ex-sm-text fw-light my-0 py-0 new-item">new</p> : ""
                            }
                        </div>
                        <button className="btn btn-primary ex-sm-text text-capitalize food-btn mt-3 fw-lighter" onClick={trigger}>more details</button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Card;