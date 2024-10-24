const MiniButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center text-xl cursor-pointer  text-text/60 dark:text-textDark/60 hover:text-text dark:hover:text-textDark hover:scale-105 border border-baseSurface/50 dark:border-baseSurfaceDark/0 hover:bg-baseBackground dark:hover:bg-baseBackgroundDark hover:border-text/20 hover:shadow-md rounded-md p-1 duration-200 transition-all">
      {children}
    </div>
  );
};

export default MiniButton;
