
const Announcements = () => {
  return (
    <div className='bg-white shadow-lg shadow-shadow rounded-xl w-full p-4'>
        <div className="flex items-center justify-between">
            <p className="text-xl font-semibold my-4">Announcements</p>
            <span className="text-xs text-content/60">View all</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-primary/20 rounded-md p-4">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Lorem ipsum dolor sit</p>
                    <span className="text-xs text-content/60 bg-white rounded-md px-1 py-1">
                        2025-01-01
                    </span>
                </div> 
                <p className="text-sm text-content/60 mt-1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium voluptates commodi consequatur, quos sit.
                </p>
            </div>
            <div className="bg-success/20 rounded-md p-4">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Lorem ipsum dolor sit</p>
                    <span className="text-xs text-content/60 bg-white rounded-md px-1 py-1">
                        2025-01-01
                    </span>
                </div> 
                <p className="text-sm text-content/60 mt-1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium voluptates commodi consequatur, quos sit.
                </p>
            </div>
            <div className="bg-warning/20 rounded-md p-4">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Lorem ipsum dolor sit</p>
                    <span className="text-xs text-content/60 bg-white rounded-md px-1 py-1">
                        2025-01-01
                    </span>
                </div> 
                <p className="text-sm text-content/60 mt-1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium voluptates commodi consequatur, quos sit.
                </p>
            </div>

        </div>
        
    </div>
  )
}

export default Announcements