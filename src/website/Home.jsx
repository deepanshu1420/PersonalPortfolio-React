import Img from '../images/img72.svg';
const Home = () => {
    return (
        <>
            <div className="container">
                <section className="header d-flex align-items-center">
                    <div className="row">
                        <div className="col-12 col-md-6 col-xl-6 temp-1 d-flex flex-column justify-content-center order-2 order-lg-1">
                            <h1 className="fw-bolder fs-1 lh-base">React : Famous and Powerful <span>UI Library</span> for frontend</h1>
                            <h4 className="fw-bolder mt-3">I am full stack web <span>developer</span></h4>
                            <p className="sm-text fw-light desc my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eum dolor tempora inventore quos suscipit voluptate accusantium consequatur ullam amet quibusdam debitis ratione, iste odio quidem placeat deleniti maxime minima libero quisquam ex id deserunt ipsam nam. Delectus praesentium ratione laudantium temporibus, nesciunt quaerat voluptate fuga molestiae rerum nostrum tenetur.</p>
                            <div className="btns d-flex gap-5 mb-5">
                                <button type="button" className="btn fw-lighter btn-primary text-capitalize">contact us</button>
                                <button type="button" className="btn fw-lighter btn-primary text-capitalize">waiting ...</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6 temp-2 text-end order-1 order-lg-2">
                            <img src={Img} className="img-fluid my-img-1" alt="later on" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Home;