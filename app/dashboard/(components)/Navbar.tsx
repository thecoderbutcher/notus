import Image from "next/image";
import { MdSearch, MdForum, MdNotifications } from "react-icons/md";
const Navbar = () => {

    return (
        <div className="flex items-center justify-between p-4 text-primary/50 bg-secondary/20">
            {/* searc bar */}
            <div className="flex items-center justify-center">
                <input type="search" name="search" id="" placeholder="Search..."/>
                <span className="text-xl ml-1"><MdSearch/></span>
            </div>
            {/*icon and user*/}
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center text-xl rounded-full cursor-pointer">
                    <MdForum/>
                </div>
                <div className="flex items-center justify-center text-xl rounded-full cursor-pointer relative">
                    <MdNotifications/>
                    <div className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center rounded-full bg-accent text-[10px] text-primary-dark/40">1</div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col px-4">
                        <span className="text-base leading-3 font-medium">User Name</span>
                        <span className="text-xs text-primary/40 text-right">user rol</span>
                    </div>
                    <Image src="/default-user.webp" alt="useravatar" width={36} height={36} className="rounded-full"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar