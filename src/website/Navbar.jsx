import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar nav-bg navbar-expand-lg navbar-light bg-light py-4">
              <div class="container-fluid">
                <h1 className='fs-4 fw-bold'>
                  <NavLink class="navbar-brand" to="/react-1">Parth <span>Kapoor</span></NavLink>
                </h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <NavLink class="nav-link" aria-current="page" to="/react-1">Home</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink class="nav-link" to="/react-1/form">Form</NavLink>
                    </li>

                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;