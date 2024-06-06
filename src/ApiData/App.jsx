import './index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
const App = ()=>{

    return(
        <>
            <div className='container'>
                <h1 className='text-capitalize text-center mt-4 fs-2 fw-normal'>live data <span>Content</span></h1>
                <p className='text-center fs-6 fw-lighter'>Data is fetched dynamically in famous ui {`->`} React JS </p>
                <div className="box w-auto mt-4 mb-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-11 table-responsive">
                            <Table/>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default App;