import { useState } from "react";
import Card from "./Card";

function TodoApp() {
    const [data, updateObj] = useState("");
    const [bag, updateBag] = useState([]);
    const [switchBtn, updateSwitchBtn] = useState(false);
    const [key, updateKey] = useState(null);

    function trigger(e) {
        updateObj(e.target.value);
    }

    function addData() {
        if (!data || data.trim().length === 0) {
            alert("Please enter a task.");
            return;
        }
        if (data.length > 30) {
            alert("To big task to handle.");
            return;
        }
        updateBag([...bag, data.trim()]);
        updateObj("");
    }

    function editItemFunc() {
        if (!data || data.trim().length === 0) {
            alert("Please enter a task.");
            return;
        }
        if (data.length > 30) {
            alert("To big task to handle.");
            return;
        }

        updateBag(prev => {
            return prev.map((ele, id) => {
                if (id === key) {
                    return data.trim();
                } else {
                    return ele;
                }
            })
        });

        updateSwitchBtn(false);
        updateObj("");
    }

    function deleteItem(id) {
        updateBag(prev => {
            return prev.filter((ele, key) => {
                return key !== id;
            })
        });
    }

    function editItem(id) {
        let x = bag[id];
        updateObj(x);
        updateKey(id);
        updateSwitchBtn(true);
    }

    return (
        <>
            {/* New single container for the entire app */}
            <div className="todo-app-container">

                {/* --- Header Section --- */}
                <h1 className="text-center fw-bold fs-3">Todo List with <span>Edit Feature</span></h1>
                <p className="fw-light text-center mb-4">New and Updated Version of todo App is available now .</p>

                {/* --- Input Section --- */}
                <div className="input-box">
                    <div className="mb-3" style={{ flexGrow: 1 }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">Enter Your Task : </label>
                        <input
                            type="text"
                            onChange={trigger}
                            className="form-control"
                            id="exampleFormControlInput1"
                            value={data}
                            placeholder="Task 1" />
                    </div>
                    {
                        switchBtn
                            ? <button className="btn input-btn btn-primary" onClick={editItemFunc}>✏️</button>
                            : <button className="btn input-btn btn-primary" onClick={addData}>+</button>
                    }
                </div>

                {/* --- Task List Section --- */}
                <div className="task-list-container">
                    {
                        bag.length ? <div className="father">
                            {
                                bag.map((ele, id) => {
                                    return <Card key={id} uniqueKey={id} data={ele} func={deleteItem} func1={editItem} />
                                })
                            }
                        </div> : <h1 className="fw-lighter fs-4 text-center mt-5 todo-text">Stack is empty. Add a task to get started!</h1>
                    }
                </div>
            </div>
        </>
    );
}
export default TodoApp;