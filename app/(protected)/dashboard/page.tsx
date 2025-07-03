'use client';
import { useSession } from 'next-auth/react';
import CardDashboard from '../components/CardDashboard';
import TeacherDashboard from '@/app/(protected)/teachers/dashboard/TeacherDashboard';
import StudentDashboard from '@/app/(protected)/students/dashboard/StudentDashboard';
import ParentDashboard from '../parents/dashboard/ParentDashboard';

const Page = () => {
  const session = useSession();
  switch (session.data?.user.role) {
    case 'USER':
      return;
    case 'TEACHER':
      return <TeacherDashboard />;
    case 'STUDENT':
      return <StudentDashboard />;
    case 'PARENT':
      return <ParentDashboard />;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 w-full justify-center items-center gap-4">
      <CardDashboard />
      <CardDashboard />
      <CardDashboard />
      <CardDashboard />
    </div>
  );
};

export default Page;
