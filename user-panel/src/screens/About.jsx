import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function About(){
    const [guestName, setUserName] = useState(""); // Store the user's name
    const [guestEmail, setUserEmail] = useState("");
    const [guestMobile, setUserMobile] = useState("");
    const [text,setText] = useState("")
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
        const handleHelp = () => {
            if (!guestName || !guestEmail) {
                toast.error("Please Login To Proceed with booking")
            }else if(text.length==0){
                toast.error("Please Write your Problem!!")
            }else{
                toast.success("Your Request Submitted Successfully")
                toast.success("I Give Solution throuh Email.")
                console.log("Help Request :",{guestName,guestEmail,text})
            }
        };
        const navigate = useNavigate()
        const onCancel = () => {
            toast.success("Your Request Cancled")
            window.location.reload();
            navigate("/aboutUs");
        };
    return(
        <div>
            <Navbar />
            <div className="container" style={{backgroundColor:"greenyellow", height:"400px"}}>
                <h3 >About us</h3>
                <hr />

                
                <h5>Lots of different personalities, but all part of the same family</h5>
                <p>
                    Character and comfort, woven together by the spirit of the neighborhoods we call home. We’re a family of unique hotels all across this big, beautiful world. Welcome to our Neighborhood.
                </p>
                <hr />

                <h5>Heart of the neighborhood</h5>
                <p>
                Installations by local artists, ingredients sourced from nearby family farms, events put on in partnership with the people that call our neighborhoods home — we celebrate the tastes and traditions of the communities we’re a part of, and work to make a positive impact on them in return. After all, it’s their stories that have helped form our own.
                </p>
                <hr />

                <h5>Home comforts, elevated</h5>
                <p>
                Design-led and story-inspired, our guest rooms are as comfortable as they are beautiful. Sink into the plush bedding, admire the handcrafted details and enjoy elevated touches that restore and recharge.
                </p>
                <hr />
                
            </div><br />
            
            <div className="container">
                <center><h3>Help</h3></center>
                <hr />
                <div className="row">
                    <div className="col-4">
                        <div>
                          <label>Name:</label>
                          <input type="text" className="form-control" value={guestName} />
                        </div>
                        <div>
                          <label>Email:</label>
                          <input type="email" className="form-control" value={guestEmail} />
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="mb-3">
                    <label htmlFor="">Write your Concent</label>
                    <textarea
                      onChange={(e) => setText(e.target.value)}
                      rows="3"
                      className="form-control"
                    />
                    </div>
                    </div>
                    <div className="col-4">
                        <br />
                        <br />
                        <br />
                        <br />
                    <button className="btn btn-primary" onClick={handleHelp}>Confirm</button>
                    <button className="btn btn-danger ms-4" onClick={onCancel}>Cancle</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About