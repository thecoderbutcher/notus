import Announcements from "./(components)/Announcements"
import AttendaceChart from "./(components)/AttendaceChart"
import CountChart from "./(components)/CountChart"
import EventCalendar from "./(components)/EventCalendar"
import FinanceChart from "./(components)/FinanceChart"
import UserCard from "./(components)/UserCard"

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-2 lg:p-4">
      {/* Left content*/}
      <div className="flex flex-col gap-8 w-full lg:w-2/3 ">
        {/* User stats */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="students"/>
          <UserCard type="teachers"/>
          <UserCard type="parents"/>
          <UserCard type="staff"/>
        </div>
        {/*Middle chart */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/*Count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/*Attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendaceChart/>
          </div>
        </div>
        {/*Bottom chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
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

export default AdminPage