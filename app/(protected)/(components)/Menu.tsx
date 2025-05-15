
import Link from "next/link";
import { menuItems } from "../../../constant";
import { role } from "../../../lib/data"
const Menu = () => {
  return (
    <div className="mt-4 text-sm lg:pl-4">
        {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-1 ">
                <span className="hidden lg:block text-gray-400 font-light mt-4">{item.title}</span>
                {item.items.map((it, index) => {
                    if(it.visible.includes(role)){
                        return (
                            <Link key={index} href={it.href} className="flex items-center justify-center lg:pl-4 lg:justify-start gap-4 hover:text-accent-dark rounded-md hover:bg-primary/70 hover:text-white py-2 transition-all duration-300">
                                <it.icon className="text-xl"/>
                                <span className="hidden lg:block">{it.label}</span>
                            </Link>
                        )
                    }
                })}
            </div>
        ))}
    </div>
  )
}

export default Menu