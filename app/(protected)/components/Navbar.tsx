'use client';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdSearch, MdForum, MdNotifications } from 'react-icons/md';

const Navbar = () => {
  const [user, setUsername] = useState<Session | null>(null);
  useEffect(() => {
    const userInfo = async () => {
      const user = await getSession();
      setUsername(user);
    };
    userInfo();
  }, [setUsername]);

  return (
    <div className="flex items-center justify-between p-4  ">
      {/* searc bar */}
      <div className="hidden md:flex items-center justify-center bg-white rounded-xl px-2 py-1 text-info-dark/50 hover:text-info-dark shadow-md shadow-shadow">
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
      <div className="flex items-center w-full justify-end gap-4 text-info-dark">
        <div className="flex items-center justify-center text-xl rounded-full cursor-pointer">
          <MdForum />
        </div>
        <div className="flex items-center justify-center text-xl rounded-full cursor-pointer relative">
          <MdNotifications />
          <div className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center rounded-full text-darkText bg-danger text-[10px] font-semibold">
            1
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col px-4">
            <span className="text-xs leading-3 font-medium">
              {user?.user.name}
            </span>
            <span className="text-xs text-right text-variant">
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
      </div>
    </div>
  );
};

export default Navbar;
