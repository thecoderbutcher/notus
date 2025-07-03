import { FaCircleInfo } from 'react-icons/fa6';

interface HeaderTextProps {
  title:string;
  tooltip:string
}
const HeaderText = ({ title, tooltip }: HeaderTextProps) => {
  return (
    <div className="w-full px-0 lg:px-4 py-2">
      <div className="flex justify-between items-center bg-baseBackground text-text/50 shadow dark:bg-baseBackgroundDark dark:text-textDark/50 w-full px-4 py-2 rounded-lg text-sm">
        <p>{title}</p>
        <div className="relative flex items-center justify-center group">
          <FaCircleInfo className="text-lg text-text/20 dark:text-textDark/20 hover:text-text/60 dark:hover:text-textDark/60 cursor-pointer" />
          <div className="absolute top-6 right-0  w-max px-2 py-1 text-sm text-textDark bg-baseBackgroundDark/50 dark:text-text dark:bg-baseBackground/50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            {tooltip}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderText;
