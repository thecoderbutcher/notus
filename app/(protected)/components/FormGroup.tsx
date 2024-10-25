interface FormGroupProps {
  children: React.ReactNode;
  Icon: React.ElementType;
  labelFor: string;
  labelText: string;
  errorMessage?: string;
}
const FormGroup = ({
  children,
  Icon,
  labelFor,
  labelText,
  errorMessage,
}: FormGroupProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col w-full gap-1 px-2 py-1 ">
        <label htmlFor={labelFor} className="text-base font-semibold">
          {labelText}
        </label>
        <div className="flex px-2 items-center shadow-md border rounded-md">
          <Icon className="text-secondary/50" />
          {children}
        </div>
      </div>
      {errorMessage && <p className="text-sm text-danger">{errorMessage}</p>}
    </div>
  );
};

export default FormGroup;
