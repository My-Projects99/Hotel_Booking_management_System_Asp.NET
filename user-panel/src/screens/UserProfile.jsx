import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function UserProfile(){
    const [guestName, setUserName] = useState(""); // Store the user's name
    const [guestEmail, setUserEmail] = useState("");
    const [guestMobile, setUserMobile] = useState("");
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
    return(
        <div>
            <Navbar />
        <div className="container">
            
            <h3>User Profile</h3>
            <table>
                <tbody>
                    {/* <td>Name</td> */}
                    {/* <td>{UserName}</td> */}
                    <div>
                    <h4><strong>Name :</strong>{guestName}</h4>
                    <h4><strong>Email :</strong>{guestEmail}</h4>
                    <h4><strong>Mobile NO :</strong>{guestMobile}</h4>
                    </div>
                </tbody>
            </table>
        </div>
        </div>
    );
}
export default UserProfile