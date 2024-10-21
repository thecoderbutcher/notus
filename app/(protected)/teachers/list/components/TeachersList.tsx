'use client';
import Table from '@/app/(protected)/components/Table';
import { useEffect, useState } from 'react';
import { listTeachers } from '../action/list-teachers';
import Image from 'next/image';
import Link from 'next/link';
import { MdDelete, MdRemoveRedEye } from 'react-icons/md';
import { role, teachersData} from '@/lib/data';

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Teacher ID',
    accessor: 'teacherId',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Subjects',
    accessor: 'subjects',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Classes',
    accessor: 'classes',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
];

const TeachersList = () => {
  const [teacherList, setTeacherList] = useState<Teacher | string>('');

  useEffect(() => {
    const dataFetch = async () => {
      const list = await listTeachers();
      setTeacherList(list);
      console.log(list);
    };
    dataFetch();
  }, [setTeacherList]);

  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-content/10 even:bg-stats-pastel_blue/20 text-sm hover:bg-stats-pastel_blue"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt={item.name}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-content/50">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(',')}</td>
      <td className="hidden md:table-cell">{item.classes.join(',')}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2 text-content/70">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-stats-mint_green">
              <MdRemoveRedEye />
            </button>
          </Link>
          {role === 'admin' && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-stats-pastel_pink">
              <MdDelete />
              {/* <FormModal table="teacher" type="delete" id={item.id}/> */}
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return <Table data={teachersData} columns={columns} renderRow={renderRow} />;
};

export default TeachersList;
