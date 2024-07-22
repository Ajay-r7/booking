
import Navbar from '../components/navbar/Navbar'
import RoomCard from '../components/Roomcard'
import SearchInput from '../components/SearchInput'





function Rooms() {
return (

    <>
    
    <Navbar/>
    <div className='mt-5'><SearchInput /></div>

    <RoomCard/>
    </>
  )
}

export default Rooms