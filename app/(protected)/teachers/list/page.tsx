'use client';

import Pagination from '@/app/(protected)/components/Pagination'; 
import Header from './components/Header';
import TeachersList from './components/TeachersList';


const ListTeachers = () => {
  return (
    <div className="flex flex-col flex-1 gap-4 p-4  bg-white shadow-lg shadow-shadow rounded-xl m-4 ">
      <Header />
      <TeachersList />
      <Pagination />
    </div>
  );
};

export default ListTeachers;
