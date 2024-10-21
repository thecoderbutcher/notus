import TableSearch from '@/app/(protected)/components/TableSearch';
import Link from 'next/link'; 
import { MdPersonAddAlt1, MdSwapVert, MdTune } from 'react-icons/md';

const Header = () => {

  return (
    <div className="flex items-center justify-between">
      <h1 className="hidden md:block text-lg font-semibold">All teachers</h1>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <TableSearch />
        <div className="flex items-center justify-center text-center gap-2 text-lg text-content/70">
          <button className="rounded-xl bg-stats-soft_yellow p-1">
            <MdTune />
          </button>
          <button className="rounded-xl bg-stats-soft_yellow p-1">
            <MdSwapVert />
          </button>
          <Link href="/teachers/create" className="rounded-xl bg-stats-soft_yellow p-1">
            <MdPersonAddAlt1 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
