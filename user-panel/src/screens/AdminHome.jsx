import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
function AdminHome() {
  return (
    <div>
      <AdminNavbar />
      <hr />
      <h2>Welcom To Your Properties</h2>
      <hr />
<div className="container">
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./images/Hotel9.png" class="d-block w-100" alt="..." style={{height:"450px"}}/>
        </div>
        <div class="carousel-item">
          <img src="./images/Hotal1.png" class="d-block w-100" alt="..." style={{height:"450px"}}/>
        </div>
        <div class="carousel-item">
          <img src="./images/Hotal3.png" class="d-block w-100" alt="..." style={{height:"450px"}} />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
      
</div>
      <hr />
      {/* <Link to="/addHotel">AddHotel</Link>
      <Link to="/addRoom">AddRoom</Link>
      <Link to="/addRoomCategory">AddRoomCategory</Link> */}
      <center>
        <div>Available Bookings Details</div>
      </center>
      <hr />
    </div>
  );
}

export default AdminHome;
