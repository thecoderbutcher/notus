import { MdMoreHoriz } from "react-icons/md";

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="flex-1 min-w-[130px] rounded-2xl odd:bg-info/50 even:bg-white shadow-md shadow-shadow p-4">
        <div className="flex justify-between items-center">
            <span className="text-xs bg-info-dark/20 px-2 py-1 rounded-xl text-variant">2025/02</span>
            <MdMoreHoriz/>
        </div>
        <h1 className="text-2xl font-semibold my-4">1,234</h1>
        <h2 className="capitalize text-sm font-medium text-info-dark">{type}</h2>
    </div>
  )
}

export default UserCard