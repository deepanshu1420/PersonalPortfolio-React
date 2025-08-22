import { NavLink } from 'react-router-dom';

function Card(props) {
    const { title, desc, imgSrc, price, newArrival, uniqueKey } = props;

    function getRandom() {
        let num = Math.floor(Math.random() * 6);
        if (num === 0) num = 3;
        let bag = [];
        for (let i = 0; i < num; i++) {
            bag.push(<i className="fa-solid star ex-sm-text fa-star" key={i}></i>);
        }
        return bag;
    }

    return (
        <div className="col-6 col-lg-3 col-md-4 d-flex">
            {/* Added d-flex on parent column for equal height support */}
            <div className="food-card my-2 my-lg-3 d-flex flex-column w-100">
                <div className="img-box-food p-2 p-lg-4">
                    <img src={imgSrc} className="img-fluid" alt={title} />
                </div>

                {/* Converted text-box into a flex column body */}
                <div className="text-box p-2 d-flex flex-column flex-grow-1">
                    <h2 className="fs-6 my-0 text-capitalize fw-bold">
                        {(title).length > 14 ? `${(title).slice(0, 14)}...` : title}
                    </h2>
                    <p className="fw-normal ex-sm-text my-0 desc text-justify">
                        {(desc).length > 35 ? `${(desc).slice(0, 35)}...` : desc}
                    </p>
                    <p className="my-0">
                        <span className="star-num ex-sm-text">
                            {getRandom().length >= 2 ? Math.floor(Math.random() * 99) : getRandom().length + 9}
                        </span>
                        {getRandom().map(ele => ele)}
                    </p>

                    {/* ✅ UPDATED PRICE + BADGE WRAPPER */}
                  <div className="price-badge">
                     <span className="price">Rs.{price}</span>
                     {newArrival === true && <span className="new-item">new</span>}
                  </div>


                    {/* Push button to bottom with mt-auto */}
                    <NavLink exact to={`/react-1/projects/foodcorner/${uniqueKey}`} className="mt-auto">
                        <button className="btn btn-primary ex-sm-text text-capitalize food-btn fw-lighter">
                            more details
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Card;
