import React from 'react';
import Menu from './Of'
import {BrowserRouter} from 'react-router-dom';
import Ri from './Ri'
import MyComponent from './S'
import {useState} from 'react';
function App() {
  const[open,setOpen]=useState(false)
  const[opensidebar,setOpensidebar]=useState(false)
 const  openrightcanvas=(e)=>{
   e.preventDefault();
  setOpen(!open);
  }
 const setOpenhandeler=()=>{
        setOpen(!open)
  }
  const handleSidebar=()=>{
   
    setOpensidebar(!opensidebar)
   
  }

  return (
    <BrowserRouter>
    <div>
     
     <div>
  <nav className="desktopnav navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    <div className="container">
      
      <a className="navbar-brand" href="#">Start Bootstrap</a>
     
      <div  >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown has-megamenu">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Mega menu</a>
            <div className="dropdown-menu megamenu" role="menu">
              <div className="row">
                <div className="col-md-3">
                  <div className="col-megamenu">
                    <h6 className="title">Title Menu One</h6>
                    <ul className="list-unstyled">
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                    </ul>
                  </div>  {/* col-megamenu.// */}
                </div>{/* end col-3 */}
                <div className="col-md-3">
                  <div className="col-megamenu">
                    <h6 className="title">Title Menu Two</h6>
                    <ul className="list-unstyled">
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                    </ul>
                  </div>  {/* col-megamenu.// */}
                </div>{/* end col-3 */}
                <div className="col-md-3">
                  <div className="col-megamenu">
                    <h6 className="title">Title Menu Three</h6>
                    <ul className="list-unstyled">
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                    </ul>
                  </div>  {/* col-megamenu.// */}
                </div>    
                <div className="col-md-3">
                  <div className="col-megamenu">
                    <h6 className="title">Title Menu Four</h6>
                    <ul className="list-unstyled">
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                      <li><a href="#">Custom Menu</a></li>
                    </ul>
                  </div>  {/* col-megamenu.// */}
                </div>{/* end col-3 */}
              </div>{/* end row */} 
            </div> {/* dropdown-mega-menu.// */}
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Page Content */}
  <div className="mobilenav  justify-content-between bg-secondary sticky-top">
    <div  style={{"marginTop":"27px" ,"paddingLeft":"5px"}}> <button type="button" onClick={handleSidebar} >
    <span className="navbar-toggler-icon"></span><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-align-end" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path  d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
  <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"/>
</svg>
  </button></div>
    <div className="bg-warning"><a className="navbar-brand" href="#" style={{"margin":"10px"}}>Start Bootstrap</a>
     </div>
     <div  style={{"marginTop":"27px" ,"paddingLeft":"5px"}}> <button type="button" onClick={openrightcanvas} >
    <span className="navbar-toggler-icon"></span><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-align-start" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path  d="M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
  <path d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z"/>
</svg>
  </button></div>
  </div>
      
      
     
   
  <div className="container-fluid">
  
      <Ri open={open} setOpen={setOpenhandeler} />
      <MyComponent  open={opensidebar}/>
    <div className="row">
      <div className="col-lg-3">
        <h1 className="my-4">Shop Name</h1>
        <div className="list-group">
          <a href="#" className="list-group-item">Category 1</a>
          <a href="#" className="list-group-item">Category 2</a>
          <a href="#" className="list-group-item">Category 3</a>
        </div>
      </div>
      {/* /.col-lg-3 */}
      <div className="col-lg-9">
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item One</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item Two</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item Three</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item Four</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item Five</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item Six</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item Six</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item Six</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item Six</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item Six</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
      </div>
      {/* /.row */}
    </div>
    {/* /.col-lg-9 */}
    {/* /.row */}
  </div>
  {/* /.container */}
  {/* Footer */}
  <footer className="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">Copyright © Your Website 2020</p>
    </div>
    {/* /.container */}
  </footer>
</div>

    </div>
    </BrowserRouter>
  );
}

export default App;
