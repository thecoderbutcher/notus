import { ParamsProp } from '@/lib/typedef';

const page = async ({ params }: ParamsProp) => {
  const { id } = await params;
  console.log(id);

  return <div>page</div>;
};

export default page;
