import { useState } from "react";
import Card from "./Card";
import bag from './dataBag';

function FoodCorner() {
    const categoryBag = [...new Set(bag.map(ele => ele.category)), "show all"];
    const [itemBag, updateItemBag] = useState(bag);

    function updateCategoryWise(cat) {
        if (cat === "show all") {
            updateItemBag(bag);
        } else {
            updateItemBag(prev => {
                return bag.filter(obj => obj.category === cat);
            })
        }
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center fw-bold fs-3 mt-4">Dynamic <span>Category Build</span></h1>
                <p className="text-center fw-lighter sm-text">Here, I have automated the cards via loops and conditions</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-9 col-md-12 mx-auto">
                        {/* I've added a unique class here for better styling */}
                        <div className="group-btn my-3 mx-auto d-flex align-items-start justify-content-between flex-wrap gap-3 food-category-filters">
                            {
                                categoryBag.map(ele => (
                                    // The <span> has been removed
                                    <button 
                                        className="btn btn-primary sm-text text-capitalize" 
                                        onClick={() => updateCategoryWise(ele)}
                                    >
                                        {ele}
                                    </button>
                                ))
                            }
                        </div>
                        <div className="food-father pb-3">
                            <div className="row">
                                {
                                    itemBag.map((obj, id) => {
                                        return <Card key={obj.id} uniqueKey={obj.id} title={obj.title} desc={obj.desc} price={obj.price} imgSrc={obj.imgSrc} newArrival={obj.newArrival} discount={obj.discount} />
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
