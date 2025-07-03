import FormGroup from '@/app/(protected)/components/FormGroup';
import HeaderText from '@/app/(protected)/components/HeaderText';
import { FaUser } from 'react-icons/fa6';

const CreateUserForm = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full">
      <HeaderText title='Agregar profesor' tooltip='Se enviara un mail de confirmación al profesor agregado'/>
      <div className="w-full lg:w-2/3 xl:w-2/4">
        <p className="text-start w-full justify-start">Datos personlaes</p>
        <FormGroup Icon={FaUser} labelFor="user" labelText="user">
          <input />
        </FormGroup>
        <FormGroup Icon={FaUser} labelFor="user" labelText="user">
          <input />
        </FormGroup>
      </div>
    </div>
  );
};

export default CreateUserForm;
