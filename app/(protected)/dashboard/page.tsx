import CardDashboard from '../components/CardDashboard';

const page = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 w-full justify-center items-center gap-4'>
      <CardDashboard />
      <CardDashboard />
      <CardDashboard />
      <CardDashboard />
    </div>
  );
};

export default page;
