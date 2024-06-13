import { useState } from "react";
import Card from "./Card";
function TodoApp() {
    const [data , updateObj] = useState();
    const [bag , updateBag] = useState([]);
    const [switchBtn , updateSwitchBtn] = useState(false);
    const [key , updateKey] = useState();
    function trigger(e){
        updateObj(e.target.value);
    }
    function addData(){
        if(data.length > 30) {
            alert("To big task to handle.");
            return;
        }
        updateBag([...bag , data]);
        updateObj("");
    }
    function editItemFunc(){
        
        if(data.length > 30) {
            alert("To big task to handle.");
            return;
        }

        updateBag(prev=>{
            return prev.map((ele , id)=>{
                if(id === key){
                    return data;
                }else{
                    return ele;
                }
            })
        })

        updateSwitchBtn(false);
        updateObj("");
    }
    function deleteItem(id){
       updateBag(prev=>{
        return prev.filter((ele , key)=>{
            return key !== id;
        })
       });
    }

    function editItem(id){
        let x = bag[id];
        updateObj(x);
        updateKey(id);
        updateSwitchBtn(true);
    }
    return (
        <>
            <div className="container todo">
                <div className="input-check-todo">
                    <h1 className="text-center mt-5 fw-bold fs-3">Todo List with <span>Edit Feature</span></h1>
                    <p className="fw-light text-center">New and Updated Version of todo App is available now .</p>
                    <div className="row">
                        <div className="col-10 col-lg-8 col-md-10 mx-auto">
                            <div className="box">
                                <div className="input-box">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label fw-bold">Enter Your Task : </label>
                                        <input 
                                            type="text" 
                                            onChange={trigger}
                                            class="form-control" 
                                            id="exampleFormControlInput1" 
                                            value={data}
                                            placeholder="Task 1" />
                                    </div>

                                    {
                                        switchBtn ? <button className="btn input-btn btn-primary" onClick={editItemFunc}>Edit Item</button> : <button className="btn input-btn btn-primary" onClick={addData}>Add</button>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row todo-father">
                    <div className="col-10 col-lg-8 mx-auto">
                        {
                            bag.length ? <div className="father">
                            {
                                bag.map((ele, id)=>{
                                    return <Card key={id} uniqueKey = {id} data = {ele} func={deleteItem} func1={editItem}/>
                                })
                            }
                        </div> : <h1 className="fw-lighter fs-1 text-center mt-5">Stack is empty as of now .</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default TodoApp;