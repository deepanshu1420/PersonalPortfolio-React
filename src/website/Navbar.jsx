import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar nav-bg navbar-expand-lg navbar-light bg-light py-4">
          <div className="container-fluid">
            <h1 className='fs-4 fw-bold'>
              <NavLink className="navbar-brand" to="/react-1">Parth <span id="my-name" className='my-logo'>Kapoor</span></NavLink>
            </h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className= {({isActive})=> isActive ? " nav-link is-active" : "nav-link not-active"}  to="/react-1/homepage">Home</NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink className= {({isActive})=> isActive ? " nav-link is-active" : "nav-link not-active "} to="/react-1/weather">Check Weather</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className= {({isActive})=> isActive ? " nav-link is-active" : " nav-link not-active"} to="/react-1/form">Contact Us</NavLink>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;