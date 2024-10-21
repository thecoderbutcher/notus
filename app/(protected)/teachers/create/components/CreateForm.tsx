import FormGroup from '@/app/(protected)/components/FormGroup';
import { IoPerson } from 'react-icons/io5';
const CreateForm = () => {
  return (
    <div className="flex flex-col w-full lg:w-3/4 2xl:w-2/4 bg-accent rounded-lg px-10">
      <FormGroup labelFor="name" Icon={IoPerson} labelText="Nombre">
        <input type="text" name="firstName" placeholder="Ingresar nombres" />
      </FormGroup>
    </div>
  );
};

export default CreateForm;
