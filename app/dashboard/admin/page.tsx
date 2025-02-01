import UserCard from "./(components)/UserCard"

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left content*/}
      <div className="w-full lg:w-2/3">
        {/* User stats */}
        <div className="flex justify-between gap-4">
          <UserCard type="students"/>
          <UserCard type="teachers"/>
          <UserCard type="parents"/>
          <UserCard type="staff"/>
        </div>
      </div>

      {/* Right content*/}
      <div className="w-full lg:w-1/3">
      adsdffa dasd
      </div>
    </div>
  )
}

export default AdminPage