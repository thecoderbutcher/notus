import { MdTune } from "react-icons/md";
import { MdPersonAddAlt1} from "react-icons/md";
import { MdSwapVert } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { MdDelete } from "react-icons/md";


import TableSearch from "../../(components)/TableSearch"
import Pagination from "../../(components)/Pagination";
import Table from "../../(components)/Table";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
const ListStudents = () => {
  const renderRow = (item: Student) => (
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
          <p className="text-xs text-content/50">{item?.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2 text-content/70">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-stats-mint_green">
              <MdRemoveRedEye/>
            </button>
          </Link>
         {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-stats-pastel_pink">
               <MdDelete />
               {/* <FormModal table="teacher" type="delete" id={item.id}/> */}
            </button>
          )} 
        </div>
      </td>
    </tr>
  );
  return (
    <div className="flex flex-col flex-1 gap-4 p-4  bg-white shadow-lg shadow-shadow rounded-xl m-4 ">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center justify-center text-center gap-2 text-lg text-content/70">
            <button className="rounded-xl bg-stats-soft_yellow p-1">
              <MdTune />
            </button>
            <button className="rounded-xl bg-stats-soft_yellow p-1">
              <MdSwapVert />
            </button>
            {role === "admin" && ( 
              <button className="rounded-xl bg-stats-soft_yellow p-1">
                <MdPersonAddAlt1 />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* List */}
      <Table data={studentsData} columns={columns}  renderRow={renderRow}/>

      {/* Pagination */}
      <Pagination />
    </div>
  )
}

export default ListStudents