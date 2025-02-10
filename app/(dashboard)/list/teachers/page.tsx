import TableSearch from "../../(components)/TableSearch"

const ListTeachers = () => {
  return (
    <div className="bg-white shadow-lg shadow-shadow rounded-xl p-4 flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div>
            <button>

            </button>
          </div>

        </div>
      </div>

      {/* List */}
      <div>
        
      </div>

      {/* Pagination */}
      <div>
        
      </div>
    </div>
  )
}

export default ListTeachers