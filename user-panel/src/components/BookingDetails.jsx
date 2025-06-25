import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function BookingDetails({ roomDetails, hotelDetails }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setchildren] = useState("0");

    const [guestName, setUserName] = useState(""); // Store the user's name
    const [guestEmail, setUserEmail] = useState("");
    const [guestMobile, setUserMobile] = useState("");
    // Get the user's name from session storage on component load
    useEffect(() => {
      const storedName = sessionStorage.getItem("name");
      const storedEmail = sessionStorage.getItem("email");
      const storedMobile = sessionStorage.getItem("phone");
      if (storedName) {
        setUserName(storedName);
        setUserEmail(storedEmail);
        setUserMobile(storedMobile);
      }
    }, []);
  const handleBooking = () => {
    if (!guestName || !guestEmail) {
        toast.error("Please Login To Proceed with booking")
    }
    else if(!checkIn || !checkOut){
        toast.error("Enter Your CheckIn CheckOut Date")
    }
    else if (checkOut <= checkIn) {
        toast.error("Check-out date must be after check-in date.")
      }
      else if (adults <= 0) {
        toast.error("Adults must be grater then Zero.")
      }
      else if (children < 0) {
        toast.error("Adults must be grater then Zero.")
      }
    else{
    console.log("Booking Details Submitted", {
      guestName,
      guestEmail,
      guestMobile,
      checkIn,
      checkOut,
      adults,
      children,
      roomDetails,
      hotelDetails
    });
    alert("Booking Confirmed!");
}
  };

  return (
    <div className="card p-4" style={{backgroundColor:"beige"}}>
      <h2>Booking Details</h2>
      <div>
        <label>Name:</label>
        <input type="text" className="form-control" value={guestName} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" className="form-control" value={guestEmail} />
      </div>
      <div>
        <label>Mobile No:</label>
        <input type="text" className="form-control" value={guestMobile} />
      </div>
      <div>
        <label>Check-in Date:</label>
        <input type="date" className="form-control" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>
      <div>
        <label>Check-out Date:</label>
        <input type="date" className="form-control" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>
      <div style={{display:"flex"}}>
        <div>
          <label>Adults :</label>
          <input type="number" className="form-control" value={adults} onChange={(e) => setAdults(e.target.value)} />
        </div>
        <div>
          <label>Childrens:</label>
          <input type="number" className="form-control" value={children} onChange={(e) => setchildren(e.target.value)} />
        </div>
      </div>
      <br />
      <button className="btn btn-primary" onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}

export default BookingDetails;
