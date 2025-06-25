import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./../components/Navbar";
import BookingDetails from "../components/BookingDetails"; // Import the component

function HotalDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const roomDetails = location.state?.roomDetails; // Get room details from state
  const hotelDetails = location.state?.hotelDetails;
  const [showBookingForm, setShowBookingForm] = useState(false); // State to show/hide booking form

  console.log(hotelDetails);

  if (!roomDetails) {
    return <h2>No Room Details Available</h2>;
  }

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar />
      <hr />
      <div className="container">
        <div className="row">
          {/* Hotel Details Section */}
          <div className="col-4" style={{backgroundColor:"beige"}}>
            <h2>Hotel Details</h2>
            <hr />
            <h4><strong>Hotel Name :</strong> {hotelDetails.hotel_Name}</h4>
            <img src={hotelDetails.imageUrl} alt="Room Image" width="300" height="180" style={{ objectFit: "cover" }} /><br /><br />
            <p><strong>Rating :</strong> {hotelDetails.ratings}</p>
            <p><strong>City :</strong> {hotelDetails.city}</p>
            <p><strong>Address :</strong> {hotelDetails.address}</p>
            <p><strong>Description :</strong> {hotelDetails.description}</p>
            <hr />
          </div>

          {/* Room Details Section */}
          <div className="col-4" style={{backgroundColor:"beige"}}>
            <h2>Room Details</h2>
            <hr />
            <p><strong>Room No:</strong> {roomDetails.roomNo}</p>
            <p><strong>Room Type:</strong> {roomDetails.roomType}</p>
            <p><strong>Price per Night:</strong> ₹ {roomDetails.price}</p>
            <p><strong>City:</strong> {roomDetails.city}</p>
            <p><strong>Description:</strong> {roomDetails.description}</p>
            <p><strong>Availability:</strong> {roomDetails.availability ? "Available" : "Not Available"}</p>
            <img src={roomDetails.image} alt="Room Image" width="300" height="170" style={{ objectFit: "cover" }} /><br /><br />

            {/* Button to toggle BookingDetails */}
            <button onClick={() => setShowBookingForm(true)} className="btn btn-success">
              Proceed to Booking
            </button>
            <button onClick={onCancel} className="btn btn-danger ms-3">
              Cancel
            </button>
          </div>
          <div className="col-4">
          {/* Conditionally Render BookingDetails */}
          {showBookingForm && (
            <div>
              <BookingDetails roomDetails={roomDetails} hotelDetails={hotelDetails} />
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotalDetails;
