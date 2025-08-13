import { useEffect, useState } from "react";

function WeatherApp() {
    const [data, updateData] = useState("");
    const [obj, updateObj] = useState({});

    function trigger(e) {
        updateData(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=7c6df6c4626efe7883e21fbed3b21623`
                );
                const res = await response.json();

                if (response.ok) {
                    updateObj(res);
                } else {
                    console.log("No data found");
                }
            } catch (e) {
                console.log("Network error ...");
            }
        };

        if (data) {
            fetchData();
        }
    }, [data]); // only runs when 'data' changes

    return (
        <div className="container">
            <h2 className="text-center mt-3 fw-bold">
                Check <span>Weather</span>
            </h2>
            <p className="sm-text fw-lighter text-center mt-2">
                Data is fetched over the internet via third-party API. Source: OpenWeather API
            </p>
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-10 col-lg-8 mx-auto">
                            <form className="mt-4">
                                <div className="mb-3">
                                    <label htmlFor="data" className="mb-4 form-label fw-bolder">
                                        Enter the name of the City OR Country
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="data"
                                        placeholder="Eg. Canada"
                                        onChange={trigger}
                                        value={data}
                                    />
                                </div>
                            </form>

                            {data ? (
                                <div className="text-box-weather mt-4">
                                    <div className="name d-flex align-items-end justify-content-between">
                                        <h1 className="fw-bolder">
                                            <span>{obj?.name}</span>
                                        </h1>
                                        <p className="fw-light text-capitalize sm-text">
                                            Feels like: {obj?.main?.feels_like}°C
                                        </p>
                                    </div>
                                    <h1 className="fw-bolder fs-1 mt-3 temp">{obj?.main?.temp}°C</h1>
                                    <div className="name d-flex mt-3 align-items-end justify-content-between">
                                        <p className="fw-bolder">
                                            Visibility: <span>{obj?.visibility}</span>
                                        </p>
                                        <p className="fw-light text-capitalize sm-text">
                                            Humidity: <span>{obj?.main?.humidity}</span>
                                        </p>
                                    </div>
                                    <p className="text-center mt-3 fw-lighter">
                                        This is live data fetched from the network.
                                    </p>
                                </div>
                            ) : (
                                <h1 className="text-center mt-5 fw-lighter" style={{ color: "var(--black)" }}>
                                    Enter to search the weather
                                </h1>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;
