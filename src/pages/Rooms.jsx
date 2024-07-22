
import Navbar from '../components/navbar/Navbar'
import SearchInput from '../components/SearchInput'
import RoomCards from '../components/RoomCards';



function Rooms() {
return (

    <>
    
    <Navbar/>
    <div className='mt-5'><SearchInput /></div>

    <RoomCards/>
    </>
  )
}

export default Rooms