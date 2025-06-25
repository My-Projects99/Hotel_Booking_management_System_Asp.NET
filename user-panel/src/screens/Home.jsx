import Navbar from "./../components/Navbar";
import SearchBar from "../components/SearchBar";
import HotelCart from "./../components/Cart";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getRoomWithImgList } from "../services/Room";
function Home() {
  const Hotels = [
    {
      id:1,
      img: "./images/Hotel4.png",
      Hname: "Alankar",
      description: "Kishore Kumar, Lata Mangeshkar",
      price: "1500/-",
    },
    {
      id:2,
        img: "./images/Hotal9.png",
        Hname: "Sangam",
        description: "Kishore Kumar, Lata Mangeshkar",
        price: "1500/-",
      },
      {
        id:3,
        img: "./images/Hotal8.png",
        Hname: "Sayaji",
        description: "Kishore Kumar, Lata Mangeshkar",
        price: "1500/-",
      },
      {
        id:4,
        img: "./images/Hotal5.png",
        Hname: "AramHotel",
        description: "Kishore Kumar, Lata Mangeshkar",
        price: "3500/-",
      },
      {
        id:5,
        img: "./images/Hotal3.png",
        Hname: "Abhiruchi",
        description: "Kishore Kumar, Lata Mangeshkar",
        price: "500/-",
      },
      {
        id:6,
        img: "./images/Hotel9.png",
        Hname: "Adityaz",
        description: "Kishore Kumar, Lata Mangeshkar",
        price: "2500/-",
      },
      {
        id:7,
        img: "./images/Hotal.png",
        Hname: "SunCity",
        description: "Kishore Kumar, Lata Mangeshkar",
        price: "2500/-",
      },
      {
        id:8,
        img: "./images/Hotel7.png",
        Hname: "Abhinandan",
        description: "Kishore Kumar, Lata Mangeshkar",
        price: "2500/-",
      },
  ];
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
      <Navbar />
      <div className="page-header" style={{ widtd: "50%", height: "80px" }}>
        <SearchBar />
      </div>
      <hr />
      <div>
        <p>Category</p>
        <Link></Link>
      </div>
      <hr/>
      <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
          gap: "20px",
          padding: "20px",
        }}>
      {roomList.map((Hotels)=>{ 
        return(<HotelCart
        id={Hotels.id}
        roomNo={Hotels.roomNo}
        hotelId={Hotels.hotelId}
        roomType={Hotels.roomType}
        price={Hotels.pricePerNight}
        city={Hotels.city}
        description={Hotels.description}
        image={Hotels.imageUrl}
        availability={Hotels.availability}
      />
    )})}
    </div>
    </div>
  );
}
export default Home;
