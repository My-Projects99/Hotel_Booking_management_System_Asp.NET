import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { useEffect, useState } from "react";
import { getRoomWithImgList } from "../services/Room";

function AllRoomList() {
    const [roomList,setRoomList]=useState([]);
        
            const onLoadRoomList=async()=>{
                const result = await getRoomWithImgList();
                console.log(result);
                setRoomList(result);
            }
        
            useEffect(() => {
                // load all categories when this component is loaded on the screen
                onLoadRoomList()
              }, [])
  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <h2>Room List</h2>
        <Link className="btn btn-success" to="/addRoom">
          Add Hotel
        </Link><br />
        <table className="table  table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>RoomNo</th>
            <th>HotelId</th>
            <th>RoomType</th>
            <th>Price</th>
            <th>City</th>
            <th>Description</th>
            <th>Images</th>
            <th>Availability</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {roomList.map((ul) => {
              return (
                <tr>
                    <td>{ul.id}</td>
                    <td>{ul.roomNo}</td>
                    <td>{ul.hotelId}</td>
                    <td>{ul.roomType}</td>
                    <td>{ul.pricePerNight}</td>
                    <td>{ul.city}</td>
                    <td>{ul.description}</td>
                    {/* <td>{ul.imageUrl}</td> */}
                    <td>
                        <img src={ul.imageUrl} alt="Hotel" width="120" height="80" style={{ objectFit: "cover" }} />
                    </td>
                    <td>{ul.availability ? "Available" : "Not Available"}</td>

                    <td><button className='btn btn-success btn-sm'>Edit</button></td>
                    <td> 
                    <button className='btn btn-danger btn-sm ms-2'>
                      Delete
                    </button>
                    </td>
                </tr>
              )
            })}
        </tbody>
      </table>
      </div>
    </div>
  );
}
export default AllRoomList;
