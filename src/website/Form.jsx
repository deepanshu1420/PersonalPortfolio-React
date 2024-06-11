const Form = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h1 className="text-center fw-bold fs-3 mt-4">Contact <span>Us</span></h1>
                        <p className="text-center mt-2 fw-lighter sm-text">Lorem ipsumdolor sit amet consectetur adipisicing elit. Corrupti ducimus inventore sit dolorum nihil consequatur?</p>
                        <div className="row mt-4">
                            <div className="col-12 mx-auto col-md-6 col-xl-6">
                                <form action="">
                                    <div class="mb-4">
                                        <label for="parth kapoor" class="form-label">Name</label>
                                        <input type="email" class="form-control" id="parth kapoor" placeholder="parth kapoor" />
                                    </div>
                                    
                                    <div class="mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="residence" class="form-label">Residence</label>
                                        <input type="email" class="form-control" id="residence" placeholder="your location" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="number" class="form-label">Phone Number</label>
                                        <input type="number" class="form-control" id="number" placeholder="76260-XXXXX" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="message" class="form-label">Your Feedback</label>
                                        <textarea class="form-control" id="message" rows="3" placeholder="enter your feedback"></textarea>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-12">
                                        <button type="button" class="btn sm-text fw-light text-capitalize btn-primary btn-outline-primary">Submit my response</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Form;