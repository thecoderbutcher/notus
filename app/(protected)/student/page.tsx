import Announcements from "../(components)/Announcements" 
import BigCalendar from "../(components)/BigCalendar"
import EventCalendar from "../(components)/EventCalendar"  

const StudentPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-2 lg:p-4">
      {/* Left content*/}
      <div className="flex flex-col gap-8 w-full lg:w-2/3 ">
        <div className='bg-white shadow-lg shadow-shadow rounded-xl w-full h-full p-4'>
          <p className="text-xl font-semibold">Schedule (4A)</p>
          <BigCalendar />
        </div>
      </div>
      {/* Right content*/}
      <div className="w-full h-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}

export default StudentPage