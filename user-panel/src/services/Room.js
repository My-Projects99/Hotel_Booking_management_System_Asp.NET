import axios from "axios";

export async function addRoomCategorys(categoryName,description) {
    try{
        const body={categoryName,description}
        const url='https://localhost:7275/RoomCategories'
        const response=await axios.post(url,body)
        return response.data
      }catch(ex){
        return{status:'error',error:ex}
      }
}

export async function getRoomCategoryList() {
    try {
      const url='https://localhost:7275/RoomCategories'
      const response=await axios.get(url)
      return response.data
    } catch (ex) {
      return{status:'error',error:ex}
    }   
  }


export async function addRoom(roomNo, hotelId, categoryName, price, city,description, image,availabilty ) {
    try {
        console.log({ roomNo, hotelId, categoryName, price, city,description, image,availabilty });
      const url = 'https://localhost:7275/Room'
  
      // create body to upload the data along with an image
      const body = new FormData();
      body.append('RoomNo', roomNo);
      body.append('HotelId', hotelId);
      body.append('RoomType', categoryName);
      body.append('PricePerNight', price);
      body.append('City', city);
      body.append('Description', description);
      body.append('ImagesDto', image); 
    //   body.append('Availability', availabilty);
      body.append('Availability', availabilty === '1' || availabilty === 1 ? 'true' : 'false');

      
      // ✅ Properly log FormData
      for (let [key, value] of body.entries()) {
          console.log(key, value);
      }
  
      const response = await axios.post(url, body)
      console.log(response)
      return response.data
    } catch (ex) {
      return { status: 'error', error: ex }
    }
  }

// export async function addRoom(roomNo, hotelId, categoryName, price, city, description, image, availability) {
//     try {
//         console.log("Submitting Data:", { roomNo, hotelId, categoryName, price, city, description, image, availability });

//         const url = 'https://localhost:7275/Room';
//         const body = new FormData();

//         // ✅ Convert numeric values to ensure correct type
//         body.append('RoomNo', Number(roomNo)); 
//         body.append('HotelId', Number(hotelId));
//         body.append('RoomType', categoryName);
//         body.append('PricePerNight', Number(price));
//         body.append('City', city);
//         body.append('Description', description);
//         body.append('Availability', Number(availability));  // Fix typo and convert to number

//         // ✅ Ensure image is a File object before appending
//         if (image instanceof File) {
//             body.append('ImagesDto', image, image.name);
//         } else {
//             console.error("❌ Image is not a valid File object");
//             return { status: 'error', error: 'Invalid image format. Please select a valid file.' };
//         }

//         // Debug: Log FormData values before sending
//         for (let pair of body.entries()) {
//             console.log(`${pair[0]}:`, pair[1]);
//         }

//         // ✅ `axios` automatically sets `Content-Type: multipart/form-data`
//         const response = await axios.post(url, body);

//         return response.data;
//     } catch (ex) {
//         console.error("❌ Error adding room:", ex);
//         return { status: 'error', error: ex.message || ex };
//     }
// }

export async function getRoomWithImgList() {
    try {
      const url='https://localhost:7275/Room/WithImg'
      const response=await axios.get(url)
      return response.data
    } catch (ex) {
      return{status:'error',error:ex}
    }
  }
