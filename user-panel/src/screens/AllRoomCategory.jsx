import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { useEffect, useState } from "react";
import { getRoomCategoryList } from "../services/Room";

function AllRoomCategoryList(){
        const [roomCategoryList,setRoomCategoryList]=useState([]);
        
            const onLoadRoomCategoryList=async()=>{
                const result = await getRoomCategoryList();
                console.log(result);
                setRoomCategoryList(result);
            }
        
            useEffect(() => {
                // load all categories when this component is loaded on the screen
                onLoadRoomCategoryList()
              }, [])
    return(
        <div>
            <AdminNavbar />
            <div className="container">
                <h2>Room Cattegory List</h2>
                <Link className="btn btn-success" to="/addRoomCategory">Add ROom Category</Link><br />
                <table className="table  table-hover">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Category Name</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {roomCategoryList.map((ul) => {
                        return (
                          <tr>
                              <td>{ul.id}</td>
                              <td>{ul.categoryName}</td>
                              <td>{ul.description}</td> 
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
export default AllRoomCategoryList