import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { useEffect, useState } from "react";
import { getHotelWithImgList } from "../services/Hotel";

function AllPropertyList(){
    const [hotelList,setHotelList]=useState([]);
    
        const onLoadHotelList=async()=>{
            const result = await getHotelWithImgList();
            console.log(result);
            setHotelList(result);
        }
    
        useEffect(() => {
            // load all categories when this component is loaded on the screen
            onLoadHotelList()
          }, [])
    return(
        <div>
            <AdminNavbar />
            <div className="container">
                <h2>Hotel List</h2>
                <Link className="btn btn-success" to="/addHotel">Add Hotel</Link><br></br>
                <table className="table  table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>HotelName</th>
            <th>Address</th>
            <th>City</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {hotelList.map((ul) => {
              return (
                <tr>
                    <td>{ul.id}</td>
                    <td>{ul.hotel_Name}</td>
                    <td>{ul.address}</td>
                    <td>{ul.city}</td>
                    <td>{ul.description}</td>
                    <td>{ul.ratings}</td>
                    {/* <td>{ul.imageUrl}</td> */}
                    <td>
                        <img src={ul.imageUrl} alt="Hotel" width="120" height="80" style={{ objectFit: "cover" }} />
                    </td>

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
export default AllPropertyList