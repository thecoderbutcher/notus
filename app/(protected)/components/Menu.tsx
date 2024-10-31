'use client'
import Link from 'next/link';
import { menuItems } from '@/lib/constants'; 
import { role } from '@/lib/data';

const Menu = () => {
  return (
    <div className="mt-4 text-sm lg:pl-2 xl:pl-4">
      {menuItems.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <span className="hidden lg:block mt-4 text-text/50 dark:text-textDark/50">
            {item.title}
          </span>
          {item.items.map((it, index) => {
            if (it.visible.includes(role)) {
              return (
                <Link
                  key={index}
                  href={it.href}
                  className="flex items-center justify-center lg:px-4 xl:px-4 lg:justify-start text-text/80 dark:text-textDark/80 gap-4 rounded-md  py-2 transition-all duration-300 hover:bg-primary-light hover:text-textDark dark:hover:bg-primary-dark dark:hover:text-text hover:scale-105"
                >
                  <it.icon className="text-xl" />
                  <span className="hidden lg:block">{it.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
