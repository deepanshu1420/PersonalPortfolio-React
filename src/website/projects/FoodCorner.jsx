import Card from "./Card";
import bag from './data';
function FoodCorner() {
    
    return (
        <>
            <div className="container">
                <h1 className="text-center fw-bold fs-3 mt-5">Dynamic <span>Category Build</span></h1>
                <p className="text-center fw-lighter sm-text">Here I have automated the cards via loops and conditions ...</p>
                <div className="row">
                    <div className="col-12 col-lg-10 col-md-12 mx-auto">
                        <div className="group-btn">
                            {/* later onn */}
                        </div>

                        <div className="food-father">
                            <div className="row">
                                {
                                    bag.map((obj , id)=>{
                                        return <Card key={id} title={obj.title} desc={obj.desc} price={obj.price}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FoodCorner;