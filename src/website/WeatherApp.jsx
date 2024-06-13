import { useEffect, useState } from "react";
// import Spinner from "./Spinner";
function WeatherApp() {
    const [data, updateData] = useState();
    const [obj, updateObj] = useState({});
    // const [show , updateShow] = useState(true);
    // const api = "https://api.openweathermap.org/data/2.5/weather?q=amritsar&appid=7c6df6c4626efe7883e21fbed3b21623";
    function trigger(e) {
        updateData(e.target.value);
        // console.log(data);
    }

    async function fetchData() {
        try {
            const obj = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=7c6df6c4626efe7883e21fbed3b21623`);
            const res = await obj.json();

            if (obj.ok) {
                updateObj(res);
                // console.log(res.weather[0].description);
                // updateShow(false);
            } else {
                console.log("No");
            }
        } catch (e) {
            // alert("Network error ...");
        }
    }
    useEffect(() => {

        fetchData();
    }, [data]);
    return (
        <>
            <div className="container">
                <h2 className="text-center mt-3 fw-bold">Check <span>Weather</span></h2>
                <p className="sm-text fw-lighter text-center mt-2">Data is fetched over the internet via third party Api . Source : open weather api</p>
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-10 col-lg-8 mx-auto">
                                <form action="" className="mt-4">
                                    <div class="mb-3">
                                        <label for="data" className="mb-4 form-label fw-bolder">Enter the name of the City OR Country</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="data"
                                            placeholder="Eg.Canada"
                                            onChange={trigger}
                                            value={data}
                                        />
                                    </div>
                                </form>

                                {
                                    data ? <div className="text-box-weather mt-4">
                                    <div className="name d-flex align-items-end justify-content-between ">
                                        <h1 className="fw-bolder"><span>{obj?.name}</span></h1>
                                        <p className="fw-light text-capitalize sm-text">Feels like : {obj?.main?.feels_like}°C</p>
                                    </div>
                                    <h1 className="fw-bolder fs-1 mt-3 temp">{obj?.main?.temp}°C</h1>
                                    <div className="name d-flex mt-3 align-items-end justify-content-between ">
                                        <p className="fw-bolder">Visibility : <span>{obj?.visibility}</span></p>
                                        <p className="fw-light text-capitalize sm-text">humidity : <span>{obj?.main?.humidity}</span></p>
                                    </div>
                                    <p className="text-center mt-3 fw-lighter">This is Live data that is available on network ...</p>
                                </div> : <h1 className="text-center mt-5" style={{color : "var(--gray"}}>Enter to search the weather</h1>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default WeatherApp;