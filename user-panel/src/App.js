import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import HotalDetails from './screens/HotalDetails';
import AdminHome from './screens/AdminHome'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserList from './screens/User_List';
import Properties from './screens/Properties';
import UserProfile from './screens/UserProfile';
import About from './screens/About';
import Booking from './screens/Booking';
import AddHotel from './screens/AddHotel';
import AddRoom from './screens/AddRooms';
import AddRoomCategory from './screens/AddRoomCategory';
import AllPropertyList from './screens/AllPropertiesList';
import AllRoomCategoryList from './screens/AllRoomCategory';
import AllRoomList from './screens/AllRoomList';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/AdminHome' element={<AdminHome />} />
        <Route path='/UserList' element={<UserList />} />
        <Route path='/addHotel' element={<AddHotel />} />
        <Route path='/addRoom' element={<AddRoom />} />
        <Route path='/addRoomCategory' element={<AddRoomCategory/>}/>
        <Route path='/allPropertyList' element={<AllPropertyList/>}/>
        <Route path='/allRoomCategoryList' element={<AllRoomCategoryList/>}/>
        <Route path='/allRoomList' element={<AllRoomList/>}/>

        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        
        <Route path='/Login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/hotelDetails' element={<HotalDetails/>} />

        <Route path='/properties' element={<Properties />} />
        <Route path='/userProfile' element={<UserProfile />} />
        <Route path='/aboutUs' element={<About />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
