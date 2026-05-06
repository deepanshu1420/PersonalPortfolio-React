import emailjs from "@emailjs/browser";
const Form = () => {
    function submitData(e) {
    e.preventDefault();
    emailjs.send(
        "service_cfaud6n",
        "template_2bncovq",
        {
            from_name: e.target[0].value,
            from_email: e.target[1].value,
            residence: e.target[2].value,
            phone: e.target[3].value,
            message: e.target[4].value,
        },
        "aL2qeJhnClUu7Mlld"
    )
    .then(() => {
        alert("Email Sent Successfully!");
        e.target.reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Failed to send email!");
    });
}
    return (
        <>
            {/* --- THIS IS THE FIX: Added the main container --- */}
            <div className="todo-app-container">
                <h1 className="text-center fw-bold fs-3 mt-4">Contact <span>Us</span></h1>
                <p className="text-center mt-2 fw-lighter sm-text">Reach out to us for more improvement on this UI design.</p>
                
                <div className="row mt-4 justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form onSubmit={submitData}>
                            <div className="mb-4">
                                <label htmlFor="parth kapoor" className="form-label">Name</label>
                                <input type="text" className="form-control" required id="Deepanshu Sharma" placeholder="Deepanshu Sharma" />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" required id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="residence" className="form-label">Residence</label>
                                <input type="text" className="form-control" required id="residence" placeholder="your location" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="number" className="form-label">Phone Number</label>
                                <input type="tel" className="form-control" required id="number" placeholder="76260-XXXXX" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="form-label">Your Feedback</label>
                                <textarea className="form-control" required id="message" rows="3" placeholder="enter your feedback"></textarea>
                            </div>
                            <div className="row my-4">
                                <div className="col-12">
                                    <button type="submit" className="btn sm-text fw-light text-capitalize btn-primary btn-outline-primary">Submit My Response</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Form;