'use client';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import MiniButton from './MiniButton';
import { MdSettings, MdPerson } from 'react-icons/md';
import {
  MdSearch,
  MdForum,
  MdNotifications,
  MdLogout,
  MdOutlineQuestionMark,
  MdPrivacyTip,
} from 'react-icons/md';
import { logout } from '@/app/(auth)/logout/action/logout';
import Link from 'next/link';

const Navbar = () => {
  const [user, setUsername] = useState<Session | null>(null);
  const desplegableMenuLink = [
    { text: 'Perfil', url: '/user/profile', icon: <MdPerson /> },
    { text: 'Configuración', url: '/user/settings', icon: <MdSettings /> },
    { text: 'Faq', url: '/user/faq', icon: <MdOutlineQuestionMark /> },
    {
      text: 'Política de privacidad',
      url: '/user/privacy',
      icon: <MdPrivacyTip />,
    },
  ];
  const [menuIsOpen, setMenuisOpen] = useState(false);
  const openMenu = () => {
    setMenuisOpen(!menuIsOpen);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuisOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const userInfo = async () => {
      const user = await getSession();
      setUsername(user);
    };
    userInfo();
  }, [setUsername]);

  return (
    <div className="flex items-center justify-between p-4">
      {/* searc bar */}
      <div className="hidden md:flex items-center justify-center rounded-xl px-2 py-1 shadow-md">
        <input
          className="outline-none p-1 w-[300px]"
          type="search"
          name="search"
          id=""
          placeholder="Search..."
        />
        <span className="text-xl ml-1">
          <MdSearch />
        </span>
      </div>
      {/*icon and user*/}
      <div className="flex items-center w-full justify-end gap-2 relative">
        <ThemeToggle />
        <MiniButton>
          <MdForum />
        </MiniButton>
        <MiniButton>
          <div className="flex items-center justify-center text-xl rounded-full cursor-pointer relative">
            <MdNotifications />
            <div className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center rounded-full text-white bg-danger text-[10px] font-semibold">
              1
            </div>
          </div>
        </MiniButton>

        <div
          className="flex justify-center items-center cursor-pointer hover:bg-baseBackground dark:hover:bg-baseBackgroundDark hover:shadow-lg p-2 rounded-md"
          onClick={openMenu}
        >
          <div className="flex flex-col px-4">
            <span className="text-xs leading-3 font-medium">
              {user?.user.name}
            </span>
            <span className="text-xs text-right text-variant lowercase">
              {user?.user.role}
            </span>
          </div>
          <Image
            src="/img/default-user.webp"
            alt="useravatar"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
        {menuIsOpen && (
          <div ref={dropdownRef} className="absolute top-10 bg-baseBackground dark:bg-baseBackgroundDark text-text/80 dark:text-textDark/80  px-2 py-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-1">
              {desplegableMenuLink.map(item => (
                <Link
                  key={item.text}
                  href={item.url}
                  onClick={() => setMenuisOpen(false)}
                  className="flex items-center gap-1 rounded-md px-2 py-1 hover:bg-accent hover:text-textDark dark:hover:text-text group"
                >
                  <span className="p-1 text-lg rounded-full bg-baseSurface group-hover:bg-baseBackgroundDark/20 dark:bg-baseSurfaceDark">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.text}</span>
                </Link>
              ))}
              <span className="border-t-1 border-text/10 dark:border-textDark/10"></span>
              <button
                className="flex items-center gap-1 rounded-md px-2 py-1 hover:bg-accent hover:text-textDark dark:hover:text-text group"
                onClick={() => {
                  logout();
                }}
              >
                <span className="p-1 text-lg rounded-full bg-baseSurface group-hover:bg-baseBackgroundDark/20 dark:bg-baseSurfaceDark">
                  <MdLogout />
                </span>
                <span className="text-sm">Cerrar sesión</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
