import { FaMoneyBillTransfer, FaUserGraduate } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoLibrarySharp } from "react-icons/io5";
const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'Becas',
      text: 'It is a long established fact that a reader will be distracted.',
      icon: <GiTakeMyMoney />,
    },
    {
      id: 2,
      title: 'Profesores cualificados',
      text: 'It is a long established fact that a reader will be distracted.',
      icon: <FaUserGraduate />,
    },
    {
      id: 3,
      title: 'Biblioteca',
      text: 'It is a long established fact that a reader will be distracted.',
      icon: <IoLibrarySharp />,
    },
    {
      id: 4,
      title: 'Precios asequibles',
      text: 'It is a long established fact that a reader will be distracted.',
      icon: <FaMoneyBillTransfer />,
    },
  ];
  return (
    <div className="flex flex-col h-full px-4 gap-4 mx-auto justify-center items-center w-full lg:flex-row xl:justify-end relative -top-20">
      {benefits.map(benefit => (
        <div
          key={benefit.id}
          className="flex flex-col gap-2 px-4 bg-textDark shadow-lg  w-full rounded-2xl p-2 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
        >
          <div className="flex justify-between items-center">
            <span className="rounded-full p-2 bg-accent text-textDark text-4xl">
              {benefit.icon}
            </span>
            <span className="text-4xl font-extrabold text-text/15  ">
              {benefit.id}
            </span>
          </div>
          <p className="font-bold text-xl text-text/80">{benefit.title}</p>
          <p className="font-light text-text/60">{benefit.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
