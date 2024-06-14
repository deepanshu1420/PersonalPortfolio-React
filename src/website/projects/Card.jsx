
function Card(props) {
    function getRandom() {
        let num = Math.floor(Math.random() * 6);
        let bag = [];
        for (let i = 0; i < num; i++) {
            bag.push(<i class="fa-solid star sm-text fa-star"></i>);
        }

        return bag;
    }
    return (

        <>

            <div className="col-6 col-lg-3 col-md-4">
                <div className="food-card my-2 my-lg-5">
                    <div className="img-box-food">
                        <img src={props.img} className="img-fluid" alt="later onn"/>
                    </div>
                    <div className="text-box p-3">
                        <h2 className="fs-5 my-0 text-capitalize fw-bold">{props.title}</h2>
                        <p className="fw-normal sm-text my-0 desc">Lorem ipsum dolor sit amet.</p>
                        <p className="my-0">
                            <span className="star-num sm-text">{getRandom().length}</span>
                            {
                                getRandom().map(ele => ele)
                            }

                        </p>

                        <p className="sm-text my-0 fw-light mt-1">Rs.{props.price}</p>
                        <button className="btn btn-primary text-capitalize food-btn mt-3 fw-lighter">explore</button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Card;